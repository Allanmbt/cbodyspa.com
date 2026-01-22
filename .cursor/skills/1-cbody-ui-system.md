# CBODY UI Design System

> **用途**: 定义 CBODY 项目的视觉设计系统，确保所有页面风格统一
> **适用**: 静态 HTML 页面 + Next.js 页面

---

## 🎨 设计哲学

**Soft Minimal Romantic UI** - 柔和、极简、浪漫

**核心原则：**
1. 极简但富有表现力 — 更少元素，更多意义
2. 柔和对比 — 避免纯黑纯白
3. 充足留白 — 让每个元素"呼吸"
4. 色彩和谐 — 所有色调保持相似温度和亮度
5. 商业级品质 — 跨平台一致

---

## 🌈 颜色系统

### 主色调
```css
--primary: #46C5A7;           /* 主强调色（按钮、高亮、图标） */
--primary-dark: #39B59A;      /* 渐变起始色 */
--accent: #C6A667;            /* 强调色（轻微点缀） */
```

### 文字颜色
```css
--text-primary: #1F2937;      /* 主文本（深灰，非纯黑） */
--text-secondary: #6B7280;    /* 次要文本（描述） */
--text-tertiary: #999999;     /* 占位符或禁用文本 */
```

### 背景颜色
```css
--bg-main: #F9F9F9;           /* 默认背景 */
--bg-alt: #ECECEC;            /* 备用背景块或列表 */
--card-bg: #FFFFFF;           /* 卡片、模态框背景 */
```

### Pastel 柔和色（用于标签、高亮）
```css
--pastel-pink: #FFE8EE;       /* 柔和浪漫强调 */
--pastel-blue: #EDF2FF;       /* 柔和冷静强调 */
--pastel-orange: #FFEED9;     /* 温暖奶油强调 */
--pastel-green: #E9F5EF;      /* 清新自然强调 */
```

### Tailwind 配置
```javascript
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
            }
        }
    }
}
```

---

## 📐 间距系统

```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
```

**Tailwind 对应：**
- `p-2` = 8px
- `p-3` = 12px
- `p-4` = 16px
- `p-6` = 24px
- `p-8` = 32px
- `p-12` = 48px

---

## 🔲 圆角系统

```css
--radius-sm: 8-12px;          /* 标签/芯片 */
--radius-md: 12-16px;         /* 按钮/输入框 */
--radius-lg: 16-24px;         /* 卡片 */
--radius-xl: 24-32px;         /* 大型容器 */
--radius-full: 50%;           /* 圆形头像 */
```

**Tailwind 对应：**
- `rounded-lg` = 8px
- `rounded-xl` = 12px
- `rounded-2xl` = 16px
- `rounded-3xl` = 24px
- `rounded-full` = 50%

---

## 🌊 阴影系统

```css
--shadow-soft: 0 10px 40px -10px rgba(70, 197, 167, 0.15);
--shadow-card: 0 4px 24px rgba(0, 0, 0, 0.04);
--shadow-floating: 0 20px 50px rgba(0,0,0,0.08);
--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 16px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.08);
```

**Tailwind 自定义：**
```javascript
boxShadow: {
    'soft': '0 10px 40px -10px rgba(70, 197, 167, 0.15)',
    'card': '0 4px 24px rgba(0, 0, 0, 0.04)',
    'floating': '0 20px 50px rgba(0,0,0,0.08)',
}
```

---

## 🖋 字体系统

### 字体家族
```css
font-family: 'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### 字体大小和权重
```css
/* Hero Title */
font-size: 48-60px;
font-weight: 700;
line-height: 1.1;

/* Page Title */
font-size: 32-36px;
font-weight: 700;
line-height: 1.2;

/* Section Title */
font-size: 24-28px;
font-weight: 600;
line-height: 1.3;

/* Card Title */
font-size: 18-20px;
font-weight: 600;
line-height: 1.4;

/* Body Text */
font-size: 15-16px;
font-weight: 400;
line-height: 1.6;

/* Small Text */
font-size: 13-14px;
font-weight: 400;
line-height: 1.5;

/* Caption */
font-size: 12px;
font-weight: 400;
line-height: 1.4;
```

**Tailwind 对应：**
- `text-5xl lg:text-6xl` = Hero Title
- `text-3xl lg:text-4xl` = Page Title
- `text-2xl` = Section Title
- `text-xl` = Card Title
- `text-base` = Body Text
- `text-sm` = Small Text
- `text-xs` = Caption

---

## 🎯 组件样式

### 按钮（Primary）
```html
<button class="bg-textMain text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:bg-primary transition-all duration-300 hover:shadow-soft transform hover:-translate-y-0.5">
    Get the App
</button>
```

### 按钮（Secondary）
```html
<button class="bg-white text-textMain border border-gray-100 px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    Learn More
</button>
```

### 卡片
```html
<div class="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-soft transition-all cursor-pointer">
    <!-- 卡片内容 -->
</div>
```

### 标签/徽章
```html
<span class="bg-pastelBlue px-3 py-1 rounded-lg text-sm font-medium text-primary">
    Bangkok
</span>
```

---

## 🎬 动画效果

### 淡入上升
```css
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
```

### 浮动效果
```css
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}
```

### 悬停效果
```css
/* 按钮悬停 */
.hover\:scale-105:hover {
    transform: scale(1.05);
}

/* 卡片悬停 */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}
```

---

## 📱 响应式断点

```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

**Tailwind 使用：**
```html
<div class="text-base md:text-lg lg:text-xl">
    响应式文字
</div>
```

---

## 🎨 毛玻璃效果（Glassmorphism）

```css
.glass {
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}
```

---

## 📝 使用方法

### 创建新页面时：
1. 引用此 Skill：`@skills cbody-ui-system`
2. 使用定义的颜色、间距、圆角、阴影
3. 遵循字体系统和组件样式
4. 确保响应式设计

### 示例：
```html
<section class="py-24 bg-bgMain">
    <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-textMain mb-6">
            Section Title
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-8 rounded-[2rem] shadow-card hover:shadow-soft transition-all">
                <!-- 卡片内容 -->
            </div>
        </div>
    </div>
</section>
```

---

## 🔄 自定义扩展区域

<!-- 
===========================================
📌 用户自定义内容区域
===========================================
在此添加你的自定义颜色、组件样式、品牌元素等

示例：
- 特殊节日主题色
- 品牌合作方颜色
- 特定活动的视觉元素
- 其他设计规范

===========================================
-->

<!-- 用户自定义内容开始 -->



<!-- 用户自定义内容结束 -->

---

**版本：** 1.0  
**最后更新：** 2025-01-21  
**维护者：** CBODY Team
