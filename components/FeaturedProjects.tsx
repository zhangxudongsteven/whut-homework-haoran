"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { userConfig } from "@/lib/config";
import React from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image?: string;
  index: number;
}

/**
 * 精选项目卡片
 */
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  link,
  image,
  index,
}) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow dark:border-zinc-800 dark:bg-zinc-800 hover:shadow-lg"
    >
      {/* 项目图片 */}
      {image ? (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-zinc-200 dark:bg-zinc-700">
          <span className="text-2xl font-bold text-zinc-400 dark:text-zinc-500">
            {title.substring(0, 3).toUpperCase()}
          </span>
        </div>
      )}

      {/* 项目内容 */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        {/* 技术栈 */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tech.slice(0, 3).map((t) => ( // 只显示前3个技术标签
            <span
              key={t}
              className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* 项目链接 */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
          tabIndex={0}
        >
          查看项目
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.75 3.5L11.25 8L6.75 12.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

/**
 * 精选项目组件
 * 在首页展示最得意的项目
 */
export const FeaturedProjects: React.FC = () => {
  if (!userConfig.featuredProjects || userConfig.featuredProjects.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-zinc-200 bg-white/60 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 scroll-mt-24" id="projects">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            精选项目
          </motion.h2>

          {/* 查看全部项目按钮 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:focus:ring-offset-zinc-900"
              tabIndex={0}
            >
              查看全部项目
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 8H12.25M12.25 8L8.75 4.5M12.25 8L8.75 11.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center text-zinc-600 dark:text-zinc-400"
        >
          展示我最得意的项目作品，每个项目都代表了我的技术能力和实践经验
        </motion.p>

        {/* 项目网格 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {userConfig.featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              image={project.image}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
