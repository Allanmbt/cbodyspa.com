# CBODY SEO 优化清单

> **用途**: 确保所有页面（静态 + Next.js）都符合 SEO 最佳实践
> **目标**: Google 搜索排名前 3 页，Lighthouse SEO 评分 ≥ 100

---

## 🎯 核心 SEO 策略

### ⚠️ 重要：关键词分层策略（避免过度优化）

**核心原则：不同页面类型使用不同关键词，避免关键词蚕食（Keyword Cannibalization）**

---

### 📍 页面类型与关键词映射

#### 1️⃣ 首页（Homepage）
**主关键词（唯一）：**
- `outcall massage bangkok` ← **最重要，仅首页使用**

**次关键词（2-3个）：**
- `bangkok outcall massage`
- `mobile massage bangkok`
- `massage to your hotel bangkok`

**使用规则：**
- ✅ 主关键词在 H1、Title、Meta Description 中出现
- ✅ 次关键词自然分布在内容中
- ❌ 不要在博客或其他页面重复使用主关键词作为目标

---

#### 2️⃣ 服务页面（Services）
**主关键词（选择一个）：**
- `mobile massage bangkok`
- `in-home massage bangkok`
- `massage at home bangkok`
- `24 hour outcall massage bangkok`

**使用规则：**
- ✅ 每个服务页面选择一个独特的关键词
- ✅ 可以提及首页关键词，但不作为主要目标
- ✅ 内链回首页时使用锚文本 "outcall massage bangkok"

---

#### 3️⃣ 地区页面（Location Pages）
**主关键词（一个地区一个关键词）：**
- `outcall massage sukhumvit`
- `outcall massage silom`
- `outcall massage asok`
- `outcall massage thonglor`
- `outcall massage siam`

**使用规则：**
- ✅ 一个地区 = 一个独立页面 = 一个独特关键词
- ✅ 内容提及该地区的酒店、公寓、地标
- ✅ 内链回首页："For more areas, see our [outcall massage bangkok](/) service"

---

#### 4️⃣ 博客文章（Blog Posts）
**主关键词（长尾关键词，避免与首页冲突）：**
- `how to book outcall massage bangkok`
- `best time for outcall massage bangkok`
- `outcall massage bangkok tips`
- `what to expect outcall massage bangkok`
- `outcall massage bangkok guide 2025`

**使用规则：**
- ✅ 使用长尾关键词（3-5 个词）
- ✅ 回答具体问题（How、What、When、Where）
- ✅ 自然提及首页关键词，但不作为主要目标
- ✅ 内链到首页、服务页、地区页

**示例：**
```markdown
# How to Book Outcall Massage in Bangkok: Complete Guide

If you're looking for convenient **outcall massage in Bangkok**, 
this guide will show you exactly how to book...

[Book outcall massage bangkok](/") through our verified platform...
```

---

#### 5️⃣ 技师页面（Therapist Pages）
**主关键词（避免）：**
- ❌ 不要使用 "outcall massage bangkok" 作为主关键词

**使用规则：**
- ✅ 使用技师名字 + 服务类型
- ✅ 例如："Nisha - Traditional Thai Massage Therapist Bangkok"
- ✅ 内链到服务页面和首页

---

#### 6️⃣ 关于我们 / 联系我们（About/Contact）
**主关键词（避免）：**
- ❌ 不要使用任何主关键词

**使用规则：**
- ✅ 自然提及品牌和服务
- ✅ 例如："CBODY is a platform connecting you with professional massage therapists in Bangkok"
- ✅ 内链到首页和服务页

---

### 🚫 避免关键词蚕食的规则

**什么是关键词蚕食？**
多个页面竞争同一个关键词，导致谷歌不知道该排名哪个页面。

**如何避免：**
1. ✅ **一个关键词 = 一个主页面**
   - `outcall massage bangkok` → 仅首页
   - `mobile massage bangkok` → 仅服务页
   - `outcall massage sukhumvit` → 仅 Sukhumvit 地区页

2. ✅ **其他页面可以提及，但不作为主要目标**
   - 博客文章可以提及 "outcall massage bangkok"
   - 但主要目标是长尾关键词

3. ✅ **使用内链明确页面层级**
   - 首页 ← 最重要
   - 服务页、地区页 ← 次要
   - 博客文章 ← 支持内容

---

### 🔗 内链策略（形成蜘蛛网结构）

#### 内链原则
1. **首页是核心**：所有页面都应该链接回首页
2. **相关页面互链**：博客文章之间、服务页面之间互相链接
3. **使用描述性锚文本**：不要用 "click here"，使用关键词

#### 内链结构示例

```
首页 (outcall massage bangkok)
├── 服务页 1 (mobile massage bangkok)
│   ├── 博客文章 1 (how to book mobile massage)
│   └── 博客文章 2 (mobile massage benefits)
│
├── 服务页 2 (24 hour outcall massage bangkok)
│   └── 博客文章 3 (late night massage tips)
│
├── 地区页 1 (outcall massage sukhumvit)
│   ├── 博客文章 4 (best massage sukhumvit)
│   └── 技师页面 (therapists in sukhumvit)
│
└── 地区页 2 (outcall massage silom)
    └── 博客文章 5 (massage hotels silom)
```

#### 内链锚文本示例

**从博客文章链接到首页：**
```html
<!-- ✅ 好的锚文本 -->
<a href="/">outcall massage bangkok</a>
<a href="/">professional outcall massage in Bangkok</a>

<!-- ❌ 不好的锚文本 -->
<a href="/">click here</a>
<a href="/">homepage</a>
```

**从博客文章链接到服务页：**
```html
<!-- ✅ 好的锚文本 -->
<a href="/services/mobile-massage">mobile massage service</a>
<a href="/services/24-hour">24 hour massage service</a>
```

**从服务页链接到地区页：**
```html
<!-- ✅ 好的锚文本 -->
<a href="/locations/sukhumvit">outcall massage in Sukhumvit</a>
<a href="/locations/silom">massage service in Silom</a>
```

---

### 📊 关键词密度（避免过度优化）

**安全范围：**
- 主关键词：0.5-1.5%（不超过 2%）
- 次关键词：0.3-0.8%
- LSI 关键词：自然分布

**计算方法：**
```
关键词密度 = (关键词出现次数 / 总字数) × 100%

示例：
文章 1000 字
"outcall massage bangkok" 出现 10 次
密度 = (10 / 1000) × 100% = 1%  ✅ 安全
```

**避免过度优化的信号：**
- ❌ 关键词密度 > 2%
- ❌ 关键词在每个段落都出现
- ❌ 关键词使用不自然（强行插入）
- ❌ 多个页面使用相同的 Title 和 Description

---

### 🎯 主关键词（Bangkok）- 仅供参考

**Primary（仅首页）：**
- `outcall massage bangkok`

**Secondary（服务页）：**
- `mobile massage bangkok`
- `in-home massage bangkok`
- `massage at home bangkok`
- `24 hour outcall massage bangkok`

**Long-tail（博客文章）：**
- `how to book outcall massage bangkok`
- `outcall massage bangkok guide`
- `best outcall massage bangkok`
- `outcall massage bangkok tips`

**Location-based（地区页）：**
- `outcall massage sukhumvit`
- `outcall massage silom`
- `outcall massage asok`
- `outcall massage thonglor`

**⚠️ 重要提醒：**
- 不要在每个页面都使用 "outcall massage bangkok"
- 根据页面类型选择合适的关键词
- 使用内链策略连接所有页面

---

## ✅ 页面级 SEO 检查清单

### 1. Meta 标签（每个页面必须）

```html
<!-- 标题：50-60 字符，包含主关键词 -->
<title>Outcall Massage Bangkok | Mobile & Home Service - CBODY</title>

<!-- 描述：150-160 字符，包含主关键词和 CTA -->
<meta name="description" content="Best outcall massage Bangkok service. Book verified mobile massage therapists to your home or hotel. Professional home massage in Bangkok available 24/7.">

<!-- 关键词：5-10 个相关关键词 -->
<meta name="keywords" content="outcall massage bangkok, mobile massage bangkok, home massage bangkok, massage service bangkok">

<!-- Robots -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

<!-- Canonical URL -->
<link rel="canonical" href="https://cbodyspa.com/page-url">
```

### 2. Open Graph 标签

```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://cbodyspa.com/page-url">
<meta property="og:title" content="页面标题">
<meta property="og:description" content="页面描述">
<meta property="og:image" content="https://cbodyspa.com/images/og-image.webp">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="CBODY">
<meta property="og:locale" content="en_US">
```

### 3. Twitter Card 标签

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="页面标题">
<meta name="twitter:description" content="页面描述">
<meta name="twitter:image" content="https://cbodyspa.com/images/og-image.webp">
```

### 4. 本地 SEO（Bangkok）

```html
<!-- Geo Targeting -->
<meta name="geo.region" content="TH-10">
<meta name="geo.placename" content="Bangkok">
<meta name="geo.position" content="13.7563;100.5018">
```

---

## 📊 结构化数据（JSON-LD）

### LocalBusiness Schema（全局）

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MassageTherapist"],
  "name": "CBODY Outcall Massage Bangkok",
  "alternateName": "CBODY Mobile Massage Bangkok",
  "description": "Professional outcall massage Bangkok service. Book verified mobile massage therapists to your home or hotel.",
  "url": "https://cbodyspa.com",
  "telephone": "+66834826667",
  "email": "cbodyspa@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangkok",
    "addressRegion": "Bangkok",
    "postalCode": "10110",
    "addressCountry": "TH"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.7563",
    "longitude": "100.5018"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "฿฿",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "reviewCount": "1250"
  },
  "areaServed": {
    "@type": "City",
    "name": "Bangkok"
  }
}
```

### BlogPosting Schema（博客文章）

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "文章标题",
  "description": "文章描述",
  "image": "https://cbodyspa.com/images/blog/article.webp",
  "datePublished": "2025-01-20",
  "dateModified": "2025-01-20",
  "author": {
    "@type": "Organization",
    "name": "CBODY Team"
  },
  "publisher": {
    "@id": "https://cbodyspa.com/#business"
  },
  "keywords": "outcall massage bangkok, mobile massage",
  "articleSection": "Guide"
}
```

### FAQPage Schema（FAQ 页面）

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is outcall massage in Bangkok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Outcall massage Bangkok means a professional massage therapist comes to your location..."
      }
    }
  ]
}
```

### BreadcrumbList Schema（面包屑）

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://cbodyspa.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://cbodyspa.com/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "文章标题",
      "item": "https://cbodyspa.com/blog/article-slug"
    }
  ]
}
```

---

## 🏗️ 技术 SEO

### 1. 语义化 HTML

```html
<header>
  <nav>
    <!-- 导航 -->
  </nav>
</header>

<main>
  <article>
    <h1>主标题</h1>
    <section>
      <h2>章节标题</h2>
      <p>内容...</p>
    </section>
  </article>
</main>

<footer>
  <!-- 页脚 -->
</footer>
```

### 2. H1-H6 层级结构

```html
<h1>页面主标题（仅一个）</h1>
  <h2>主要章节</h2>
    <h3>子章节</h3>
      <h4>详细内容</h4>
  <h2>另一个主要章节</h2>
    <h3>子章节</h3>
```

**规则：**
- 每页只有一个 `<h1>`
- 不跳级（不要从 h2 直接到 h4）
- 包含关键词

### 3. 图片优化

```html
<!-- 必须包含 alt 属性 -->
<img 
  src="/images/outcall-massage-bangkok.webp" 
  alt="Professional outcall massage therapist in Bangkok providing home service"
  width="800"
  height="600"
  loading="lazy"
>

<!-- 使用 WebP 格式 + 降级 -->
<picture>
  <source srcset="/images/image.webp" type="image/webp">
  <img src="/images/image.jpg" alt="描述" loading="lazy">
</picture>
```

**要求：**
- 所有图片必须有 alt 属性
- Alt 文本包含关键词（自然）
- 使用 WebP 格式
- 非首屏图片使用 `loading="lazy"`
- 提供 width 和 height 属性

### 4. 内部链接

```html
<!-- 相关页面互链 -->
<a href="/blog/outcall-massage-guide">Learn more about outcall massage</a>

<!-- 使用描述性锚文本 -->
<a href="/services">View our massage services</a>

<!-- 避免 "click here" -->
```

**策略：**
- 每页至少 3-5 个内部链接
- 使用描述性锚文本
- 链接到相关内容
- 避免过度链接

### 5. URL 结构

```
✅ 好的 URL：
https://cbodyspa.com/blog/outcall-massage-bangkok-guide
https://cbodyspa.com/services/traditional-thai-massage

❌ 不好的 URL：
https://cbodyspa.com/page?id=123
https://cbodyspa.com/blog/post-2025-01-20
```

**规则：**
- 使用连字符（-）分隔单词
- 包含关键词
- 简短且描述性
- 小写字母
- 避免特殊字符

---

## 📄 Sitemap 和 Robots.txt

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cbodyspa.com/</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://cbodyspa.com/blog/article-slug</loc>
    <lastmod>2025-01-20</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### robots.txt
```
User-agent: *
Allow: /

Sitemap: https://cbodyspa.com/sitemap.xml
```

---

## 📝 内容 SEO

### 1. 博客文章结构

```markdown
# 主标题（H1）- 包含主关键词

## 引言（150-200字）
- 概述文章内容
- 包含主关键词
- 吸引读者继续阅读

## 主要章节（H2）
### 子章节（H3）
- 详细内容
- 包含次关键词和 LSI 关键词

## 结论
- 总结要点
- CTA（行动号召）

## FAQ（可选）
- 常见问题解答
```

### 2. 关键词使用（按页面类型）

#### 首页关键词使用
**主关键词**: `outcall massage bangkok`

**位置：**
- ✅ Title: "Outcall Massage Bangkok | Mobile & Home Service - CBODY"
- ✅ H1: "Outcall Massage Bangkok - Mobile & Home Service"
- ✅ Meta Description: "Best outcall massage Bangkok service..."
- ✅ 第一段前 100 字：自然出现 1-2 次
- ✅ 一个 H2 标题：例如 "Why Choose Our Outcall Massage in Bangkok?"
- ✅ URL: https://cbodyspa.com/
- ✅ 图片 alt: "Professional outcall massage therapist in Bangkok"

**次关键词（2-3个）：**
- `mobile massage bangkok`
- `massage to your hotel bangkok`

**密度：** 0.5-1.5%

---

#### 服务页关键词使用
**主关键词（选择一个）：**
- `mobile massage bangkok`
- `24 hour outcall massage bangkok`
- `in-home massage bangkok`

**位置：**
- ✅ Title: "Mobile Massage Bangkok | 24/7 Home Service - CBODY"
- ✅ H1: "Mobile Massage Bangkok - Professional Home Service"
- ✅ 第一段：自然出现主关键词
- ✅ 提及首页关键词：可以说 "part of our outcall massage bangkok service"
- ✅ 内链到首页：使用锚文本 "outcall massage bangkok"

**密度：** 0.5-1%

---

#### 博客文章关键词使用
**主关键词（长尾）：**
- `how to book outcall massage bangkok`
- `outcall massage bangkok guide`
- `best time for outcall massage bangkok`

**位置：**
- ✅ Title: "How to Book Outcall Massage in Bangkok: Complete Guide"
- ✅ H1: 包含长尾关键词
- ✅ 自然提及首页关键词，但不作为主要目标
- ✅ 内链到首页、服务页、地区页（3-5 个内链）

**密度：** 0.3-0.8%

**内链示例：**
```html
If you're looking for professional <a href="/">outcall massage in Bangkok</a>, 
our platform connects you with verified therapists.

For 24/7 service, check our <a href="/services/24-hour">24 hour massage service</a>.

Popular areas include <a href="/locations/sukhumvit">Sukhumvit</a> and 
<a href="/locations/silom">Silom</a>.
```

---

#### 地区页关键词使用
**主关键词（一个地区一个）：**
- `outcall massage sukhumvit`
- `outcall massage silom`

**位置：**
- ✅ Title: "Outcall Massage Sukhumvit | Mobile Therapists - CBODY"
- ✅ H1: "Outcall Massage in Sukhumvit"
- ✅ 内容：提及该地区的酒店、公寓、地标
- ✅ 内链到首页："Part of our [outcall massage bangkok](/) service"

**密度：** 0.5-1%

---

### 3. LSI 关键词（相关关键词）

**通用 LSI 关键词（所有页面可用）：**
- massage therapist bangkok
- professional massage bangkok
- verified massage therapist
- massage booking app
- home service massage

**使用规则：**
- ✅ 自然分布在内容中
- ✅ 不要强行插入
- ✅ 用于丰富内容语义

---

### 4. 内容长度（按页面类型）

- **首页**: 800-1200 字
- **服务页**: 600-1000 字
- **地区页**: 500-800 字
- **博客文章**: 1500-2500 字
- **技师页面**: 300-500 字
- **FAQ 页面**: 500-800 字

---

### 5. 内容质量

- ✅ 原创内容（非抄袭）
- ✅ 有价值的信息
- ✅ 易于阅读（短段落、列表）
- ✅ 包含图片和视频
- ✅ 定期更新
- ✅ 关键词使用自然（不堆砌）
- ✅ 内链到相关页面（3-5 个）

---

## 🚀 性能优化（影响 SEO）

### 1. 页面加载速度

**目标：**
- Lighthouse Performance ≥ 90
- First Contentful Paint (FCP) < 1.8s
- Largest Contentful Paint (LCP) < 2.5s
- Cumulative Layout Shift (CLS) < 0.1

**优化方法：**
- 压缩图片（WebP 格式）
- 最小化 CSS/JS
- 使用 CDN
- 启用浏览器缓存
- 延迟加载非关键资源

### 2. 移动端优化

```html
<!-- 必须包含 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**要求：**
- 响应式设计
- 移动端友好的导航
- 可点击元素间距 ≥ 48px
- 字体大小 ≥ 16px

---

## 📊 SEO 检查清单（创建新页面时）

### 基础 SEO
- [ ] 标题包含主关键词（50-60 字符）
- [ ] 描述包含主关键词和 CTA（150-160 字符）
- [ ] 关键词 5-10 个
- [ ] Canonical URL 正确
- [ ] Robots meta 标签正确

### Open Graph & Twitter
- [ ] og:title
- [ ] og:description
- [ ] og:image（1200x630px）
- [ ] og:url
- [ ] og:type
- [ ] twitter:card
- [ ] twitter:title
- [ ] twitter:description
- [ ] twitter:image

### 结构化数据
- [ ] LocalBusiness Schema（全局）
- [ ] WebPage Schema（每页）
- [ ] BlogPosting Schema（博客）
- [ ] FAQPage Schema（FAQ）
- [ ] BreadcrumbList Schema（面包屑）

### 技术 SEO
- [ ] 语义化 HTML（header, nav, main, article, footer）
- [ ] H1-H6 层级结构正确
- [ ] 所有图片有 alt 属性
- [ ] 内部链接 3-5 个
- [ ] URL 结构清晰
- [ ] 移动端优化
- [ ] 页面加载速度 < 3s

### 内容 SEO
- [ ] 主关键词在标题、H1、第一段
- [ ] 关键词密度 1-2%
- [ ] 内容长度符合要求
- [ ] 包含 LSI 关键词
- [ ] 原创且有价值
- [ ] 易于阅读（短段落、列表）

### 本地 SEO（Bangkok）
- [ ] Geo meta 标签
- [ ] LocalBusiness 地址和坐标
- [ ] 营业时间
- [ ] 电话号码
- [ ] 价格范围

---

## 🔄 自定义扩展区域

<!-- 
===========================================
📌 用户自定义内容区域
===========================================
在此添加你的自定义 SEO 策略、关键词研究、竞品分析等

示例：
- 竞品网站的 SEO 策略分析
- 特定关键词的排名数据
- 季节性 SEO 策略
- 本地 SEO 优化技巧
- 外链建设策略

===========================================
-->

<!-- 用户自定义内容开始 -->

<!-- 
📌 竞品分析区域
在此添加其他 outcall massage bangkok 网站的 SEO 分析
例如：
- 他们使用的关键词
- 他们的内容结构
- 他们的反向链接策略
- 他们的页面加载速度
-->


<!-- 
📌 关键词研究区域
在此添加关键词研究数据
例如：
- 搜索量数据
- 竞争难度
- 长尾关键词列表
- 季节性趋势
-->


<!-- 用户自定义内容结束 -->

---

## 🔗 有用的 SEO 工具

- **Google Search Console**: 监控搜索表现
- **Google Analytics**: 分析流量来源
- **Lighthouse**: 性能和 SEO 评分
- **Schema.org Validator**: 验证结构化数据
- **PageSpeed Insights**: 页面速度分析
- **Ahrefs / SEMrush**: 关键词研究和竞品分析

---

**版本：** 1.0  
**最后更新：** 2025-01-21  
**目标：** Google 搜索排名前 3 页  
**维护者：** CBODY Team
