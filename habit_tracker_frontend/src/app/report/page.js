'use client';

import Head from 'next/head';
import TopNav from './TopNav';
import DashboardGrid from './DashboardGrid';
import HabitsCompletedChart from './HabitsCompletedChart';
import HabitCompletionRateChart from './HabitCompletionRateChart';
import CalendarStats from './CalendarStats';
import MoodChart from './MoodChart';

export default function Report() {
  return (
    <div className="app-container">
      <Head>
        <title>Habit Tracker | Report</title>
        <meta name="description" content="Track your habits and view reports" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />

      <main className="main-content">
        <header className="page-header">
          <h1>Report</h1>
          <button className="options-btn">⋮</button>
        </header>

        <DashboardGrid />
        
        <div className="charts-grid">
          <div className="chart-card">
            <HabitsCompletedChart />
          </div>
          <div className="chart-card">
            <HabitCompletionRateChart />
          </div>
        </div>
        
        <div className="charts-grid">
          <div className="chart-card">
            <CalendarStats />
          </div>
          <div className="chart-card">
            <MoodChart />
          </div>
        </div>
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
            Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        
        body {
          background-color: #121212;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        
        .app-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 16px;
        }

        .main-content {
          padding: 16px 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        
        .page-header h1 {
          font-size: 28px;
          font-weight: 600;
        }
        
        .options-btn {
          background: none;
          border: none;
          color: #ffffff;
          font-size: 24px;
          cursor: pointer;
        }
        
        .charts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .chart-card {
          background-color: #1e1e1e;
          border-radius: 12px;
          overflow: hidden;
        }
        
        .data-card {
          background-color: #1e1e1e;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 24px;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        
        .card-header h2 {
          font-size: 18px;
          font-weight: 600;
        }
        
        .dropdown {
          position: relative;
        }
        
        .dropdown-btn {
          background: none;
          border: none;
          color: #6c5ce7;
          font-size: 14px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .dropdown-content {
          position: absolute;
          right: 0;
          background-color: #2d2d2d;
          min-width: 160px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1;
        }
        
        .dropdown-content.hidden {
          display: none;
        }
        
        .dropdown-item {
          padding: 12px 16px;
          cursor: pointer;
        }
        
        .dropdown-item:hover {
          background-color: #3d3d3d;
        }
        
        .chart-container {
          width: 100%;
        }
        
        .calendar-container {
          padding: 16px 0;
        }
        
        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 8px;
        }
        
        .calendar-cell {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          border-radius: 50%;
          font-size: 14px;
        }
        
        .calendar-header {
          color: #a0a0a0;
          font-weight: 500;
        }
        
        .calendar-cell.completed {
          background-color: #6c5ce7;
          color: white;
        }
        
        .mood-chart {
          display: flex;
          align-items: center;
        }
        
        .mood-labels {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 180px;
          padding: 5px 0;
        }
        
        .mood-label {
          font-size: 16px;
          width: 24px;
          text-align: center;
        }
        
        /* Dashboard grid styles */
        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .stat-card {
          background-color: #1e1e1e;
          border-radius: 12px;
          padding: 16px;
        }
        
        .stat-value {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-size: 14px;
          color: #a0a0a0;
        }

        /* Responsive styles */
        @media (min-width: 768px) {
          .charts-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .dashboard-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .app-container {
            padding: 24px;
          }
          
          .main-content {
            padding: 24px 0;
          }
        }
      `}</style>
    </div>
  );
}