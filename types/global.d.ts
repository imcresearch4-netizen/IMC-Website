/* eslint-disable @typescript-eslint/no-explicit-any */
// Global jQuery + WOW interop loaded via <Script> tags (no npm types installed).
declare global {
  interface Window {
    $: any;
    WOW?: new (options: { live: boolean; offset: number }) => { init: () => void };
  }
}

export {};