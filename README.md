# 个人网站模板

这是一个基于 **Next.js 15** 和 **Tailwind CSS** 构建的现代化个人网站模板。只需修改一个配置文件，即可快速搭建属于自己的专业个人网站。

## ✨ 功能特性

- 🎨 **响应式设计** - 完美适配桌面、平板、手机
- 🌓 **主题切换** - 支持浅色/深色模式，自动跟随系统
- 🎯 **打字机效果** - 动态展示个人标签
- 📚 **学习进度追踪** - 可视化展示正在学习的技术
- 📊 **平滑动画** - 使用 Framer Motion 实现流畅动画
- ♿ **无障碍支持** - 完整的键盘和屏幕阅读器支持
- ⚡ **高性能** - Next.js 15 App Router + Turbopack
- 📱 **移动端优化** - 触摸友好的交互设计

## 🚀 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看你的网站。

### 3. 构建生产版本

```bash
npm run build
npm run start
```

## 📝 编辑指南

**这是最重要的部分！** 所有个人信息都在一个文件中配置，无需修改其他代码。

### 配置文件位置

📁 `lib/config.ts`

这个文件包含了网站的所有内容，只需修改这里的值即可。

---

## 一、基础信息

### 修改位置

`lib/config.ts` - 第 57-63 行

### 可修改内容

```typescript
export const userConfig = {
  // 基础信息 - 请修改为你的个人信息
  name: '张三',                          // 你的名字
  jobTitle: '全栈开发工程师',             // 职位
  bio: '热爱编程的前端开发者...',        // 个人简介
  avatar: '',                            // 头像路径（见下方说明）
}
```

### 头像设置

1. 将你的头像图片放入 `public/` 文件夹
2. 支持格式：`.jpg`, `.jpeg`, `.png`, `.webp`
3. 推荐尺寸：至少 200x200 像素
4. 在 `avatar` 字段填写路径，例如：
   - 头像文件：`public/avatar.jpg`
   - 配置值：`avatar: '/avatar.jpg'`

**如果不设置头像**：网站会使用你名字的拼音首字母作为默认头像

---

## 二、技能列表

### 修改位置

`lib/config.ts` - 第 65-75 行

### 可修改内容

```typescript
skills: [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  // ... 添加更多技能
]
```

### 修改指南

- **添加技能**：在数组中添加新的字符串
- **删除技能**：删除数组中的对应项
- **排序**：数组中的顺序就是页面显示的顺序

**示例**：
```typescript
skills: [
  'Vue.js',
  'Nuxt.js',
  'JavaScript',
  'CSS',
  'HTML',
  'MongoDB',
]
```

---

## 三、正在学习的技术（核心功能）

### 修改位置

`lib/config.ts` - 第 77-126 行

### 数据结构说明

```typescript
learningTech: [
  {
    name: '技术名称',
    description: '简短描述',
    progress: 65,        // 总体进度（0-100）
    topics: [            // 学习主题清单
      { name: '主题1', progress: 90 },
      { name: '主题2', progress: 75 },
    ]
  }
]
```

### 详细修改指南

#### 1. 修改现有技术的进度

直接修改 `progress` 字段的值（0-100）：

```typescript
{
  name: 'Rust',
  description: '系统编程语言...',
  progress: 75,      // ← 修改这里的数值
  topics: [
    { name: '基础语法', progress: 95 },    // ← 也可以修改每个主题的进度
    { name: '所有权系统', progress: 80 },
  ]
}
```

#### 2. 添加新的学习技术

在 `learningTech` 数组中添加新对象：

```typescript
learningTech: [
  // ... 现有的技术
  {
    name: 'Docker',
    description: '容器化技术',
    progress: 40,
    topics: [
      { name: '基础概念', progress: 70 },
      { name: '镜像构建', progress: 50 },
      { name: '容器编排', progress: 20 },
    ]
  }
]
```

#### 3. 删除某个学习技术

直接删除数组中的对应对象即可。

#### 4. 修改学习主题

在 `topics` 数组中添加、删除或修改主题：

```typescript
topics: [
  { name: '基础概念', progress: 80 },
  { name: '进阶用法', progress: 60 },
  { name: '实战项目', progress: 30 },
  // 添加更多主题...
]
```

### 完整示例

```typescript
learningTech: [
  {
    name: 'Three.js',
    description: '3D 图形库，用于 Web 3D 可视化',
    progress: 35,
    topics: [
      { name: '基础场景', progress: 80 },
      { name: '几何体', progress: 60 },
      { name: '材质和光照', progress: 40 },
      { name: '动画', progress: 15 },
      { name: '粒子系统', progress: 5 },
    ]
  }
]
```

---

## 四、首页精选项目

### 功能说明

在首页展示你最得意的 2-3 个项目，吸引访客的注意力。每个项目卡片包含图片、标题、简介、技术栈和查看链接。

### 修改位置

`lib/config.ts` - 第 188-206 行

### 数据结构说明

```typescript
featuredProjects: [
  {
    title: '项目名称',
    description: '简短的项目介绍',
    tech: ['React', 'Next.js'],     // 使用的技术栈
    link: 'https://example.com',    // 项目链接
    image: '/project1.jpg'          // 项目图片（可选）
  }
]
```

### 修改指南

#### 添加精选项目

在 `featuredProjects` 数组中添加项目对象（建议 2-3 个）：

```typescript
featuredProjects: [
  // ... 现有项目
  {
    title: '我的新项目',
    description: '一个创新的项目，使用了最新的 Web 技术',
    tech: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
    link: 'https://myproject.com',
    image: '/myproject.jpg'
  }
]
```

#### 删除精选项目

直接删除数组中的对象即可。如果清空数组，首页不会显示这个区块。

#### 从完整项目列表复制

可以直接从 `projects` 数组中复制项目到 `featuredProjects`，然后简化描述：

```typescript
// 从 projects 中复制
projects: [
  {
    title: '电商平台',
    description: '一个很长的描述...',
    // ...
  }
],

// 到 featuredProjects 中简化描述
featuredProjects: [
  {
    title: '电商平台',
    description: '功能完整的电商平台，包含商品管理和支付系统', // 更简洁
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    link: 'https://example-ecommerce.com',
    image: '/project1.jpg'
  }
]
```

### 图片设置

参考下文

---

## 五、联系方式

### 修改位置

`lib/config.ts` - 第 128-134 行

### 可修改内容

```typescript
contact: {
  email: 'zhangsan@example.com',     // 邮箱
  phone: '+86 138-0000-0000',        // 电话
  location: '北京, 中国',            // 位置
}
```

**注意**：邮箱会自动生成 `mailto:` 链接，电话会自动生成 `tel:` 链接

---

## 六、社交账号

### 修改位置

`lib/config.ts` - 第 136-144 行

### 可修改内容

```typescript
social: {
  github: 'https://github.com/zhangsan',      // GitHub
  linkedin: 'https://linkedin.com/in/zhangsan', // LinkedIn
  twitter: 'https://twitter.com/zhangsan',    // Twitter
  blog: 'https://blog.example.com',           // 博客
  // 可选的其他平台：
  // instagram: 'https://instagram.com/zhangsan',
  // facebook: 'https://facebook.com/zhangsan',
}
```

### 修改指南

- **添加账号**：添加新的键值对
- **删除账号**：删除对应的行或设为 `undefined`
- **修改链接**：直接修改 URL

**注意**：如果不想显示某个社交平台，直接删除该字段或设为 `undefined` 即可。

---

## 七、打字机效果文本

### 修改位置

`lib/config.ts` - 第 208-213 行

### 可修改内容

```typescript
typedText: [
  '全栈开发工程师',
  'React 爱好者',
  '开源贡献者',
  '技术博客作者',
  // ... 添加更多标签
]
```

### 修改指南

这些文本会循环显示在职位后面，创建打字机动画效果。

- **添加标签**：在数组中添加新的字符串
- **删除标签**：删除数组中的对应项
- **修改顺序**：数组中的顺序就是显示顺序

**示例**：
```typescript
typedText: [
  '前端开发者',
  'UI/UX 设计师',
  '技术布道者',
  '开源维护者',
]
```

---

## 🎯 快速修改清单

按照以下顺序修改，快速定制你的网站：

- [ ] 1. 基础信息（姓名、职位、简介）
- [ ] 2. 技能列表
- [ ] 3. 正在学习的技术和进度
- [ ] 4. 首页精选项目（2-3个最得意的项目）
- [ ] 5. 完整项目展示
- [ ] 6. 联系方式
- [ ] 7. 社交账号
- [ ] 8. 打字机效果文本
- [ ] 9. 头像图片（可选）
- [ ] 10. 项目图片（可选）

**完成！** 重新运行 `npm run dev` 查看效果。

---

## 📂 项目结构

```
my-personal-site/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页
│   └── projects/
│       └── page.tsx        # 项目页面
├── components/             # React 组件
│   ├── Layout.tsx          # 页面布局
│   ├── Navbar.tsx          # 导航栏
│   ├── Footer.tsx          # 页脚
│   ├── Contact.tsx         # 联系方式组件
│   ├── TypedText.tsx       # 打字机效果
│   └── LearningTechnology.tsx  # 学习技术组件
├── lib/                    # 工具库
│   ├── config.ts           # 📝 配置文件（核心）
│   └── theme-provider.tsx  # 主题提供者
├── public/                 # 静态资源
│   ├── avatar.jpg          # 头像图片（可选）
│   ├── project1.jpg        # 项目图片（可选）
│   └── project2.jpg        # 项目图片（可选）
├── package.json            # 依赖管理
└── README.md               # 本文档
```

**重要**：你只需要修改 `lib/config.ts` 和 `public/` 文件夹中的图片！

---

## 🔧 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: Material-UI Icons
- **动画**: Framer Motion
- **主题切换**: next-themes
- **打字机效果**: Typed.js
- **包管理**: npm

---

## 🚀 部署

### 部署到 Vercel（推荐）

1. 将代码推送到 GitHub
2. 登录 [Vercel](https://vercel.com)
3. 导入 GitHub 仓库
4. 自动部署！

### 其他平台

也可以部署到：
- Netlify
- GitHub Pages
- 任何支持 Node.js 的平台

---

## 💡 高级修改

### 修改主题颜色

编辑 `tailwind.config.ts` 中的颜色配置。

### 添加新页面

在 `app/` 目录下创建新的文件夹和 `page.tsx` 文件。

### 修改动画效果

编辑 `components/` 中的组件，调整 Framer Motion 的参数。

---

## ❓ 常见问题

**Q: 修改配置后网站没有更新？**
A: 确保保存文件，开发服务器会自动重新加载。

**Q: 图片显示不出来？**
A: 检查图片路径是否正确，确保文件放在 `public/` 文件夹中。

**Q: 想添加更多功能？**
A: 在 `components/` 中创建新组件，然后在页面中引入。

**Q: 如何修改网站标题？**
A: 所有 Metadata（标题、描述等）都是自动从 `config.ts` 生成的，无需手动修改。

---

## 📄 许可证

MIT

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**🎉 现在快去配置你的网站吧！**
