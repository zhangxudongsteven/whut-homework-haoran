"use client";

import React from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * 主布局组件
 * 包含导航栏、主内容区和页脚
 */
export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-zinc-50 dark:bg-zinc-900">
        {children}
      </main>
      <Footer />
    </>
  );
}
