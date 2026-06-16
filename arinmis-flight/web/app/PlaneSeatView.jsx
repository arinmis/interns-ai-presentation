"use client";

const COLS = ["A", "B", "C", "D", "E", "F"];
const IDX = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };

// Read-only plane that highlights a single booked seat.
export default function PlaneSeatView({ seat, rows = 20 }) {
  const NOSE = 130, TAIL = 110, pitchX = 30, cabinTop = 110, pitchY = 30, AISLE = 24, fuseTop = 78, seatW = 24, seatH = 24;
  const W = NOSE + rows * pitchX + TAIL;
  const H = 410;
  const xFor = (r) => NOSE + (r - 1) * pitchX;
  const yFor = (i) => cabinTop + i * pitchY + (i >= 3 ? AISLE : 0);
  const fuseX = NOSE - 70, fuseW = rows * pitchX + 150, fuseH = 250;
  const fuseBottom = fuseTop + fuseH;
  const cx = NOSE + rows * pitchX * 0.4;
  const tx = NOSE + rows * pitchX * 0.92;

  const m = /^(\d+)([A-F])$/.exec(String(seat || "").toUpperCase());
  const selRow = m ? parseInt(m[1], 10) : null;
  const selCol = m ? m[2] : null;

  const seats = [];
  for (let r = 1; r <= rows; r++) for (const c of COLS) seats.push({ seat: `${r}${c}`, row: r, col: c });

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="plane-svg" role="img" aria-label={`Seat ${seat} on the plane`}>
      <polygon className="wing" points={`${cx - 30},${fuseTop + 28} ${cx + 95},${fuseTop + 28} ${cx + 45},16 ${cx - 60},16`} />
      <polygon className="wing" points={`${cx - 30},${fuseBottom - 28} ${cx + 95},${fuseBottom - 28} ${cx + 45},${H - 16} ${cx - 60},${H - 16}`} />
      <polygon className="wing" points={`${tx - 12},${fuseTop + 20} ${tx + 34},${fuseTop + 20} ${tx + 18},${fuseTop - 30} ${tx - 18},${fuseTop - 30}`} />
      <polygon className="wing" points={`${tx - 12},${fuseBottom - 20} ${tx + 34},${fuseBottom - 20} ${tx + 18},${fuseBottom + 30} ${tx - 18},${fuseBottom + 30}`} />
      <rect className="fuse" x={fuseX} y={fuseTop} width={fuseW} height={fuseH} rx={fuseH / 2} />
      <circle className="cockpit" cx={fuseX + 30} cy={fuseTop + fuseH / 2 - 11} r="5" />
      <circle className="cockpit" cx={fuseX + 30} cy={fuseTop + fuseH / 2 + 11} r="5" />
      <text x={fuseX + 30} y={fuseTop - 8} textAnchor="middle" className="planehint">front</text>
      {seats.map((s) => {
        const x = xFor(s.row), y = yFor(IDX[s.col]);
        const isSel = s.row === selRow && s.col === selCol;
        const rc = ["pseat", s.col === "A" || s.col === "F" ? "window" : "", isSel ? "sel" : "view"].join(" ").trim();
        return (
          <g key={s.seat}>
            <rect x={x} y={y} width={seatW} height={seatH} rx="4" className={rc} />
            {isSel && <text x={x + seatW / 2} y={y + seatH / 2 + 4} textAnchor="middle" className="seatlabel light">{s.col}</text>}
          </g>
        );
      })}
      {selRow && (
        <text x={xFor(selRow) + seatW / 2} y={fuseBottom + 52} textAnchor="middle" className="planehint">seat {seat}</text>
      )}
    </svg>
  );
}
