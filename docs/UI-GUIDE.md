# 🎨 Soft Minimal Romantic UI — Design System

---

## ✨ Design Philosophy

**Soft Minimal Romantic UI** 结合了**极简主义**、**柔和渐变**和**情感温度**。  
目标：营造优雅、高端的视觉体验，适合营销网站。
iOS 风格美学：包含毛玻璃效果 (Glassmorphism)、大圆角、柔和弥散阴影
响应式布局：完美适配手机和桌面端。

**关键词：** 柔和 · 轻盈 · 简洁 · 留白 · 情感温度 · 高端

**核心原则：**
1. 极简但富有表现力 — 更少元素，更多意义
2. 柔和对比 — 避免纯黑纯白
3. 充足留白 — 让每个元素"呼吸"
4. 色彩和谐 — 所有色调保持相似温度和亮度
5. 商业级品质 — 跨平台一致

---

## 🌞 Light Mode（仅明亮模式）

| Role | Color | Usage |
|------|-------|-------|
| **Primary** | `#46C5A7` | 主强调色（按钮、高亮、图标） |
| **Primary Gradient Start** | `#39B59A` | 渐变起始色 |
| **Primary Gradient End** | `#46C5A7` | 渐变结束色 |
| **Accent** | `#C6A667` | 强调色（轻微点缀） |
| **Text Primary** | `#1F2937` | 主文本（深灰，非纯黑） |
| **Text Secondary** | `#6B7280` | 次要文本（描述） |
| **Text Tertiary** | `#999999` | 占位符或禁用文本 |
| **Background** | `#F9F9F9` | 默认背景 |
| **Background Alt** | `#ECECEC` | 备用背景块或列表 |
| **Card Background** | `#FFFFFF` | 卡片、模态框背景 |
| **Pastel Pink** | `#FFE8EE` | 柔和浪漫强调（标签、高亮） |
| **Pastel Blue** | `#EDF2FF` | 柔和冷静强调 |
| **Pastel Orange** | `#FFEED9` | 温暖奶油强调 |
| **Pastel Green** | `#E9F5EF` | 清新自然强调 |

**视觉调性：**  
轻盈 · 通透 · 优雅 · 中性偏暖  
使用高亮度 + 低饱和度 + 柔和阴影。

---

## 📐 Layout & Spacing

| Token | Value | Usage |
|--------|--------|-------|
| **XS** | 8px | 小元素间距 |
| **SM** | 12px | 默认间距 |
| **MD** | 16px | 区块间距 |
| **LG** | 24px | 大块容器 |
| **XL** | 32px | 主要布局间距 |
| **2XL** | 48px | 首屏/全页留白 |

**容器与内边距：**
- 页面水平内边距：`24–28px`
- 卡片内边距：`20px`
- 最小触摸目标：`44×44px`

**圆角：**
- 标签/芯片：`8–12px`
- 按钮/输入框：`12–16px`
- 卡片：`16–24px`
- 头像：`50%`

---

## 🖋 Typography

| Type | Size | Weight | Usage |
|------|------|--------|-------|
| **Hero Title** | 32–36px | 700 | 首屏/营销标题 |
| **Page Title** | 24–28px | 700 | 主要页面标题 |
| **Section Title** | 20–22px | 600 | 区块标题 |
| **Card Title** | 16–18px | 600 | 卡片标题 |
| **Body Text** | 15–16px | 400 | 默认文本 |
| **Secondary Text** | 14px | 400 | 元数据/说明 |
| **Caption** | 12–13px | 400 | 标签、提示 |

**字间距**
- 大标题：`-0.5px`
- 标题：`-0.2px`
- 正文：`0.1–0.2px`

**字体**
- Web：`Inter`（系统字体降级）

---

## 🧩 Components

### Cards

- 背景：白色 `#FFFFFF`
- 圆角：`16–20px`
- 内边距：`20px`
- 阴影：`0 4px 16px rgba(0,0,0,0.06)`

### Buttons (Primary)

- 背景：`#46C5A7`
- 文字：`#FFFFFF`
- 圆角：`12–16px`
- 内边距：`16px 24px`
- 阴影：`0 4px 12px rgba(70,197,167,0.15)`
- 激活透明度：`0.7`

### Buttons (Secondary / Soft)

- 背景：柔和色（如 `#E9F5EF`）
- 文字：匹配主色（`#46C5A7`）
- 圆角：`12–16px`
- 内边距：`16px 24px`
- 阴影：无或极轻微

### Icon Containers

- 尺寸：`48–56px`
- 圆角：`14–16px`
- 背景：匹配柔和色调
- 图标尺寸：`24–28px`
- 图标颜色：`#46C5A7`

### Tags / Chips

- 背景：柔和色调
- 文字：同色系深色变体
- 圆角：`8–12px`
- 内边距：`6px 12px`
- 字体大小：`13–14px`

---

## 🌊 Shadows & Depth

| Level | Use Case | Shadow |
|--------|-----------|--------|
| **Level 1** | 轻微悬停 | `0 2px 8px rgba(0,0,0,0.03)` |
| **Level 2** | 卡片 | `0 4px 16px rgba(0,0,0,0.06)` |
| **Level 3** | 模态框 | `0 8px 24px rgba(0,0,0,0.10)` |
| **Level 4** | 浮动元素 | `0 12px 32px rgba(0,0,0,0.15)` |

*可选：* 使用**着色阴影**作为强调，如主按钮下使用 `rgba(70,197,167,0.1)`。

---

## 🎞 Animation & Interaction

| Action | Timing | Easing | Effect |
|--------|--------|--------|--------|
| 按钮点击 | 150–200ms | ease-out | `scale(0.96)` |
| 切换/悬停 | 200ms | ease-in-out | 透明度或颜色渐变 |
| 页面过渡 | 300–400ms | ease-in-out | 淡入 + 滑动 |
| 复杂过渡 | 400–500ms | spring `{ tension:100, friction:10 }` | 弹性效果 |

**触摸反馈**
- `activeOpacity`: 0.7
- 缩放：`0.95–0.98`
- 避免生硬涟漪 — 所有交互应流畅自然

---

## 🩰 Visual Language

- **留白** — 每个区块应有清晰内边距
- **柔和对比** — 避免纯黑 `#000000` 和纯白 `#FFFFFF` 主导
- **柔和强调** — 低饱和度、情感愉悦的色调
- **一致性** — 所有平台保持相同的间距节奏
- **温暖阴影** — 使用阴影表达深度，而非装饰

---

## 🌈 Recommended Gradients

| Name | From | To | Usage |
|------|------|----|-------|
| **Primary Gradient** | `#39B59A` → `#46C5A7` | 主按钮、标题 |
| **Romantic Gradient** | `#FFDDE8` → `#FFE8EE` | 背景强调、高亮条 |
| **Accent Gradient** | `#46C5A7` → `#C6A667` | 特殊强调区域 |

---

## 🧠 Design Guidelines Summary

- 保持**色彩温度**一致（略偏暖，避免蓝白）
- 保持**对比度 ≥ 4.5:1** 以确保可访问性
- 阴影和渐变应表达*深度*，而非*装饰*
- 所有圆角**圆润**，所有文本**对齐整齐**，所有表面**留白充足**

---

**版本：** 2.0  
**设计主题：** _Soft Minimal Romantic_  
**适用：** CBODY 官网营销网站  
**平台：** Web  
**调性：** 柔和 · 优雅 · 商业级 · 情感精致
