# CBODY 静态页面模板

> **用途**: 创建新的静态 HTML 页面时使用的标准模板
> **适用**: 所有纯静态 HTML 页面（非 Next.js）

---

## 📄 完整页面模板

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- ============================================
         SEO Meta Tags - 必须根据页面内容修改
         ============================================ -->
    <title>页面标题 | CBODY - Outcall Massage Bangkok</title>
    <meta name="description" content="页面描述，包含主关键词 outcall massage bangkok，150-160字符">
    <meta name="keywords" content="outcall massage bangkok, mobile massage bangkok, home massage bangkok, 相关关键词">
    <meta name="author" content="CBODY Inc.">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    
    <!-- Geo Targeting (Bangkok) -->
    <meta name="geo.region" content="TH-10">
    <meta name="geo.placename" content="Bangkok">
    <meta name="geo.position" content="13.7563;100.5018">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://cbodyspa.com/page-url">
    <meta property="og:title" content="页面标题 - CBODY">
    <meta property="og:description" content="页面描述">
    <meta property="og:image" content="https://cbodyspa.com/images/og-image.webp">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="CBODY">
    <meta property="og:locale" content="en_US">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="页面标题 - CBODY">
    <meta name="twitter:description" content="页面描述">
    <meta name="twitter:image" content="https://cbodyspa.com/images/og-image.webp">

    <!-- Canonical URL -->
    <link rel="canonical" href="https://cbodyspa.com/page-url">

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- FontAwesome for Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "页面标题",
      "description": "页面描述",
      "url": "https://cbodyspa.com/page-url",
      "inLanguage": "en",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://cbodyspa.com/#website"
      }
    }
    </script>

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#46C5A7',
                        primaryStart: '#39B59A',
                        primaryEnd: '#46C5A7',
                        accent: '#C6A667',
                        textMain: '#1F2937',
                        textSec: '#6B7280',
                        bgMain: '#F9F9F9',
                        bgAlt: '#ECECEC',
                        pastelPink: '#FFE8EE',
                        pastelBlue: '#EDF2FF',
                        pastelOrange: '#FFEED9',
                        pastelGreen: '#E9F5EF',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                    boxShadow: {
                        'soft': '0 10px 40px -10px rgba(70, 197, 167, 0.15)',
                        'card': '0 4px 24px rgba(0, 0, 0, 0.04)',
                        'floating': '0 20px 50px rgba(0,0,0,0.08)',
                    },
                    borderRadius: {
                        '4xl': '2.5rem',
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom Animations */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .fade-in-up {
            animation: fadeIn 0.8s ease-out forwards;
            opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        /* Smooth Scroll */
        html {
            scroll-behavior: smooth;
        }

        /* Glassmorphism */
        .glass {
            background: rgba(255, 255, 255, 0.85);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.5);
        }
    </style>
</head>

<body class="bg-bgMain text-textMain font-sans antialiased selection:bg-pastelPink selection:text-primary">

    <!-- ============================================
         Navigation - 公共导航栏
         ============================================ -->
    <nav class="fixed w-full z-50 glass transition-all duration-300" role="navigation" aria-label="Main Navigation">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <!-- Logo -->
                <a href="/" class="flex items-center gap-2 cursor-pointer group" aria-label="CBODY Home">
                    <img src="/images/logo.webp" alt="CBODY Logo" class="h-8 w-auto group-hover:scale-105 transition-transform">
                    <span class="font-bold text-2xl tracking-tight text-textMain">CBODY</span>
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <a href="/#experts" class="text-sm font-medium text-textSec hover:text-primary transition-colors">Experts</a>
                    <a href="/#reviews" class="text-sm font-medium text-textSec hover:text-primary transition-colors">Reviews</a>
                    <a href="/#faq" class="text-sm font-medium text-textSec hover:text-primary transition-colors">FAQ</a>
                    <a href="/#safety" class="text-sm font-medium text-textSec hover:text-primary transition-colors">Safety</a>
                </div>

                <!-- CTA -->
                <div class="hidden md:flex">
                    <a href="/#download" class="bg-textMain text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-primary transition-all duration-300 hover:shadow-soft transform hover:-translate-y-0.5">
                        Get the App
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-btn" class="text-textMain text-xl" aria-label="Open Menu">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- ============================================
         Main Content - 页面主要内容
         ============================================ -->
    <main>
        <!-- Hero Section -->
        <header class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" role="banner">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="text-center max-w-3xl mx-auto">
                    <h1 class="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        页面主标题
                    </h1>
                    <p class="text-lg text-textSec leading-relaxed mb-8">
                        页面描述文字，包含关键词 outcall massage bangkok
                    </p>
                </div>
            </div>
        </header>

        <!-- Content Sections -->
        <section class="py-24 bg-white">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 class="text-3xl font-bold text-textMain mb-6">Section Title</h2>
                <p class="text-textSec">Section content...</p>
            </div>
        </section>
    </main>

    <!-- ============================================
         Footer - 公共页脚
         ============================================ -->
    <footer class="bg-white border-t border-gray-100 pt-16 pb-8">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                <!-- Brand Column -->
                <div class="col-span-1 md:col-span-2">
                    <div class="flex items-center gap-2 mb-4">
                        <img src="/images/logo.webp" alt="CBODY Logo" class="h-6 w-auto">
                        <span class="font-bold text-xl text-textMain">CBODY</span>
                    </div>
                    <p class="text-sm text-textSec mb-4 max-w-xs">
                        Premium Outcall & Home Massage Platform connecting you with verified independent experts.
                    </p>
                    <a href="mailto:cbodyspa@gmail.com" class="text-sm text-primary hover:underline">
                        <i class="fa-regular fa-envelope mr-2"></i>cbodyspa@gmail.com
                    </a>
                </div>

                <!-- Service Areas -->
                <div>
                    <h4 class="font-bold mb-4 text-textMain">Service Areas</h4>
                    <ul class="space-y-2 text-sm text-textSec">
                        <li><span class="cursor-default hover:text-primary transition-colors">Bangkok</span></li>
                        <li><span class="cursor-default hover:text-primary transition-colors">Chiang Mai</span></li>
                        <li><span class="cursor-default hover:text-primary transition-colors">Pattaya</span></li>
                        <li><span class="cursor-default hover:text-primary transition-colors">Phuket</span></li>
                    </ul>
                </div>

                <!-- Company -->
                <div>
                    <h4 class="font-bold mb-4 text-textMain">Company</h4>
                    <ul class="space-y-2 text-sm text-textSec">
                        <li><a href="#" class="hover:text-primary">About CBODY</a></li>
                        <li><a href="#" class="hover:text-primary">Become an Expert</a></li>
                        <li><a href="/support.html" class="hover:text-primary">Contact Support</a></li>
                    </ul>
                </div>

                <!-- Legal -->
                <div>
                    <h4 class="font-bold mb-4 text-textMain">Legal</h4>
                    <ul class="space-y-2 text-sm text-textSec">
                        <li><a href="/policy.html" class="hover:text-primary">Privacy Policy</a></li>
                        <li><a href="/terms.html" class="hover:text-primary">Terms of Service</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p class="text-xs text-textSec">&copy; 2025 CBODY Inc. All rights reserved.</p>
                <div class="flex gap-4 text-textSec">
                    <a href="#" class="hover:text-primary" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#" class="hover:text-primary" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://line.me/ti/p/@cbody" class="hover:text-primary" aria-label="Line" target="_blank" rel="noopener"><i class="fa-brands fa-line"></i></a>
                </div>
            </div>
        </div>
    </footer>

    <!-- ============================================
         JavaScript - 交互功能
         ============================================ -->
    <script>
        (function() {
            'use strict';
            
            // Mobile Menu Toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            // 添加移动菜单逻辑...
            
        })();
    </script>

</body>
</html>
```

---

## 🎯 使用说明

### 创建新页面步骤：
1. 复制此模板
2. 修改 `<title>` 和所有 meta 标签
3. 更新 JSON-LD 结构化数据
4. 修改 canonical URL
5. 填充主要内容区域
6. 确保所有链接正确

### 必须修改的部分：
- ✅ `<title>` 标签
- ✅ `<meta name="description">`
- ✅ `<meta name="keywords">`
- ✅ Open Graph 标签（og:title, og:description, og:url, og:image）
- ✅ Twitter Card 标签
- ✅ `<link rel="canonical">`
- ✅ JSON-LD 结构化数据
- ✅ `<h1>` 主标题

---

## 🔄 公共组件说明

### Header（导航栏）
- 固定在顶部（`fixed w-full z-50`）
- 毛玻璃效果（`glass`）
- 响应式设计（桌面/移动端）
- Logo + 菜单 + CTA 按钮

### Footer（页脚）
- 5列布局（品牌、服务区域、公司、法律、社交）
- 响应式设计
- 版权信息 + 社交链接

**注意**: 未来可能提取为独立组件文件（header.js / footer.js）

---

## 📝 SEO 检查清单

创建新页面时，确保：
- [ ] 标题包含主关键词（outcall massage bangkok）
- [ ] 描述 150-160 字符
- [ ] 关键词 5-10 个
- [ ] Open Graph 完整
- [ ] Twitter Card 完整
- [ ] Canonical URL 正确
- [ ] JSON-LD 结构化数据
- [ ] 图片包含 alt 属性
- [ ] H1-H6 层级结构清晰
- [ ] 内部链接到相关页面

---

## 🔄 自定义扩展区域

<!-- 
===========================================
📌 用户自定义内容区域
===========================================
在此添加你的自定义页面模板、特殊布局、参考案例等

示例：
- 特定类型页面的模板（博客、服务、关于我们）
- 参考网站的页面结构
- 特殊功能的代码片段
- 其他页面模板

===========================================
-->

<!-- 用户自定义内容开始 -->



<!-- 用户自定义内容结束 -->

---

**版本：** 1.0  
**最后更新：** 2025-01-21  
**维护者：** CBODY Team
