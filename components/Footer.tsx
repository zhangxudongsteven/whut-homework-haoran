"use client";

import React from "react";

import { SocialLink } from "./Contact";
import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { userConfig } from "@/lib/config";

/**
 * 页脚组件
 * 显示版权信息和社交账号链接
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white/60 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* 社交账号 */}
          <div className="flex gap-4">
            <SocialLink href={userConfig.social.github} icon={GitHub} label="GitHub" />
            <SocialLink href={userConfig.social.linkedin} icon={LinkedIn} label="LinkedIn" />
            <SocialLink href={userConfig.social.twitter} icon={Twitter} label="Twitter" />
          </div>

          {/* 版权信息 */}
          <div className="text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {currentYear} {userConfig.name}. 版权所有.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
