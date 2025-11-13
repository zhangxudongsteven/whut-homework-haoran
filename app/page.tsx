"use client";

import { Contact } from "@/components/Contact";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { LearningTechnology } from "@/components/LearningTechnology";
import { TypedText } from "@/components/TypedText";
import { motion } from "framer-motion";
import { userConfig } from "@/lib/config";

/**
 * 首页组件
 * 展示个人信息、技能、打字机效果
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-zinc-900">
      {/* Hero Section / About */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            {/* Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              {userConfig.avatar ? (
                <img
                  src={userConfig.avatar}
                  alt={userConfig.name}
                  className="h-32 w-32 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-zinc-200 dark:bg-zinc-700">
                  <span className="text-2xl font-bold text-zinc-600 dark:text-zinc-300">
                    {userConfig.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
            </motion.div>

            {/* 姓名 */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
            >
              {userConfig.name}
            </motion.h1>

            {/* 职位 + 打字机效果 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-6 text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl"
            >
              <span>{userConfig.jobTitle}</span>
              <span className="ml-2 inline-block align-middle text-blue-500">
                <TypedText
                  text={userConfig.typedText}
                  startDelay={1000}
                  typeSpeed={80}
                  backSpeed={50}
                  loop={true}
                />
              </span>
            </motion.div>

            {/* 简介 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              {userConfig.bio}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-zinc-200 bg-white/60 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20 scroll-mt-24" id="skills">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            技能
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {userConfig.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-lg bg-white p-4 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-zinc-800"
              >
                <span className="font-medium text-foreground">{skill}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* Learning Technology Section */}
      <LearningTechnology />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
