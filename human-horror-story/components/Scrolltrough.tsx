"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface ScrolltroughProps {
  icon: string;
  count: number;
  duration: number;
  scrollDirection?: "left" | "right";
}

const ICON_SIZE_PX = 40;
const BUFFER_ICONS = 10;

const Scrolltrough: React.FC<ScrolltroughProps> = ({
  icon,
  count,
  duration,
  scrollDirection = "left",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [iconsToRender, setIconsToRender] = useState<number[]>([]);

  const totalScrollWidth = count * ICON_SIZE_PX;
  const speed = totalScrollWidth / duration;

  // Number of icons visible plus buffer
  const visibleIconsCount = Math.ceil(containerWidth / ICON_SIZE_PX) + BUFFER_ICONS;

  // Store scrollPos and last update position to throttle updates
  const scrollPosRef = useRef(0);
  const lastUpdatePosRef = useRef(0);

  // Throttled update function to reduce re-renders
  const updateIcons = useCallback((scrollPos: number) => {
    // Only update icons when we've scrolled at least half an icon width
    if (Math.abs(scrollPos - lastUpdatePosRef.current) < ICON_SIZE_PX / 2) {
      return;
    }
    
    lastUpdatePosRef.current = scrollPos;
    
    const firstVisibleIndex = Math.floor(scrollPos / ICON_SIZE_PX);
    const newIconsToRender = [];
    for (let i = 0; i < visibleIconsCount; i++) {
      const iconIndex = (firstVisibleIndex + i) % count;
      newIconsToRender.push(iconIndex);
    }
    setIconsToRender(newIconsToRender);
  }, [count, visibleIconsCount]);

  // Animate using requestAnimationFrame with direct DOM manipulation
  useEffect(() => {
    if (containerWidth === 0 || count === 0) return;

    let animationFrameId: number;
    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = (timestamp - startTimestamp) / 1000;

      // Stop after duration is reached
      if (elapsed >= duration) {
        return;
      }

      const scrollPos = (speed * elapsed) % totalScrollWidth;
      scrollPosRef.current = scrollPos;

      // Calculate offset within one icon
      const offsetWithinIcon = scrollPos % ICON_SIZE_PX;
      const offset = scrollDirection === "left" ? -offsetWithinIcon : offsetWithinIcon;

      // Apply transform directly to DOM node
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(${offset}px)`;
      }

      // Throttled icon updates
      updateIcons(scrollPos);

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [containerWidth, count, duration, scrollDirection, speed, totalScrollWidth, updateIcons]);

  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Initialize icons when container width is available
  useEffect(() => {
    if (containerWidth > 0 && count > 0) {
      const initialIcons = [];
      for (let i = 0; i < visibleIconsCount; i++) {
        initialIcons.push(i % count);
      }
      setIconsToRender(initialIcons);
    }
  }, [containerWidth, count, visibleIconsCount]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden w-full h-[50px] mx-auto my-8"
    >
      <div
        ref={scrollRef}
        className="flex absolute top-0 left-0 h-[50px]"
        style={{
          willChange: "transform",
        }}
      >
        {iconsToRender.map((index, i) => (
          <img
            key={`${index}-${i}`}
            src={icon}
            alt={`icon-${index}`}
            className="w-10 h-10 object-contain mx-0.5 select-none pointer-events-none"
            draggable={false}
            style={{ flexShrink: 0 }}
          />
        ))}
      </div>

      <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-red-500 opacity-70 -translate-x-1/2 pointer-events-none z-10" />
    </div>
  );
};

export default Scrolltrough;