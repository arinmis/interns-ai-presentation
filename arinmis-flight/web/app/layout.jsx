import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Arınmış Flight",
  description: "Demo flight booking (search, offer, book, ticket)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="topbar">
          <span className="brand">Arınmış Flight</span>
          <nav className="nav">
            <Link href="/">Search</Link>
            <Link href="/bookings">Bookings</Link>
            <Link href="/docs">API docs</Link>
          </nav>
        </div>
        {children}
      </body>
    </html>
  );
}
