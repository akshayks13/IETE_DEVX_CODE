'use client';

export default function DashboardGrid() {
    return (
      <div className="dashboard-grid">
        <div className="stat-card streak">
          <div className="stat-value">226</div>
          <div className="stat-label">Current streak</div>
        </div>
  
        <div className="stat-card completion">
          <div className="stat-value">89%</div>
          <div className="stat-label">Completion rate</div>
        </div>
  
        <div className="stat-card total-completed">
          <div className="stat-value">3,268</div>
          <div className="stat-label">Habits completed</div>
        </div>
  
        <div className="stat-card perfect-days">
          <div className="stat-value">307</div>
          <div className="stat-label">Total perfect days</div>
        </div>
      </div>
    );
  }
  