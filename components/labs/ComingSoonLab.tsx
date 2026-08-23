"use client";

import { LAB_PAGES } from "@/lib/data/labProjects";
import { ANIMATE_CSS_HREF } from "@/config/assets";
import TypedHeader from "@/components/ui/TypedHeader";
import WowScript from "@/components/wrappers/WowScript";

export default function ComingSoonLab({ labKey }: { labKey: string }) {
  const config = LAB_PAGES[labKey];

  if (!config || !("comingSoon" in config)) return null;

  const labName = config.typing.split(" - ")[0];

  return (
    <>
      <link rel="stylesheet" href={ANIMATE_CSS_HREF} />
      <TypedHeader text={config.typing} />
      <div className="container">
        <div className="coming-soon-wrap wow animate__animated animate__fadeInUp">
          <h2>Coming Soon</h2>
          <p>Research projects for {labName} are being compiled and will be available shortly.</p>
        </div>
      </div>
      <WowScript />
    </>
  );
}