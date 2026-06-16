"use client";

import { useState } from "react";
import PlaneSeatView from "./PlaneSeatView";

function todayPlus(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function PlaneSeatMap({ seatMap, seat, onPick }) {
  const NOSE = 130, TAIL = 110, pitchX = 30, cabinTop = 110, pitchY = 30, AISLE = 24, fuseTop = 78, seatW = 24, seatH = 24;
  const rows = seatMap.rows;
  const W = NOSE + rows * pitchX + TAIL;
  const H = 410;
  const idxOf = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5 };
  const xFor = (r) => NOSE + (r - 1) * pitchX;
  const yFor = (i) => cabinTop + i * pitchY + (i >= 3 ? AISLE : 0);
  const fuseX = NOSE - 70, fuseW = rows * pitchX + 150, fuseH = 250;
  const fuseBottom = fuseTop + fuseH;
  const cx = NOSE + rows * pitchX * 0.4;
  const tx = NOSE + rows * pitchX * 0.92;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="plane-svg" role="img" aria-label="Aircraft seat map">
      {/* main wings */}
      <polygon className="wing" points={`${cx - 30},${fuseTop + 28} ${cx + 95},${fuseTop + 28} ${cx + 45},16 ${cx - 60},16`} />
      <polygon className="wing" points={`${cx - 30},${fuseBottom - 28} ${cx + 95},${fuseBottom - 28} ${cx + 45},${H - 16} ${cx - 60},${H - 16}`} />
      {/* tail fins */}
      <polygon className="wing" points={`${tx - 12},${fuseTop + 20} ${tx + 34},${fuseTop + 20} ${tx + 18},${fuseTop - 30} ${tx - 18},${fuseTop - 30}`} />
      <polygon className="wing" points={`${tx - 12},${fuseBottom - 20} ${tx + 34},${fuseBottom - 20} ${tx + 18},${fuseBottom + 30} ${tx - 18},${fuseBottom + 30}`} />
      {/* fuselage */}
      <rect className="fuse" x={fuseX} y={fuseTop} width={fuseW} height={fuseH} rx={fuseH / 2} />
      {/* cockpit windows */}
      <circle className="cockpit" cx={fuseX + 30} cy={fuseTop + fuseH / 2 - 11} r="5" />
      <circle className="cockpit" cx={fuseX + 30} cy={fuseTop + fuseH / 2 + 11} r="5" />
      <text x={fuseX + 30} y={fuseTop - 8} textAnchor="middle" className="planehint">front</text>
      {/* seats */}
      {seatMap.seats.map((s) => {
        const x = xFor(s.row), y = yFor(idxOf[s.col]);
        const sel = seat === s.seat;
        const rc = ["pseat", s.type === "window" ? "window" : "", s.occupied ? "taken" : "", sel ? "sel" : ""].join(" ").trim();
        const lc = ["seatlabel", sel ? "light" : "", s.occupied ? "dim" : ""].join(" ").trim();
        return (
          <g key={s.seat} onClick={() => !s.occupied && onPick(s.seat)} style={{ cursor: s.occupied ? "not-allowed" : "pointer" }}>
            <rect x={x} y={y} width={seatW} height={seatH} rx="4" className={rc} />
            <text x={x + seatW / 2} y={y + seatH / 2 + 4} textAnchor="middle" className={lc}>{s.col}</text>
          </g>
        );
      })}
    </svg>
  );
}

export default function Home() {
  const [step, setStep] = useState("search");
  const [query, setQuery] = useState({ from: "IST", to: "ADB", date: todayPlus(1) });
  const [flights, setFlights] = useState([]);
  const [offer, setOffer] = useState(null);
  const [passenger, setPassenger] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [ticket, setTicket] = useState(null);
  const [seatMap, setSeatMap] = useState(null);
  const [seat, setSeat] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function call(path, options) {
    const res = await fetch(path, options);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Request failed");
    return data;
  }

  async function onSearch(e) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const q = new URLSearchParams(query).toString();
      const data = await call(`/api/flights?${q}`);
      setFlights(data.flights);
      setStep("results");
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  }

  async function selectFlight(flight) {
    setError(""); setLoading(true);
    try {
      const data = await call("/api/offers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ flightId: flight.id }),
      });
      setOffer(data.offer);
      setStep("passenger");
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  }

  async function goToSeats(e) {
    e.preventDefault();
    setError(""); setLoading(true);
    try {
      const data = await call(`/api/seatmap?flightId=${encodeURIComponent(offer.flight.id)}`);
      setSeatMap(data);
      setSeat(null);
      setStep("seat");
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  }

  async function onBook() {
    setError(""); setLoading(true);
    try {
      const data = await call("/api/bookings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ offerId: offer.offerId, passenger, seat }),
      });
      setTicket(data.booking);
      setStep("ticket");
    } catch (err) { setError(err.message); }
    finally { setLoading(false); }
  }

  function seatBtn(r, c) {
    const id = `${r}${c}`;
    const s = seatMap.seats.find((x) => x.seat === id);
    const cls = ["seat", s.type, s.occupied ? "taken" : "", seat === id ? "sel" : ""].join(" ").trim();
    return (
      <button type="button" key={id} className={cls} disabled={s.occupied}
        onClick={() => setSeat(id)} title={`${id} (${s.type})`}>{c}</button>
    );
  }

  function reset() {
    setStep("search"); setFlights([]); setOffer(null); setTicket(null);
    setSeatMap(null); setSeat(null);
    setPassenger({ firstName: "", lastName: "", email: "", phone: "" });
    setError("");
  }

  return (
    <>
      <div className="wrap">
        {step === "search" && (
          <div className="card">
            <h1>Search flights</h1>
            <p className="sub">Find a flight, get an offer, book it, and get your ticket.</p>
            <form onSubmit={onSearch}>
              <div className="row">
                <div>
                  <label>From</label>
                  <input value={query.from} onChange={(e) => setQuery({ ...query, from: e.target.value })} placeholder="IST" />
                </div>
                <div>
                  <label>To</label>
                  <input value={query.to} onChange={(e) => setQuery({ ...query, to: e.target.value })} placeholder="ADB" />
                </div>
                <div>
                  <label>Date</label>
                  <input type="date" value={query.date} onChange={(e) => setQuery({ ...query, date: e.target.value })} />
                </div>
              </div>
              <div className="actions">
                <button type="submit" disabled={loading}>{loading ? "Searching..." : "Search"}</button>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        )}

        {step === "results" && (
          <div className="card">
            <h1>{query.from} to {query.to}</h1>
            <p className="sub">{query.date} - {flights.length} flights found</p>
            {flights.map((f) => (
              <div className="flight" key={f.id}>
                <div className="info">
                  <strong>{f.airline}</strong> {f.flightNumber}
                  <div className="meta">{f.departTime} to {f.arriveTime} - {f.durationMin} min - {f.seatsLeft} seats left</div>
                </div>
                <div className="priceRow">
                  <span className="price">{f.price} {f.currency}</span>
                  <button onClick={() => selectFlight(f)} disabled={loading}>Select</button>
                </div>
              </div>
            ))}
            <div className="actions">
              <button className="ghost" onClick={reset}>Back</button>
            </div>
            {error && <div className="error">{error}</div>}
          </div>
        )}

        {step === "passenger" && offer && (
          <div className="card">
            <h1>Passenger details</h1>
            <p className="sub">
              {offer.flight.airline} {offer.flight.flightNumber} - {offer.flight.from} to {offer.flight.to} - {offer.flight.date}
              <br />Offer {offer.offerId} - <strong>{offer.price} {offer.currency}</strong>
            </p>
            <form onSubmit={goToSeats}>
              <div className="row">
                <div>
                  <label>First name *</label>
                  <input value={passenger.firstName} onChange={(e) => setPassenger({ ...passenger, firstName: e.target.value })} />
                </div>
                <div>
                  <label>Last name *</label>
                  <input value={passenger.lastName} onChange={(e) => setPassenger({ ...passenger, lastName: e.target.value })} />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Email *</label>
                  <input type="email" value={passenger.email} onChange={(e) => setPassenger({ ...passenger, email: e.target.value })} />
                </div>
                <div>
                  <label>Phone</label>
                  <input value={passenger.phone} onChange={(e) => setPassenger({ ...passenger, phone: e.target.value })} />
                </div>
              </div>
              <div className="actions">
                <button type="submit" disabled={loading}>{loading ? "Loading seats..." : "Continue to seat selection"}</button>
                <button type="button" className="ghost" onClick={() => setStep("results")}>Back</button>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        )}

        {step === "seat" && seatMap && offer && (
          <div className="card">
            <h1>Pick your seat</h1>
            <p className="sub">
              {offer.flight.airline} {offer.flight.flightNumber} - nose on the left, tail on the right. Window seats (A/F) have a green border; grey seats are taken.
            </p>
            <div className="seat-svg-wrap">
              <PlaneSeatMap seatMap={seatMap} seat={seat} onPick={setSeat} />
            </div>
            <div className="seat-legend">
              <span><i className="lg window" /> window</span>
              <span><i className="lg avail" /> available</span>
              <span><i className="lg taken" /> taken</span>
              <span><i className="lg sel" /> selected</span>
            </div>
            <div className="actions">
              <button onClick={onBook} disabled={loading || !seat}>
                {loading ? "Booking..." : seat ? `Book seat ${seat}` : "Select a seat"}
              </button>
              <button type="button" className="ghost" onClick={() => setStep("passenger")}>Back</button>
            </div>
            {error && <div className="error">{error}</div>}
          </div>
        )}

        {step === "ticket" && ticket && (
          <div className="card">
            <h2><span className="badge">{ticket.status}</span></h2>
            <div className="ticket">
              <div className="k">Booking reference (PNR)</div>
              <div className="pnr">{ticket.pnr}</div>
              <div className="grid">
                <div><div className="k">Passenger</div><div className="v">{ticket.passenger.firstName} {ticket.passenger.lastName}</div></div>
                <div><div className="k">Ticket</div><div className="v">{ticket.ticketNumber}</div></div>
                <div><div className="k">Flight</div><div className="v">{ticket.flight.airline} {ticket.flight.flightNumber}</div></div>
                <div><div className="k">Seat</div><div className="v">{ticket.seat}{ticket.seatType ? ` (${ticket.seatType})` : ""}</div></div>
                <div><div className="k">Route</div><div className="v">{ticket.flight.from} to {ticket.flight.to}</div></div>
                <div><div className="k">Date</div><div className="v">{ticket.flight.date}</div></div>
                <div><div className="k">Departs</div><div className="v">{ticket.flight.departTime}</div></div>
                <div><div className="k">Price</div><div className="v">{ticket.price} {ticket.currency}</div></div>
              </div>
            </div>
            <div className="seat-on-plane">
              <div className="seat-on-plane-h">Your seat on the plane</div>
              <div className="seat-svg-wrap"><PlaneSeatView seat={ticket.seat} /></div>
            </div>
            <p className="muted-note">Booking id: {ticket.bookingId}. Keep your PNR to retrieve the ticket later.</p>
            <div className="actions">
              <button onClick={reset}>Book another</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
