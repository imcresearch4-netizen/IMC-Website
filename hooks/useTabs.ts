"use client";

import { useCallback, useEffect } from "react";

const TAB_MAP: Record<string, number> = {
  phd: 0,
  ms: 1,
  ug: 1,
  undergrad: 1,
  ra: 2,
  associate: 2,
  "ra-tab": 2,
  alumni: 3,
  journal: 0,
  conference: 1,
  patent: 2,
};

export function useTabs(dependency?: unknown) {
  const initTabs = useCallback(() => {
    const $ = window.$;
    if (!$ || !$.fn.tabs) return;
    const $tabs = $("#tabs");
    if (!$tabs.length) return;
    if (!$tabs.hasClass("ui-tabs")) {
      $tabs.tabs();
    }
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get("tab");
    if (tabParam) {
      let tabIndex = parseInt(tabParam);
      if (isNaN(tabIndex)) {
        tabIndex = TAB_MAP[tabParam.toLowerCase()] ?? tabIndex;
      }
      $tabs.tabs("option", "active", tabIndex);
    }
  }, []);

  useEffect(() => {
    const $ = window.$;
    if ($ && $.fn.tabs) {
      initTabs();
    }
  }, [dependency, initTabs]);

  return initTabs;
}