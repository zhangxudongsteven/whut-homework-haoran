"use client";

import { Email, GitHub, Language, LinkedIn, LocationOn, Phone, Twitter } from "@mui/icons-material";
import React from "react";

import { userConfig } from "@/lib/config";

interface ContactLinkProps {
  href: string;
  children: React.ReactNode;
  title?: string;
  label?: string;
}

/**
 * 联系方式链接组件
 * 每个链接都包含图标和文本，支持键盘导航
 */
export const ContactLink: React.FC<ContactLinkProps> = ({ href, children, title, label }) => {
  const isExternal = href && (href.startsWith("http") || href.startsWith("https"));

  // 处理点击事件
  const handleClick = () => {
    if (isExternal || href.startsWith("#")) {
      return;
    }
    // 对于内部链接，需要手动导航
    if (typeof window !== "undefined") {
      window.location.href = href;
    }
  };

  // 处理键盘事件（Enter 或 Space）
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 text-zinc-600 transition-colors hover:text-foreground dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
      aria-label={label || title}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {children}
    </a>
  );
};

interface SocialLinkProps {
  href?: string;
  icon: React.ElementType;
  label: string;
}

/**
 * 社交链接图标组件
 * 支持键盘导航和屏幕阅读器
 */
export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  if (!href) return null;

  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type="button"
      className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-foreground dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
      aria-label={label}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
};

/**
 * 联系方式组件
 * 显示用户的联系方式、位置和社交账号
 * 采用响应式网格布局，适配不同屏幕尺寸
 */
export const Contact: React.FC = () => {
  return (
    <section className="py-16 scroll-mt-24" id="contact">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-10">
          联系方式
        </h2>

        {/* 联系方式卡片 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ContactLink href={`mailto:${userConfig.contact.email}`} label="邮箱" title={userConfig.contact.email}>
            <Email className="h-5 w-5" />
            <span className="text-sm md:text-base">{userConfig.contact.email}</span>
          </ContactLink>

          <ContactLink href={`tel:${userConfig.contact.phone}`} label="电话" title={userConfig.contact.phone}>
            <Phone className="h-5 w-5" />
            <span className="text-sm md:text-base">{userConfig.contact.phone}</span>
          </ContactLink>

          <div
            className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-700 rounded-lg p-3 cursor-default"
            aria-label={`位置：${userConfig.contact.location}`}
            tabIndex={0}
          >
            <LocationOn className="h-5 w-5" />
            <span className="text-sm md:text-base">{userConfig.contact.location}</span>
          </div>
        </div>

        {/* 社交账号 */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-foreground mb-6">社交账号</h3>
          <div className="flex flex-wrap gap-4">
            <SocialLink href={userConfig.social.github} icon={GitHub} label="GitHub" />
            <SocialLink href={userConfig.social.bilibili} icon={Language} label="哔哩哔哩" />
            <SocialLink href={userConfig.social.linkedin} icon={LinkedIn} label="LinkedIn" />
            <SocialLink href={userConfig.social.twitter} icon={Twitter} label="Twitter" />
            <SocialLink href={userConfig.social.blog} icon={Language} label="博客" />
          </div>
        </div>
      </div>
    </section>
  );
};
