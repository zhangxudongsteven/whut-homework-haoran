/**
 * 个人网站配置文件
 * 使用者只需修改此文件即可轻松定制自己的网站
 */

export interface UserConfig {
  // 基础信息
  name: string;
  jobTitle: string;
  bio: string;
  avatar: string;

  // 技能
  skills: string[];

  // 正在学习的技术（带进度）
  learningTech: Array<{
    name: string;
    description: string;
    progress: number; // 总体进度 0-100
    topics: Array<{
      name: string;
      progress: number; // 每个主题的进度 0-100
    }>;
  }>;

  // 联系方式
  contact: {
    email: string;
    phone: string;
    location: string;
  };

  // 社交账号
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
    facebook?: string;
    blog?: string;
    bilibili?: string;
  };

  // 项目列表
  projects: Array<{
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
  }>;

  // 首页精选项目（显示在首页的项目）
  featuredProjects: Array<{
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
  }>;

  // 打字机效果文本
  typedText: string[];
}

export const userConfig: UserConfig = {
  // 基础信息 - 请修改为你的个人信息
  name: '任邢浩然',
  jobTitle: '数字经济研究生',
  bio:
    '热爱编程的学习者，目前研一在读相关技术处于学习中',
  avatar: '/头像.png',

  // 技能 - 请修改为你的技能
  skills: [
    'python',
    'PostgreSQL',
    'next.js',
    '经济学基础',
  ],

  // 正在学习的技术 - 请修改为你正在学习的技术和进度
  learningTech: [
    {
      name: '基础机器学习',
      description: '主要是研究生课程的内容，不包括深度学习',
      progress: 40,
      topics: [
        { name: '预测相关算法', progress: 70 },
        { name: '分类相关算法', progress: 40 },
        { name: '聚类相关算法', progress: 40 },
        { name: '降维相关算法', progress: 20 },
      ],
    },
    {
      name: 'Node.js',
      description: '基于 Chrome V8 引擎的 JavaScript 运行时，用于构建高性能服务器端应用',
      progress: 0,
      topics: [
        { name: '核心模块 (fs/path/http)', progress: 0 },
        { name: '异步编程 (Promise/async/await)', progress: 0 },
        { name: 'Express/Koa 框架', progress: 0 },
        { name: '中间件开发', progress: 0 },
        { name: ' 事件循环机制 ', progress: 0 },
        { name: ' 性能监控与调优 ', progress: 0 },
        { name: ' 流 (Streams) 处理 ', progress: 0 },
        { name: ' 集群模式 (Cluster)', progress: 0 }

      ],
    },
    {
      name: 'Kubernetes',
      description: '容器编排平台，云原生核心技术',
      progress: 20,
      topics: [
        { name: '基础概念', progress: 80 },
        { name: 'Pod 管理', progress: 20 },
        { name: 'Service 配置', progress: 0 },
        { name: 'Deployment 策略', progress: 0 },
        { name: '监控和日志', progress: 0 },
      ],
    },
    {
      name: 'RAG 系统',
      description: '检索增强生成系统，通过检索外部知识库增强大模型回答的准确性与可靠性 ',
      progress: 10,
      topics: [
        { name: '核心原理与架构', progress: 50 },
        { name: '文档加载与预处理', progress: 0 },
        { name: '文本分块策略', progress: 0 },
        { name: '嵌入模型选择与应用', progress: 0 },
        { name: '向量数据库操作', progress: 0 },
        { name: '检索策略优化', progress: 0 },
        { name: '评估指标与系统迭代', progress: 0 },
      ],
    },
  ],

  // 联系方式 - 请修改为你的联系方式
  contact: {
    email: '546426465@qq.com',
    phone: '+86 187-xxxx-7982',
    location: '湖北武汉, 中国',
  },

  // 社交账号 - 请修改为你的社交账号链接
  social: {
    github: 'https://github.com/Personoj-0821',
    bilibili: 'https://space.bilibili.com/86437039',
  },

  // 项目列表 - 请修改为你自己的项目
  projects: [
    {
      title: '电商平台',
      description:
        '一个功能完整的电商平台，包含商品管理、购物车、支付、订单管理等核心功能。采用微服务架构，支持高并发访问。',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'Tailwind CSS'],
      link: 'https://example-ecommerce.com',
      image: '/project1.jpg',
    },
    {
      title: '任务管理系统',
      description:
        '团队协作任务管理系统，支持创建任务、分配成员、设置截止日期、实时协作等功能。',
      tech: ['React', 'Firebase', 'Material-UI', 'Node.js'],
      link: 'https://example-taskapp.com',
      image: '/project2.jpg',
    },
    {
      title: '个人博客系统',
      description:
        '基于 Next.js 的静态博客生成器，支持 Markdown 写作、代码高亮、评论系统、SEO 优化等功能。',
      tech: ['Next.js', 'Markdown', 'Prisma', 'Vercel'],
      link: 'https://example-blog.com',
      image: '/project3.jpg',
    },
    {
      title: '实时聊天应用',
      description:
        '基于 WebSocket 的实时聊天应用，支持私聊、群聊、文件分享、已读回执等功能。',
      tech: ['React', 'Socket.io', 'Express', 'MongoDB'],
      link: 'https://example-chat.com',
      image: '/project4.jpg',
    },
  ],

  // 首页精选项目（显示在首页的项目，建议选择最得意的2-3个）
  featuredProjects: [
    {
      title: '电商平台',
      description:
        '功能完整的电商平台，包含商品管理、购物车、支付、订单管理等核心功能',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
      link: 'https://example-ecommerce.com',
      image: '/project1.jpg',
    },
    {
      title: '任务管理系统',
      description:
        '团队协作任务管理系统，支持创建任务、分配成员、设置截止日期、实时协作',
      tech: ['React', 'Firebase', 'Material-UI'],
      link: 'https://example-taskapp.com',
      image: '/project2.jpg',
    },
  ],

  // 打字机效果文本
  typedText: [
    '热爱编程的学习者',
    'React 爱好者',
    '数字经济研一学生',
    'AI编程练习生',
  ],
};
