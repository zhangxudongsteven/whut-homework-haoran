"use client";

import { DarkMode, LightMode, Menu as MenuIcon } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { userConfig } from "@/lib/config";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * 导航链接组件
 * 包含无障碍支持：键盘导航、aria 属性
 */
const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className={[
        "relative py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900",
        isActive
          ? "text-foreground"
          : "text-zinc-600 hover:text-foreground dark:text-zinc-400 dark:hover:text-zinc-100",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
      tabIndex={0}
    >
      <span>{children}</span>
      {isActive && (
        <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-blue-500" />
      )}
    </Link>
  );
};

/**
 * 主题切换按钮
 * 支持无障碍操作
 */
const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 dark:bg-zinc-700"
        aria-label="加载主题切换按钮"
        tabIndex={0}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-600 dark:hover:text-zinc-100 dark:focus:ring-offset-zinc-900"
      aria-label={`切换到${resolvedTheme === "dark" ? "浅色" : "深色"}主题`}
      tabIndex={0}
    >
      {resolvedTheme === "dark" ? (
        <LightMode className="h-5 w-5" />
      ) : (
        <DarkMode className="h-5 w-5" />
      )}
    </button>
  );
};

/**
 * 导航栏组件
 * 包含响应式菜单、主题切换、滚动效果
 */
export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动，添加导航栏背景效果
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const handleKeyDownMenu = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggleMenu();
    }
  };

  // 根据滚动状态应用不同的样式
  const navBaseClasses = scrolled
    ? "bg-white/80 backdrop-blur-md dark:bg-zinc-900/80"
    : "bg-white/60 backdrop-blur dark:bg-zinc-900/60";

  const navBorderClasses = scrolled
    ? "border-b border-zinc-200/80 dark:border-zinc-800/80"
    : "border-b border-zinc-200/60 dark:border-zinc-800/60";

  return (
    <nav
      className={[
        "fixed top-0 z-50 w-full transition-all duration-300",
        navBaseClasses,
        navBorderClasses,
      ].join(" ")}
      role="navigation"
      aria-label="主导航"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
          tabIndex={0}
        >
          {userConfig.name}
        </Link>

        {/* 桌面端导航链接 */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink href="/#about">关于我</NavLink>
          <NavLink href="/#projects">项目</NavLink>
          <NavLink href="/#learning">学习</NavLink>
          <NavLink href="/#contact">联系</NavLink>
        </div>

        {/* 右侧操作区 */}
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggleButton />
        </div>

        {/* 移动端菜单按钮 */}
        <button
          type="button"
          className="flex items-center justify-center rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 dark:focus:ring-offset-zinc-900 md:hidden"
          aria-label="打开菜单"
          aria-expanded={menuOpen}
          onClick={handleToggleMenu}
          onKeyDown={handleKeyDownMenu}
          tabIndex={0}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* 移动端菜单 */}
      <div
        className={[
          "md:hidden bg-white/95 backdrop-blur dark:bg-zinc-900/95 transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        style={{ overflow: menuOpen ? "visible" as any : "hidden" }}
        aria-hidden={!menuOpen}
      >
        <div className="px-4 py-6">
          <div className="flex flex-col gap-6">
            <NavLink href="/#about" onClick={handleCloseMenu}>
              关于我
            </NavLink>
            <NavLink href="/#projects" onClick={handleCloseMenu}>
              项目
            </NavLink>
            <NavLink href="/#learning" onClick={handleCloseMenu}>
              学习
            </NavLink>
            <NavLink href="/#contact" onClick={handleCloseMenu}>
              联系
            </NavLink>
            <div className="flex items-center gap-3 pt-2">
              <ThemeToggleButton />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">主题切换</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
