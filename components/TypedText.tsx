"use client";

import React, { useEffect, useRef, useState } from "react";
import type Typed from "typed.js";

interface TypedTextProps {
  /** 要显示的文本数组 */
  text: string[];
  /** 开始打字的延迟时间（毫秒） */
  startDelay?: number;
  /** 打字速度（毫秒） */
  typeSpeed?: number;
  /** 回退速度（毫秒） */
  backSpeed?: number;
  /** 是否循环 */
  loop?: boolean;
  /** 是否显示光标 */
  showCursor?: boolean;
  /** 光标字符 */
  cursorChar?: string;
  /** 样式类名 */
  className?: string;
}

/**
 * 打字机效果组件
 * 使用 Typed.js 库实现打字动画效果
 *
 * 使用示例:
 * <TypedText text={["Hello World", "React Developer"]} />
 */
export const TypedText: React.FC<TypedTextProps> = ({
  text,
  startDelay = 0,
  typeSpeed = 50,
  backSpeed = 30,
  loop = true,
  showCursor = true,
  cursorChar = "|",
  className,
}) => {
  const typedRef = useRef<Typed | null>(null);
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const initTyped = async () => {
      // 动态导入 typed.js，避免 SSR 问题
      const { default: TypedLib } = await import("typed.js");

      if (!isMounted || !elRef.current) return;

      // 初始化 Typed.js
      typedRef.current = new TypedLib(elRef.current, {
        strings: text,
        typeSpeed,
        backSpeed,
        startDelay,
        loop,
        showCursor,
        cursorChar,
      });

      setIsLoaded(true);
    };

    initTyped();

    // 清理函数
    return () => {
      isMounted = false;
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
    };
  }, [text, startDelay, typeSpeed, backSpeed, loop, showCursor, cursorChar]);

  // 在组件卸载时销毁实例
  useEffect(() => {
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
        typedRef.current = null;
      }
    };
  }, []);

  return (
    <span
      ref={elRef}
      className={className}
      aria-label={isLoaded ? `正在展示打字效果：${text.join(", ")}` : "正在初始化打字效果"}
    />
  );
};
