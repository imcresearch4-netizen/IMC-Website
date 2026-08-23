"use client";

import Script from "next/script";
import { useWOW } from "@/hooks/useWOW";
import { WOW_JS_SRC } from "@/config/assets";

export default function WowScript({ offset = 60 }: { offset?: number }) {
  const initWOW = useWOW(offset);
  return <Script src={WOW_JS_SRC} strategy="afterInteractive" onLoad={initWOW} />;
}