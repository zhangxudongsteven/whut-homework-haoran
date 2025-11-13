"use client";

import { motion } from "framer-motion";
import { userConfig } from "@/lib/config";
import React from "react";

/**
 * 项目展示页面
 * 展示用户的所有项目，包含技术栈和链接
 */
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          {/* 页面标题 */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              我的项目
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              以下是我在各个项目中获得的经验和成果展示
            </p>
          </motion.div>

          {/* 项目网格 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {userConfig.projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow dark:border-zinc-800 dark:bg-zinc-800 hover:shadow-lg"
              >
                {/* 项目图片 */}
                {project.image ? (
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-48 w-full items-center justify-center bg-zinc-200 dark:bg-zinc-700">
                    <span className="text-2xl font-bold text-zinc-400 dark:text-zinc-500">
                      {project.title.substring(0, 3).toUpperCase()}
                    </span>
                  </div>
                )}

                {/* 项目内容 */}
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>

                  {/* 技术栈 */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-700 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* 项目链接 */}
                  <a
                    href={project.link}
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
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
