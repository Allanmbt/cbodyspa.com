# CBODY Skills 系统使用指南

> **创建日期**: 2025-01-21  
> **架构**: 混合架构（静态 HTML + Next.js）  
> **Skills 版本**: 1.0

---

## 📁 项目结构

```
cbodyspa/
├── .cursorrules                    # 简化版全局规则
├── .cursor/
│   └── skills/                     # Skills 文档目录
│       ├── 1-cbody-ui-system.md           # UI 设计系统
│       ├── 2-static-page-template.md      # 静态页面模板
│       ├── 3-nextjs-architecture.md       # Next.js 架构规范
│       ├── 4-seo-optimization.md          # SEO 优化清单
│       └── 5-content-creation.md          # 内容创作指南
│
├── docs/                           # 参考文档（保留）
│   ├── UI-GUIDE.md
│   ├── TEMP.md
│   └── ALOHA-MASSAGE-技术架构分析.md
│
├── index.html                      # 静态首页（保留）
├── guide/                          # 指南页面（保留）
└── next-app/                       # Next.js 项目（待创建）
```

---

## 🎯 Skills 系统说明

### 什么是 Skills？

Skills 是 Cursor IDE 的功能，允许你创建可复用的文档模板和开发规范。通过 `@skills` 命令可以快速引用这些文档。

### 为什么使用 Skills？

1. **模块化管理**: 不同类型的规范分离管理，易于维护
2. **按需引用**: 只在需要时引用相关文档，避免信息过载
3. **灵活扩展**: 可以随时添加自定义内容（参考资料、写作风格等）
4. **版本控制**: 每个 Skill 独立版本，便于追踪变更

---

## 📚 Skills 文档说明

### 1. cbody-ui-system.md
**用途**: UI 设计系统规范

**包含内容**:
- 颜色系统（主色、文字色、背景色、Pastel 色）
- 间距系统（XS 到 2XL）
- 圆角系统（Small 到 Full）
- 阴影系统（Soft、Card、Floating）
- 字体系统（大小、权重、行高）
- 组件样式（按钮、卡片、标签）
- 动画效果（淡入、浮动、悬停）
- Tailwind 配置

**使用场景**:
- 创建新页面时确保视觉风格统一
- 开发新组件时参考设计规范
- 调整样式时查看颜色和间距定义

**自定义区域**:
- 可添加特殊节日主题色
- 可添加品牌合作方颜色
- 可添加特定活动的视觉元素

---

### 2. static-page-template.md
**用途**: 静态 HTML 页面标准模板

**包含内容**:
- 完整的 HTML 页面结构
- SEO meta 标签模板
- Open Graph 和 Twitter Card 配置
- JSON-LD 结构化数据
- 公共导航栏和页脚
- Tailwind CSS 配置
- 基础动画样式

**使用场景**:
- 创建新的静态 HTML 页面
- 确保所有静态页面结构一致
- 快速复制粘贴标准模板

**自定义区域**:
- 可添加特定类型页面的模板（博客、服务、关于我们）
- 可添加参考网站的页面结构
- 可添加特殊功能的代码片段

---

### 3. nextjs-architecture.md
**用途**: Next.js 项目架构规范

**包含内容**:
- 技术栈说明（Next.js 15+、TypeScript、Tailwind）
- 目录结构规范
- 核心配置文件（next.config.ts、tailwind.config.ts）
- MDX 博客系统实现
- 页面实现模板（generateMetadata、generateStaticParams）
- SEO 优化（JSON-LD Schema、Sitemap）
- 组件示例（Header、Footer）
- 安装依赖命令

**使用场景**:
- 初始化 Next.js 项目
- 创建新的 Next.js 页面
- 实现博客系统
- 配置 SEO 优化

**自定义区域**:
- 可添加特定功能的实现方案
- 可添加第三方服务集成（Analytics、CMS）
- 可添加性能优化技巧
- 可添加部署配置

---

### 4. seo-optimization.md
**用途**: SEO 优化完整清单

**包含内容**:
- 核心 SEO 策略（关键词、密度）
- 页面级 SEO 检查清单（Meta 标签、OG、Twitter Card）
- 结构化数据模板（LocalBusiness、BlogPosting、FAQPage、BreadcrumbList）
- 技术 SEO（语义化 HTML、H1-H6、图片优化、内部链接、URL 结构）
- Sitemap 和 Robots.txt
- 内容 SEO（博客结构、关键词使用、内容长度、质量要求）
- 性能优化（页面速度、移动端优化）
- 完整的 SEO 检查清单

**使用场景**:
- 创建新页面时对照检查
- 优化现有页面的 SEO
- 撰写博客文章时确保 SEO 友好
- 审查页面是否符合 SEO 标准

**自定义区域**:
- 可添加竞品网站的 SEO 策略分析
- 可添加特定关键词的排名数据
- 可添加季节性 SEO 策略
- 可添加外链建设策略

---

### 5. content-creation.md
**用途**: 内容创作和写作风格指南

**包含内容**:
- 写作风格指南（核心原则、语气、避免的习惯）
- 博客文章标准模板（结构、各部分字数要求）
- 内容类型指南（指南类、比较类、列表类、问答类）
- 关键词使用策略
- 图片和媒体使用规范
- 写作技巧（强开头、具体数字、讲故事、过渡词）
- 内容质量检查清单

**使用场景**:
- 撰写博客文章
- 创建服务页面文案
- 编写营销内容
- 确保内容风格统一

**自定义区域**:
- 可添加喜欢的博主的写作风格分析
- 可添加行业术语和专业表达
- 可添加竞品优秀文章案例
- 可添加目标受众分析
- 可添加参考文章链接

---

## 🚀 如何使用 Skills

### 基本用法

在 Cursor 中与 AI 对话时，使用 `@skills` 命令引用：

```
# 引用单个 Skill
@skills cbody-ui-system 创建一个新的服务页面

# 引用多个 Skills
@skills static-page-template @skills seo-optimization 创建一个关于我们页面

# 查看 Skill 内容
@skills content-creation 显示博客文章模板
```

### 实际使用示例

#### 示例 1: 创建静态页面
```
我需要创建一个"关于我们"页面

@skills static-page-template @skills seo-optimization

要求：
- 使用静态 HTML
- 包含公司介绍、团队、使命愿景
- 完整的 SEO 优化
- 符合 CBODY UI 设计系统
```

#### 示例 2: 创建博客文章
```
我需要写一篇关于"Outcall Massage Bangkok Guide"的博客文章

@skills content-creation @skills seo-optimization

要求：
- 1500-2000 字
- 包含主关键词 "outcall massage bangkok"
- 结构清晰，易于阅读
- 包含 FAQ 部分
```

#### 示例 3: 开发 Next.js 页面
```
我需要在 Next.js 中创建博客列表页

@skills nextjs-architecture @skills seo-optimization

要求：
- 显示所有博客文章
- 包含分页功能
- 完整的 SEO 元数据
- 响应式设计
```

---

## 📝 自定义 Skills

### 如何添加自定义内容

每个 Skill 文件都有"自定义扩展区域"，你可以在这些区域添加：

1. **参考资料**: 竞品网站、优秀文章、案例分析
2. **写作风格**: 喜欢的博主风格、口头禅、表达习惯
3. **项目资料**: 本项目的特殊要求、品牌指南、内部文档
4. **关键词研究**: 搜索量数据、竞争分析、长尾关键词

### 示例：添加写作风格参考

打开 `5-content-creation.md`，找到"自定义扩展区域"：

```markdown
<!-- 用户自定义内容开始 -->

<!-- 
📌 写作风格参考区域
-->

## 参考博主：Tim Ferriss
- 风格：直接、实用、数据驱动
- 常用开头：以问题或场景开始
- 常用结构：问题 → 解决方案 → 案例 → 行动步骤
- 口头禅："What if...", "Here's the thing..."

## 参考文章
1. "The Ultimate Guide to Bangkok Massage" - https://example.com
   - 优点：结构清晰，包含大量实用建议
   - 可借鉴：FAQ 部分的问题设计

2. "Outcall Massage: Everything You Need to Know"
   - 优点：语气友好，易于理解
   - 可借鉴：使用第二人称直接对话

<!-- 用户自定义内容结束 -->
```

---

## 🔧 维护 Skills

### 更新 Skills

当需要更新规范时：

1. 打开对应的 Skill 文件
2. 修改内容
3. 更新版本号和最后更新日期
4. 在自定义区域添加变更说明

### 添加新 Skills

如果需要新的 Skill：

1. 在 `.cursor/skills/` 创建新文件（如 `6-new-skill.md`）
2. 遵循现有 Skills 的格式
3. 包含"自定义扩展区域"
4. 更新本 README

---

## ⚡ 最佳实践

### 1. 开发前先读 Skills
不要凭记忆开发，确保遵循最新规范

### 2. 组合使用 Skills
根据任务类型组合多个 Skills：
- 静态页面 = `static-page-template` + `seo-optimization` + `cbody-ui-system`
- 博客文章 = `content-creation` + `seo-optimization`
- Next.js 页面 = `nextjs-architecture` + `seo-optimization`

### 3. 定期更新自定义内容
遇到好的参考资料、写作风格、案例时，及时添加到自定义区域

### 4. 保持 Skills 轻量
每个 Skill 专注于一个主题，避免内容过多

---

## 🎯 下一步

### 立即可做：
1. ✅ 熟悉 5 个 Skills 的内容
2. ✅ 在自定义区域添加你的参考资料
3. ✅ 尝试使用 `@skills` 命令创建一个测试页面

### 后续计划：
1. 初始化 Next.js 项目（`next-app/`）
2. 创建第一篇博客文章
3. 配置 Nginx 路由（静态页面 + Next.js 共存）
4. 提交到 Google Search Console

---

## 📞 需要帮助？

- **查看 Skills**: 直接打开 `.cursor/skills/` 目录下的文件
- **使用 Skills**: 在 Cursor 中使用 `@skills skill-name` 命令
- **更新 Skills**: 直接编辑对应的 `.md` 文件

---

**记住**: Skills 是你的开发助手，充分利用它们可以大大提高开发效率和代码质量！🚀
