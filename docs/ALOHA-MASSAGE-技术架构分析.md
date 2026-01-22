# Aloha Massage 技术架构分析文档

> 本文档为 CBODY Outcall Massage Bangkok 项目提供技术参考

---

## 1. 核心技术栈

### 1.1 框架与运行时
- **Next.js 15.4.5** (App Router)
- **React 19.1.0**
- **TypeScript 5**
- **Node.js** 运行时

### 1.2 渲染策略
- **SSG (Static Site Generation)** - 主要渲染方式
- `generateStaticParams()` 预生成所有博客和人员页面
- `trailingSlash: true` - URL 以斜杠结尾
- `images: { unoptimized: true }` - 图片不优化（适合静态导出）

---

## 2. 目录结构

```
alohamassage/
├── app/                    # Next.js App Router 页面
│   ├── [slug]/            # 博客文章动态路由（顶级路径）
│   ├── blog/              # 博客列表页
│   │   └── [slug]/        # 重定向到顶级 /[slug]
│   ├── ladies/            # 技师列表和详情
│   ├── services/          # 服务页面
│   ├── booking/           # 预订页面
│   ├── contact/           # 联系页面
│   ├── layout.tsx         # 根布局（含 JSON-LD）
│   ├── page.tsx           # 首页
│   └── sitemap.ts         # 动态 sitemap 生成
│
├── content/               # MDX 内容源
│   ├── blog/             # 博客 MDX 文件
│   └── ladies/           # 技师 MDX 文件
│
├── components/            # React 组件
│   ├── ui/               # shadcn/ui 组件库
│   ├── navigation.tsx    # 导航栏
│   └── footer.tsx        # 页脚
│
├── utils/                 # 工具函数
│   ├── getAllPosts.ts    # 读取所有 MDX 文章
│   ├── getSinglePost.ts  # 读取单篇文章
│   └── schema.ts         # JSON-LD 结构化数据生成
│
├── lib/                   # 库配置
│   └── translations.ts   # 多语言翻译
│
└── public/               # 静态资源
    └── images/           # 图片资源
```

---

## 3. 博客系统实现

### 3.1 内容管理
- **格式**: MDX (Markdown + JSX)
- **存储**: `content/blog/*.mdx`
- **元数据**: YAML Front Matter

#### MDX 文件结构示例
```yaml
---
title: "Beyond Nuru Massage in Chiang Mai"
description: "Looking for nuru massage..."
date: "2025-08-25"
updated: "2025-08-25"
coverImage: "/images/blog/nuru-massage-chiang-mai.jpg"
author: "Aloha Massage Team"
category: "Blog"
tags: ["chiang mai", "nuru massage", "sensual massage"]
---

文章内容...
```

### 3.2 博客路由策略
- **URL 结构**: `/{slug}` (顶级路径，非 `/blog/{slug}`)
- **重定向**: `/blog/{slug}` → `/{slug}` (301 永久重定向)
- **实现文件**:
  - `app/[slug]/page.tsx` - 实际博客页面
  - `app/blog/[slug]/page.tsx` - 重定向处理

### 3.3 内容读取流程
```typescript
// utils/getAllPosts.ts
1. 读取 content/blog/ 目录
2. 使用 gray-matter 解析 MDX front matter
3. 按 sort 字段和日期排序
4. 返回文章列表

// utils/getSinglePost.ts
1. 根据 slug 读取对应 MDX 文件
2. 解析 front matter 和 content
3. 返回完整文章数据
```

### 3.4 MDX 渲染
- **库**: `next-mdx-remote` (RSC 版本)
- **配置**: `@next/mdx` + `@mdx-js/loader`
- **自定义组件**: 覆盖 h2/h3/ul/li/p/strong 样式

---

## 4. SEO 优化策略

### 4.1 元数据生成
每个页面使用 Next.js `generateMetadata()`:
```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "页面标题",
    description: "页面描述",
    openGraph: { ... },
    twitter: { ... },
    alternates: { canonical: "规范 URL" },
    robots: { index: true, follow: true }
  }
}
```

### 4.2 结构化数据 (JSON-LD)

#### 全局 Schema (layout.tsx)
```typescript
// utils/schema.ts - generateBusinessSchema()
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://alohamassagechiangmai.com/#website",
      "name": "Aloha Massage Chiang Mai"
    },
    {
      "@type": ["LocalBusiness", "MassageTherapist"],
      "@id": "https://alohamassagechiangmai.com/#business",
      "name": "Aloha Massage Chiang Mai",
      "telephone": "+66952386661",
      "address": { ... },
      "geo": { "latitude": 18.774709, "longitude": 98.98967 },
      "openingHoursSpecification": [ ... ],
      "priceRange": "฿600-฿2200"
    }
  ]
}
```

#### 博客文章 Schema (app/[slug]/page.tsx)
```typescript
// 每篇文章包含两个 JSON-LD:
1. BlogPosting Schema
   - headline, description, datePublished, dateModified
   - author 和 publisher 引用 #business
   - image, keywords

2. BreadcrumbList Schema
   - Home → Blog → 当前文章
```

### 4.3 Sitemap 生成
```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  // 1. 静态页面（首页、服务、价格等）
  // 2. 动态博客文章（从 content/blog 读取）
  // 3. 技师页面（从 content/ladies 读取）
  // 4. 使用文件 mtime 作为 lastModified
  // 5. 设置 changeFrequency 和 priority
}
```

### 4.4 其他 SEO 特性
- **规范 URL**: 每页设置 `alternates.canonical`
- **Open Graph**: 完整的 OG 标签（title, description, image, type）
- **Twitter Card**: summary_large_image
- **Google 验证**: `<meta name="google-site-verification">`
- **Favicon**: 多尺寸图标（favicon.ico, 192x192, apple-touch-icon）

---

## 5. UI 组件库

### 5.1 shadcn/ui
- **基础**: Radix UI + Tailwind CSS
- **组件**: Button, Card, Badge, Dialog, Accordion, Tabs 等
- **配置**: `components.json`

### 5.2 样式系统
- **Tailwind CSS 4** (PostCSS 插件)
- **主题**: `next-themes` (支持暗黑模式)
- **动画**: `tw-animate-css` + 自定义 Intersection Observer

### 5.3 图标
- **lucide-react**: 现代 SVG 图标库

---

## 6. 关键插件与库

| 插件 | 用途 |
|------|------|
| `@next/mdx` | MDX 支持 |
| `next-mdx-remote` | 服务端 MDX 渲染 |
| `gray-matter` | 解析 YAML front matter |
| `next-sitemap` | Sitemap 生成（未使用，改用 sitemap.ts） |
| `next-themes` | 主题切换 |
| `react-hook-form` + `zod` | 表单验证 |
| `sonner` | Toast 通知 |
| `embla-carousel-react` | 轮播图 |

---

## 7. 性能优化

### 7.1 构建优化
- **Turbopack**: `next dev --turbopack` (开发模式)
- **静态生成**: 所有页面预渲染为 HTML
- **图片**: Next.js Image 组件（虽然 unoptimized）

### 7.2 代码分割
- **自动**: Next.js App Router 自动按路由分割
- **动态导入**: 未使用（项目较小）

---

## 8. 部署配置

### 8.1 构建命令
```bash
npm run build  # next build
npm run start  # next start (生产服务器)
```

### 8.2 输出模式
- **当前**: 标准 Next.js 输出（需 Node.js 服务器）
- **注释掉**: `output: 'export'` (纯静态导出)
- **原因**: Sitemap 需要服务端功能

---

## 9. 可借鉴的核心特性

### 9.1 必须实现
1. **Next.js App Router** - 现代化路由系统
2. **MDX 博客系统** - 灵活的内容管理
3. **JSON-LD 结构化数据** - LocalBusiness + BlogPosting
4. **动态 Sitemap** - 自动包含所有页面
5. **generateMetadata** - 每页独立 SEO 元数据

### 9.2 推荐实现
1. **shadcn/ui** - 高质量组件库
2. **Tailwind CSS** - 快速样式开发
3. **TypeScript** - 类型安全
4. **gray-matter** - MDX 元数据解析
5. **next-themes** - 暗黑模式支持

### 9.3 可选实现
1. **Turbopack** - 开发模式加速
2. **Intersection Observer** - 滚动动画
3. **Four-hands 式多技师展示** - 人员页面

---

## 10. 迁移建议（纯静态 HTML → Next.js）

### 10.1 迁移步骤
```bash
# 1. 初始化 Next.js 项目
npx create-next-app@latest cbody-bangkok --typescript --tailwind --app

# 2. 安装核心依赖
npm install @next/mdx @mdx-js/loader @mdx-js/react next-mdx-remote gray-matter

# 3. 安装 UI 库
npx shadcn@latest init
npx shadcn@latest add button card badge

# 4. 配置 next.config.ts
# 5. 创建目录结构（参考第 2 节）
# 6. 迁移 HTML 内容到 MDX
# 7. 实现 utils/getAllPosts.ts 和 schema.ts
# 8. 创建页面组件
```

### 10.2 内容迁移
```bash
# 将现有 HTML 博客转换为 MDX
content/blog/
├── massage-service-bangkok.mdx
├── outcall-massage-guide.mdx
└── ...

# 添加 front matter
---
title: "Outcall Massage in Bangkok"
description: "Professional outcall massage..."
date: "2025-01-20"
coverImage: "/images/blog/outcall-bangkok.jpg"
tags: ["bangkok", "outcall", "massage"]
---
```

### 10.3 SEO 迁移清单
- [ ] 复制所有现有 meta 标签到 generateMetadata
- [ ] 创建 LocalBusiness JSON-LD（地址、电话、营业时间）
- [ ] 为每篇博客添加 BlogPosting Schema
- [ ] 实现动态 sitemap.ts
- [ ] 设置 Google Search Console 验证
- [ ] 配置 robots.txt

---

## 11. 关键代码片段

### 11.1 博客页面模板
```typescript
// app/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = getSinglePost('blog', params.slug);
  return {
    title: post.title,
    description: post.description,
    openGraph: { ... },
    alternates: { canonical: `https://cbody.com/${params.slug}` }
  };
}

export default function BlogPost({ params }) {
  const post = getSinglePost('blog', params.slug);
  return (
    <>
      <article>
        <MDXRemote source={post.content} />
      </article>
      <script type="application/ld+json">
        {JSON.stringify(generateArticleSchema(post))}
      </script>
    </>
  );
}
```

### 11.2 Sitemap 生成
```typescript
// app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts('blog');
  return [
    { url: 'https://cbody.com', priority: 1.0 },
    ...posts.map(post => ({
      url: `https://cbody.com/${post.slug}`,
      lastModified: new Date(post.updated || post.date),
      changeFrequency: 'weekly',
      priority: 0.9
    }))
  ];
}
```

---

## 12. 性能指标参考

### 12.1 Aloha Massage 的优势
- **首屏加载**: < 2s (静态 HTML)
- **SEO 友好**: 完整的服务端渲染
- **爬虫可读**: 所有内容预生成
- **结构化数据**: 完整的 Schema.org 标记

### 12.2 排名因素
1. **技术 SEO**: JSON-LD + Sitemap + Meta 标签
2. **内容质量**: 长篇博客（1000+ 字）+ 关键词优化
3. **用户体验**: 快速加载 + 移动端优化
4. **本地 SEO**: LocalBusiness Schema + 地理坐标

---

## 总结

Aloha Massage 的成功排名源于：
1. **现代化技术栈** (Next.js 15 + App Router)
2. **完善的 SEO 实现** (JSON-LD + Sitemap + Meta)
3. **灵活的内容管理** (MDX + Front Matter)
4. **优秀的用户体验** (shadcn/ui + Tailwind)

**CBODY 项目应重点复制**:
- JSON-LD 结构化数据（LocalBusiness + BlogPosting）
- 动态 Sitemap 生成
- MDX 博客系统
- generateMetadata 元数据管理
- 顶级路径博客 URL 结构 (/{slug})
