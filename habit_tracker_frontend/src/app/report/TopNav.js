'use client';
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="top-nav">
      <div className="nav-logo">Habit Tracker</div>
      <div className="nav-links">
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/stats">Stats</Link>
        <Link className="nav-link active" href="/report">Report</Link>
        <Link className="nav-link" href="/settings">Settings</Link>
        <Link className="nav-link" href="/profile">Profile</Link>
      </div>

      <style jsx>{`
        .top-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          background-color: #1e1e1e;
          border-radius: 8px;
        }
        .nav-logo {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
        }
        .nav-links {
          display: flex;
          gap: 16px;
        }
        .nav-link {
          color: #a0a0a0;
          text-decoration: none;
          font-size: 16px;
          transition: color 0.2s ease-in-out;
        }
        .nav-link:hover {
          color: #6c5ce7;
        }
        .nav-link.active {
          color: #6c5ce7;
          font-weight: 600;
        }
      `}</style>
    </nav>
  );
}
