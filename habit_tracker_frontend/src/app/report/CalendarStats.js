'use client';

import { useState } from 'react';

export default function CalendarStats() {
  const [calendarMonth] = useState('December 2024');

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Add weekday headers
    const weekdayHeaders = weekdays.map(day => (
      <div key={`header-${day}`} className="calendar-cell calendar-header">
        {day.charAt(0)}
      </div>
    ));
    
    // Generate 31 days (simplified for demo)
    for (let i = 1; i <= 31; i++) {
      const isCompleted = Math.random() > 0.3;
      days.push(
        <div
          key={`day-${i}`}
          className={`calendar-cell ${isCompleted ? 'completed' : ''}`}
        >
          {i}
        </div>
      );
    }
    
    return { weekdayHeaders, days };
  };

  const { weekdayHeaders, days } = generateCalendarDays();

  return (
    <section className="data-card">
      <div className="card-header">
        <h2>Calendar Stats</h2>
        <div className="dropdown">
          <button onClick={() => {}} className="dropdown-btn">
            {calendarMonth} ▾
          </button>
        </div>
      </div>

      <div className="calendar-container">
        <div className="calendar-grid">
          {weekdayHeaders}
          {days}
        </div>
      </div>
    </section>
  );
}
