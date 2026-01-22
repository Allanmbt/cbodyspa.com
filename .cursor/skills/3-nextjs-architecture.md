# CBODY Next.js 架构规范

> **用途**: 定义 Next.js 项目的架构、目录结构、核心实现
> **参考**: Aloha Massage 技术架构（已验证的 SEO 成功案例）
> **适用**: next-app/ 目录下的所有 Next.js 页面

---

## 🏗️ 技术栈

```
Next.js 15+ (App Router)
├── React 19+
├── TypeScript 5
├── Tailwind CSS 4
├── MDX (博客系统)
├── shadcn/ui (组件库)
├── gray-matter (MDX 元数据解析)
└── next-mdx-remote (服务端 MDX 渲染)
```

---

## 📁 目录结构

```
next-app/
├── app/
│   ├── layout.tsx              # 根布局（含全局 JSON-LD）
│   ├── page.tsx                # 首页（可选，或重定向）
│   │
│   ├── blog/
│   │   ├── page.tsx            # 博客列表页
│   │   └── [slug]/
│   │       └── page.tsx        # 博客文章详情
│   │
│   ├── services/
│   │   └── page.tsx            # 服务页面
│   │
│   ├── experts/
│   │   ├── page.tsx            # 技师列表
│   │   └── [id]/
│   │       └── page.tsx        # 技师详情
│   │
│   ├── about/
│   │   └── page.tsx            # 关于我们
│   │
│   ├── contact/
│   │   └── page.tsx            # 联系我们
│   │
│   ├── sitemap.ts              # 动态 Sitemap 生成
│   └── robots.ts               # 动态 Robots.txt
│
├── content/
│   ├── blog/                   # MDX 博客文章
│   │   ├── article-1.mdx
│   │   └── article-2.mdx
│   └── experts/                # 技师 MDX 文件（可选）
│
├── components/
│   ├── ui/                     # shadcn/ui 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── Header.tsx              # 公共导航栏
│   ├── Footer.tsx              # 公共页脚
│   └── MDXComponents.tsx       # MDX 自定义组件
│
├── utils/
│   ├── getAllPosts.ts          # 读取所有 MDX 文章
│   ├── getSinglePost.ts        # 读取单篇文章
│   └── schema.ts               # JSON-LD 结构化数据生成
│
├── lib/
│   ├── mdx.ts                  # MDX 配置
│   └── utils.ts                # 工具函数
│
├── public/
│   └── images/
│       └── blog/               # 博客图片
│
├── next.config.ts              # Next.js 配置
├── tailwind.config.ts          # Tailwind 配置
├── tsconfig.json               # TypeScript 配置
└── package.json
```

---

## 🔧 核心配置文件

### next.config.ts
```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 渲染策略：静态生成（SSG）
  output: 'standalone', // 或 'export' 用于纯静态导出
  
  // URL 配置
  trailingSlash: true,
  
  // 图片优化
  images: {
    unoptimized: false, // 开启图片优化
    formats: ['image/webp', 'image/avif'],
  },
  
  // MDX 支持
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // 实验性功能
  experimental: {
    mdxRs: true,
  },
};

export default nextConfig;
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#46C5A7',
        primaryStart: '#39B59A',
        accent: '#C6A667',
        textMain: '#1F2937',
        textSec: '#6B7280',
        bgMain: '#F9F9F9',
        pastelPink: '#FFE8EE',
        pastelBlue: '#EDF2FF',
        pastelOrange: '#FFEED9',
        pastelGreen: '#E9F5EF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(70, 197, 167, 0.15)',
        card: '0 4px 24px rgba(0, 0, 0, 0.04)',
        floating: '0 20px 50px rgba(0,0,0,0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 📝 MDX 博客系统

### 文章格式（content/blog/article-name.mdx）

**⚠️ 重要：博客文章使用长尾关键词，避免与首页关键词冲突**

```yaml
---
title: "How to Book Outcall Massage in Bangkok: Complete Guide 2025"
description: "Step-by-step guide on booking professional outcall massage in Bangkok. Learn about pricing, safety, and what to expect."
date: "2025-01-20"
updated: "2025-01-20"
coverImage: "/images/blog/how-to-book-outcall-massage-bangkok.webp"
author: "CBODY Team"
category: "Guide"
tags: ["bangkok", "booking guide", "outcall massage"]
primaryKeyword: "how to book outcall massage bangkok"
secondaryKeywords: ["outcall massage booking", "bangkok massage service", "mobile massage booking"]
---

## Introduction

Looking for a convenient way to book **outcall massage in Bangkok**? This complete guide will show you exactly how to book professional massage therapists to your home or hotel...

## What is Outcall Massage?

Outcall massage means a professional therapist comes to your location...

## How to Book Outcall Massage in Bangkok

### Step 1: Download the App
The easiest way to book [outcall massage in Bangkok](/) is through the CBODY app...

### Step 2: Browse Therapists
View verified profiles of massage therapists available in your area...

## Benefits of Booking Through CBODY

Our platform makes booking **mobile massage in Bangkok** safe and convenient...

## Popular Areas We Serve

- [Outcall massage in Sukhumvit](/locations/sukhumvit)
- [Outcall massage in Silom](/locations/silom)
- [Outcall massage in Asok](/locations/asok)

## Conclusion

Booking outcall massage in Bangkok has never been easier. With CBODY, you can connect with verified therapists in minutes.

Ready to book? [Get started with outcall massage bangkok](/) today.
```

**关键词使用规则：**
1. ✅ **主关键词**：长尾关键词（3-5 个词）
   - 例如："how to book outcall massage bangkok"
   - 不要使用："outcall massage bangkok"（这是首页的）

2. ✅ **提及首页关键词**：可以自然提及，但不作为主要目标
   - 例如："If you're looking for outcall massage in Bangkok..."
   - 内链到首页：`[outcall massage in Bangkok](/)`

3. ✅ **内链策略**：每篇文章 3-5 个内链
   - 链接到首页（1 个）
   - 链接到服务页（1-2 个）
   - 链接到地区页（1-2 个）
   - 链接到其他相关博客文章（可选）

4. ✅ **关键词密度**：0.3-0.8%
   - 长尾关键词出现 3-5 次
   - 首页关键词出现 1-2 次（仅在内链中）

---

### 博客文章关键词示例

**指南类文章：**
- `how to book outcall massage bangkok`
- `how to choose outcall massage therapist bangkok`
- `what to expect outcall massage bangkok`

**比较类文章：**
- `outcall massage vs spa bangkok`
- `mobile massage vs traditional spa bangkok`

**地区类文章：**
- `best areas for outcall massage bangkok`
- `outcall massage sukhumvit guide`

**时间类文章：**
- `late night outcall massage bangkok`
- `24 hour massage service bangkok`

**⚠️ 避免使用：**
- ❌ `outcall massage bangkok`（这是首页的主关键词）
- ❌ `mobile massage bangkok`（这是服务页的主关键词）

### utils/getAllPosts.ts
```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  coverImage: string;
  author: string;
  category: string;
  tags: string[];
  content: string;
}

export function getAllPosts(type: 'blog' | 'experts'): Post[] {
  const postsDirectory = path.join(process.cwd(), 'content', type);
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        updated: data.updated,
        coverImage: data.coverImage,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        content,
      };
    });

  // 按日期排序（最新在前）
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
```

### utils/getSinglePost.ts
```typescript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from './getAllPosts';

export function getSinglePost(type: 'blog' | 'experts', slug: string): Post {
  const fullPath = path.join(process.cwd(), 'content', type, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    updated: data.updated,
    coverImage: data.coverImage,
    author: data.author,
    category: data.category,
    tags: data.tags || [],
    content,
  };
}
```

---

## 🎯 页面实现模板

### app/blog/[slug]/page.tsx
```typescript
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getSinglePost } from '@/utils/getAllPosts';
import { generateArticleSchema } from '@/utils/schema';

// 生成静态路径
export async function generateStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getSinglePost('blog', params.slug);
  
  return {
    title: `${post.title} | CBODY`,
    description: post.description,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updated || post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
    alternates: {
      canonical: `https://cbodyspa.com/blog/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// 页面组件
export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getSinglePost('blog', params.slug);

  return (
    <>
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(post)),
        }}
      />

      <article className="max-w-4xl mx-auto px-6 py-24">
        {/* 封面图 */}
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-96 object-cover rounded-3xl mb-8"
        />

        {/* 标题 */}
        <h1 className="text-4xl lg:text-5xl font-bold text-textMain mb-4">
          {post.title}
        </h1>

        {/* 元信息 */}
        <div className="flex items-center gap-4 text-sm text-textSec mb-8">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>

        {/* MDX 内容 */}
        <div className="prose prose-lg max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
}
```

---

## 🔍 SEO 优化

### utils/schema.ts
```typescript
import { Post } from './getAllPosts';

// 全局 Business Schema
export function generateBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://cbodyspa.com/#website',
        name: 'CBODY Outcall Massage Bangkok',
        url: 'https://cbodyspa.com',
        inLanguage: 'en',
      },
      {
        '@type': ['LocalBusiness', 'MassageTherapist'],
        '@id': 'https://cbodyspa.com/#business',
        name: 'CBODY Outcall Massage Bangkok',
        telephone: '+66834826667',
        email: 'cbodyspa@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangkok',
          addressRegion: 'Bangkok',
          postalCode: '10110',
          addressCountry: 'TH',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '13.7563',
          longitude: '100.5018',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        priceRange: '฿฿',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1250',
        },
      },
    ],
  };
}

// 博客文章 Schema
export function generateArticleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: `https://cbodyspa.com${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@id': 'https://cbodyspa.com/#business',
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
  };
}

// 面包屑 Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
```

### app/sitemap.ts
```typescript
import { MetadataRoute } from 'next';
import { getAllPosts } from '@/utils/getAllPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts('blog');

  return [
    // 静态页面
    {
      url: 'https://cbodyspa.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: 'https://cbodyspa.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://cbodyspa.com/services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // 动态博客文章
    ...posts.map((post) => ({
      url: `https://cbodyspa.com/blog/${post.slug}`,
      lastModified: new Date(post.updated || post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
```

---

## 🎨 组件示例

### components/Header.tsx
```typescript
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/logo.webp" alt="CBODY Logo" width={32} height={32} />
            <span className="font-bold text-2xl">CBODY</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/blog" className="text-sm font-medium hover:text-primary">Blog</Link>
            <Link href="/services" className="text-sm font-medium hover:text-primary">Services</Link>
            <Link href="/experts" className="text-sm font-medium hover:text-primary">Experts</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
```

---

## 📦 安装依赖

```bash
# 初始化 Next.js 项目
npx create-next-app@latest next-app --typescript --tailwind --app

# 安装 MDX 相关
npm install @next/mdx @mdx-js/loader @mdx-js/react next-mdx-remote gray-matter

# 安装 shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button card badge

# 安装其他依赖
npm install lucide-react
```

---

## 🔄 自定义扩展区域

<!-- 
===========================================
📌 用户自定义内容区域
===========================================
在此添加你的自定义架构、特殊配置、参考案例等

示例：
- 特定功能的实现方案
- 第三方服务集成（Analytics、CMS）
- 性能优化技巧
- 部署配置

===========================================
-->

<!-- 用户自定义内容开始 -->



<!-- 用户自定义内容结束 -->

---

**版本：** 1.0  
**最后更新：** 2025-01-21  
**参考：** Aloha Massage 技术架构  
**维护者：** CBODY Team
