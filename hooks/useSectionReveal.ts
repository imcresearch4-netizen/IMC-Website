"use client";

import { useEffect } from "react";

type UseSectionRevealOptions = {
  sectionId: string;
  sectionClass?: string;
  itemSelector?: string;
  itemClass?: string;
  staggerMs?: number;
  scrollItems?: boolean;
  triggerOffset?: number;
};

/**
 * Scroll-triggered reveal animation for a section.
 * - scrollItems: reveal each item individually as it enters the viewport.
 * - otherwise: when the section enters the viewport (once), add `sectionClass`
 *   (if any) and stagger `itemClass` onto each matching item.
 */
export function useSectionReveal(options: UseSectionRevealOptions) {
  const {
    sectionId,
    sectionClass,
    itemSelector,
    itemClass,
    staggerMs = 100,
    scrollItems = false,
    triggerOffset = 80,
  } = options;

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (scrollItems && itemSelector && itemClass) {
      const items = section.querySelectorAll(itemSelector);
      const winH = window.innerHeight;
      const reveal = () => {
        items.forEach((el) => {
          if ((el as HTMLElement).getBoundingClientRect().top < winH - triggerOffset) {
            el.classList.add(itemClass);
          }
        });
      };
      window.addEventListener("scroll", reveal);
      reveal();
      return () => window.removeEventListener("scroll", reveal);
    }

    let animated = false;
    const trigger = () => {
      if (animated) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - triggerOffset) {
        animated = true;
        if (sectionClass) section.classList.add(sectionClass);
        if (itemSelector && itemClass) {
          section.querySelectorAll(itemSelector).forEach((item, i) => {
            setTimeout(() => item.classList.add(itemClass), i * staggerMs);
          });
        }
        window.removeEventListener("scroll", trigger);
      }
    };
    window.addEventListener("scroll", trigger);
    trigger();
    return () => window.removeEventListener("scroll", trigger);
  }, [
    sectionId,
    sectionClass,
    itemSelector,
    itemClass,
    staggerMs,
    scrollItems,
    triggerOffset,
  ]);
}