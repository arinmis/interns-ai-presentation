"use client";

import { useEffect, useState } from "react";
import PlaneSeatView from "../PlaneSeatView";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pnr, setPnr] = useState("");
  const [found, setFound] = useState(null);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    try {
      const res = await fetch("/api/bookings");
      const data = await res.json();
      setBookings(data.bookings || []);
    } finally {
      setLoading(false);
    }
  }

  async function doLookup(id) {
    setError(""); setFound(null);
    if (!id) return;
    try {
      const res = await fetch(`/api/bookings/${encodeURIComponent(id)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Not found");
      setFound(data.ticket);
    } catch (err) { setError(err.message); }
  }

  useEffect(() => {
    load();
    const q = new URLSearchParams(window.location.search).get("pnr");
    if (q) { setPnr(q); doLookup(q.trim()); }
  }, []);

  function lookup(e) {
    e.preventDefault();
    doLookup(pnr.trim());
  }

  return (
    <div className="wrap">
      <div className="card">
        <h1>Find a booking</h1>
        <p className="sub">Look up a ticket by its PNR or booking id.</p>
        <form onSubmit={lookup} className="row">
          <div style={{ flex: 3 }}>
            <input value={pnr} onChange={(e) => setPnr(e.target.value)} placeholder="e.g. BZ325J or BK-0002" />
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
            <button type="submit" style={{ width: "100%" }}>Find</button>
          </div>
        </form>
        {error && <div className="error">{error}</div>}
        {found && (
          <div className="ticket" style={{ marginTop: 14 }}>
            <div className="k">Booking reference (PNR)</div>
            <div className="pnr">{found.pnr}</div>
            <div className="grid">
              <div><div className="k">Passenger</div><div className="v">{found.passenger.firstName} {found.passenger.lastName}</div></div>
              <div><div className="k">Ticket</div><div className="v">{found.ticketNumber}</div></div>
              <div><div className="k">Flight</div><div className="v">{found.flight.airline} {found.flight.flightNumber}</div></div>
              <div><div className="k">Seat</div><div className="v">{found.seat}</div></div>
              <div><div className="k">Route</div><div className="v">{found.flight.from} to {found.flight.to}</div></div>
              <div><div className="k">Date</div><div className="v">{found.flight.date}</div></div>
            </div>
          </div>
        )}
        {found && (
          <div className="seat-on-plane">
            <div className="seat-on-plane-h">Seat {found.seat} on the plane</div>
            <div className="seat-svg-wrap"><PlaneSeatView seat={found.seat} /></div>
          </div>
        )}
      </div>

      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ margin: 0 }}>All bookings</h1>
          <button className="ghost" onClick={load} disabled={loading}>{loading ? "..." : "Refresh"}</button>
        </div>
        <p className="sub" style={{ marginTop: 6 }}>{bookings.length} booking(s) in memory</p>

        {bookings.length === 0 && !loading && (
          <p className="muted-note">No bookings yet. Book one from the Search page or via the MCP agent.</p>
        )}

        {bookings.map((b) => (
          <div className="flight" key={b.bookingId}>
            <div className="info">
              <strong>{b.pnr}</strong> &middot; {b.passenger.firstName} {b.passenger.lastName}
              <div className="meta">
                {b.flight.airline} {b.flight.flightNumber} &middot; {b.flight.from} to {b.flight.to} &middot; {b.flight.date} {b.flight.departTime} &middot; seat {b.seat}
              </div>
            </div>
            <div className="priceRow">
              <span className="price">{b.price} {b.currency}</span>
              <span className="badge">{b.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
