"use client";
import { useRef, useEffect, useState, useCallback } from "react";

export interface CarouselItem {
  id: number | string;
  title: string;
  subtitle?: string;
  desc: string;
  icon?: string;
  image?: string;
  tags?: string[];
  date?: string;
  badge?: string;
  badgeColor?: string;
  url?: string;
  onClick?: () => void;
}

interface Props {
  items: CarouselItem[];
  speed?: number; // seconds for one full loop
  cardWidth?: number;
}

export default function InfiniteCarousel({ items, speed = 40, cardWidth = 320 }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animPaused = useRef(false);

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX;
    if (trackRef.current) {
      const style = getComputedStyle(trackRef.current);
      const matrix = new WebKitCSSMatrix(style.transform);
      scrollLeft.current = matrix.m41;
    }
    // Pause CSS animation
    if (trackRef.current) {
      animPaused.current = true;
      trackRef.current.style.animationPlayState = "paused";
      const style = getComputedStyle(trackRef.current);
      const matrix = new WebKitCSSMatrix(style.transform);
      trackRef.current.style.transform = `translateX(${matrix.m41}px)`;
      trackRef.current.style.animation = "none";
    }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const dx = e.pageX - startX.current;
    trackRef.current.style.transform = `translateX(${scrollLeft.current + dx}px)`;
  }, []);

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current || !trackRef.current) return;
    isDragging.current = false;
    // Resume CSS animation from current position
    const style = getComputedStyle(trackRef.current);
    const matrix = new WebKitCSSMatrix(style.transform);
    const currentX = matrix.m41;
    const totalWidth = items.length * (cardWidth + 20);
    // Clamp offset into valid range
    const normalised = ((currentX % -totalWidth) - totalWidth) % -totalWidth;
    trackRef.current.style.transform = "";
    trackRef.current.style.animation = "";
    trackRef.current.style.animationPlayState = "";
    void trackRef.current.offsetHeight; // force reflow
    animPaused.current = false;
  }, [items.length, cardWidth]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].pageX;
    if (trackRef.current) {
      const style = getComputedStyle(trackRef.current);
      const matrix = new WebKitCSSMatrix(style.transform);
      scrollLeft.current = matrix.m41;
      trackRef.current.style.animationPlayState = "paused";
      trackRef.current.style.transform = `translateX(${matrix.m41}px)`;
      trackRef.current.style.animation = "none";
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!trackRef.current) return;
    const dx = e.touches[0].pageX - startX.current;
    trackRef.current.style.transform = `translateX(${scrollLeft.current + dx}px)`;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!trackRef.current) return;
    trackRef.current.style.transform = "";
    trackRef.current.style.animation = "";
    trackRef.current.style.animationPlayState = "";
    void trackRef.current.offsetHeight;
  }, []);

  return (
    <div
      className="carousel-fade-edges"
      ref={wrapperRef}
    >
      <div
        className="carousel-track-wrapper"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="carousel-track auto-scroll"
          style={{ "--carousel-speed": `${speed}s` } as React.CSSProperties}
        >
          {doubled.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="carousel-card"
              style={{ width: `${cardWidth}px` }}
              onClick={item.onClick}
              role={item.onClick ? "button" : undefined}
              tabIndex={item.onClick ? 0 : undefined}
            >
              {/* Optional image */}
              {item.image && (
                <div className="overflow-hidden rounded-xl mb-4" style={{ height: "140px" }}>
                  {!imgErrors[`${item.id}-${idx}`] ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      onError={() => setImgErrors(prev => ({ ...prev, [`${item.id}-${idx}`]: true }))}
                      draggable={false}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl bg-[rgba(9,92,86,0.04)]">
                      {item.icon || "📄"}
                    </div>
                  )}
                </div>
              )}

              {/* Icon (if no image) */}
              {!item.image && item.icon && (
                <div className="text-3xl mb-3">{item.icon}</div>
              )}

              {/* Badge */}
              {item.badge && (
                <span className="badge-orange mb-3 inline-block" style={{
                  background: item.badgeColor ? item.badgeColor + "20" : undefined,
                  color: item.badgeColor || undefined,
                  borderColor: item.badgeColor ? item.badgeColor + "40" : undefined,
                }}>
                  {item.badge}
                </span>
              )}

              {/* Title */}
              <h3 className="font-bold text-sm mb-1 leading-snug text-[#095c56]">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-xs mb-2 text-[#f97316]" style={{ fontWeight: 700 }}>{item.subtitle}</p>
              )}

              {/* Description */}
              <p className="text-xs leading-relaxed text-[#095c56]/60" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {item.desc}
              </p>

              {/* Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((t) => (
                    <span key={t} className="badge-orange" style={{ fontSize: "10px", padding: "2px 7px" }}>{t}</span>
                  ))}
                </div>
              )}

              {/* Date + CTA */}
              {(item.date || item.onClick) && (
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#095c56]/15">
                  {item.date && <span className="text-xs text-[#095c56]/40">{item.date}</span>}
                  {item.onClick && (
                    <span className="text-xs font-bold text-[#f97316]">التفاصيل ←</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
