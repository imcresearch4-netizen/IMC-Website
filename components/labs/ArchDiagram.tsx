"use client";

import type { ProjectArch } from "@/lib/data/projectContent";

function FlowConnector({ delay }: { delay: number }) {
  return (
    <div className="arch-connector">
      <div className="arch-connector-line" />
      <div className="arch-connector-dot" style={{ animationDelay: `${delay}s` }} />
    </div>
  );
}

function ArchNodeCard({ node, color, idx }: { node: { icon: string; label: string; note?: string }; color: string; idx: number }) {
  return (
    <div className="arch-node" style={{ animationDelay: `${idx * 0.12}s`, borderColor: color }}>
      <div className="arch-node-glow" style={{ background: color }} />
      <div className="arch-node-icon" style={{ color }}>
        <i className={`fas ${node.icon}`} />
      </div>
      <div className="arch-node-label">{node.label}</div>
      {node.note && <div className="arch-node-note">{node.note}</div>}
    </div>
  );
}

export default function ArchDiagram({ arch }: { arch: ProjectArch }) {
  return (
    <div className="arch-diagram">
      <div className="arch-flow-section">
        <div className="arch-section-label">Inputs</div>
        <div className="arch-nodes-row">
          {arch.inputs.map((n, i) => (
            <ArchNodeCard key={i} node={n} color="#2dd4bf" idx={i} />
          ))}
        </div>
      </div>

      <div className="arch-flow-section">
        <div className="arch-section-label">Processing Pipeline</div>
        <div className="arch-nodes-row">
          {arch.stages.map((n, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && <FlowConnector delay={i * 0.3} />}
              <ArchNodeCard node={n} color={i % 2 === 0 ? "#c5a55a" : "#60a5fa"} idx={i + arch.inputs.length} />
            </div>
          ))}
        </div>
      </div>

      <div className="arch-flow-section">
        <div className="arch-section-label">Outputs</div>
        <div className="arch-nodes-row">
          {arch.outputs.map((n, i) => (
            <ArchNodeCard key={i} node={n} color="#a78bfa" idx={i + arch.inputs.length + arch.stages.length} />
          ))}
        </div>
      </div>
    </div>
  );
}