type DiagramId = "safelot" | "cdr";

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="10" className="arch-node" />
      <text x={w / 2} y={sub ? h / 2 - 4 : h / 2 + 4} textAnchor="middle" className="arch-label">
        {label}
      </text>
      {sub ? (
        <text x={w / 2} y={h / 2 + 12} textAnchor="middle" className="arch-sub">
          {sub}
        </text>
      ) : null}
    </g>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  marker,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  marker: string;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="arch-edge"
      markerEnd={`url(#${marker})`}
    />
  );
}

function SafeLotDiagram() {
  const marker = "arch-arrow-safelot";
  return (
    <svg viewBox="0 0 760 280" className="arch-svg" role="img" aria-label="SafeLot system architecture">
      <defs>
        <marker id={marker} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="arch-marker" />
        </marker>
      </defs>
      <Node x={20} y={100} w={120} h={56} label="Vehicles" sub="GPS / IoT" />
      <Arrow marker={marker} x1={140} y1={128} x2={188} y2={128} />
      <Node x={190} y={100} w={130} h={56} label="Ingestion" sub="Events + WS" />
      <Arrow marker={marker} x1={320} y1={128} x2={368} y2={128} />
      <Node x={370} y={40} w={140} h={56} label="Control Plane" sub="Next.js" />
      <Node x={370} y={160} w={140} h={56} label="Services" sub="PHP + APIs" />
      <Arrow marker={marker} x1={435} y1={96} x2={435} y2={160} />
      <Arrow marker={marker} x1={510} y1={68} x2={558} y2={68} />
      <Arrow marker={marker} x1={510} y1={188} x2={558} y2={188} />
      <Node x={560} y={20} w={170} h={56} label="AWS Scale" sub="Auto-scaling" />
      <Node x={560} y={100} w={170} h={56} label="Cache / DB" sub="Redis + MySQL" />
      <Node x={560} y={180} w={170} h={56} label="Clients" sub="Web · iOS · Android" />
    </svg>
  );
}

function CdrDiagram() {
  const marker = "arch-arrow-cdr";
  return (
    <svg viewBox="0 0 760 280" className="arch-svg" role="img" aria-label="CDR monitoring architecture">
      <defs>
        <marker id={marker} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" className="arch-marker" />
        </marker>
      </defs>
      <Node x={20} y={100} w={130} h={56} label="IGW / ICX" sub="Call switches" />
      <Arrow marker={marker} x1={150} y1={128} x2={198} y2={128} />
      <Node x={200} y={100} w={140} h={56} label="CDR Ingest" sub="1M+ / day" />
      <Arrow marker={marker} x1={340} y1={128} x2={388} y2={128} />
      <Node x={390} y={40} w={140} h={56} label="Aggregation" sub="Batch + near-RT" />
      <Node x={390} y={160} w={140} h={56} label="MySQL Store" sub="Indexed CDR" />
      <Arrow marker={marker} x1={460} y1={96} x2={460} y2={160} />
      <Arrow marker={marker} x1={530} y1={68} x2={578} y2={110} />
      <Arrow marker={marker} x1={530} y1={188} x2={578} y2={146} />
      <Node x={580} y={100} w={150} h={56} label="Ops Panel" sub="PHP dashboards" />
    </svg>
  );
}

export function ArchitectureDiagram({ id }: { id: DiagramId }) {
  return (
    <figure className="arch-diagram">
      <figcaption className="arch-diagram__caption">System architecture</figcaption>
      {id === "safelot" ? <SafeLotDiagram /> : <CdrDiagram />}
    </figure>
  );
}
