"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import React from "react";

/**
 * 主题提供者组件
 * 使用 next-themes 管理应用的主题状态
 */
export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
