"use client";

import { useCallback, useEffect, useRef } from "react";

export function useWOW(offset = 60) {
  const wowInited = useRef(false);

  const initWOW = useCallback(() => {
    if (wowInited.current) return;
    if (typeof window === "undefined") return;
    if (!window.WOW) return;
    wowInited.current = true;
    new window.WOW({ live: true, offset }).init();
  }, [offset]);

  useEffect(() => {
    initWOW();
  }, [initWOW]);

  return initWOW;
}