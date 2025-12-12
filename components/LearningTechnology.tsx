"use client";

import { KeyboardArrowDown } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
import { userConfig } from "@/lib/config";
import React, { useState } from "react";

interface LearningTopicProps {
  name: string;
  progress: number;
  index: number;
}

/**
 * 学习主题组件
 * 显示单个学习主题的名称和进度条
 */
const LearningTopicComponent: React.FC<LearningTopicProps> = ({ name, progress, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="border-b border-zinc-200 pb-3 last:border-b-0 last:pb-0 dark:border-zinc-700"
    >
      <div className="mb-1 flex items-center justify-between">
        <h4 className="text-sm font-medium text-foreground">{name}</h4>
        <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{progress}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
          className="h-1.5 rounded-full bg-blue-500"
        />
      </div>
    </motion.div>
  );
};

interface TechCardProps {
  name: string;
  description: string;
  progress: number;
  topics: Array<{ name: string; progress: number }>;
}

/**
 * 技术卡片组件
 * 显示技术信息和点击展开的详细进度
 */
const TechCard: React.FC<TechCardProps> = ({ name, description, progress, topics }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="cursor-pointer overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow dark:border-zinc-800 dark:bg-zinc-800"
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${name} 学习进度，点击查看详细学习主题`}
      tabIndex={0}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
    >
      <div className="p-6">
        {/* 头部信息 */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="mb-1 text-lg font-bold text-foreground">{name}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <KeyboardArrowDown className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
          </motion.div>
        </div>

        {/* 总体进度条 */}
        <div className="mt-4">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">总体进度</span>
            <span className="text-sm font-bold text-blue-500">{progress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-700">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${progress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
            />
          </div>
        </div>

        {/* 展开的详细主题 */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="pt-4"
            >
              <div className="mb-3 border-t border-zinc-200 pt-3 dark:border-zinc-700">
                <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                  学习进度详情
                </p>
              </div>
              <div className="space-y-3">
                {topics.map((topic, index) => (
                  <LearningTopicComponent
                    key={topic.name}
                    name={topic.name}
                    progress={topic.progress}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};

/**
 * 学习技术组件
 * 展示正在学习的技术，每个技术可点击展开查看详细进度
 */
export const LearningTechnology: React.FC = () => {
  if (!userConfig.learningTech || userConfig.learningTech.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-zinc-200 bg-white/60 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 scroll-mt-24" id="learning">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          正在学习的技术
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center text-zinc-600 dark:text-zinc-400"
        >
          持续学习新技术，点击卡片查看详细学习进度
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {userConfig.learningTech.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              description={tech.description}
              progress={tech.progress}
              topics={tech.topics}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
