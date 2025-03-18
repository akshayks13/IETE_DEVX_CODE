'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function HabitsCompletedChart() {
  const [timeRange, setTimeRange] = useState('This Week');
  const timeRanges = [
    'Today', 'This Week', 'This Month', 'Last Month', 'Last 6 Months',
    'This Year', 'Last Year', 'All Time', 'Custom Range'
  ];
  const weeklyHabits = [
    { day: 'Su', count: 5, highlighted: false },
    { day: 'Mo', count: 7, highlighted: false },
    { day: 'Tu', count: 4, highlighted: true },
    { day: 'We', count: 6, highlighted: false },
    { day: 'Th', count: 7, highlighted: false },
    { day: 'Fr', count: 5, highlighted: false },
    { day: 'Sa', count: 3, highlighted: false },
  ];

  return (
    <section className="data-card">
      <div className="card-header">
        <h2>Habits Completed</h2>
        <div className="dropdown">
          <button onClick={() => {}} className="dropdown-btn">
            {timeRange} ▾
          </button>
          <div className="dropdown-content hidden">
            {timeRanges.map(range => (
              <div
                key={range}
                className="dropdown-item"
                onClick={() => setTimeRange(range)}
              >
                {range}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={weeklyHabits}
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
          >
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a0a0a0' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a0a0a0' }}
            />
            <Bar
              dataKey="count"
              fill="#453894"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
            {weeklyHabits.map((entry, index) =>
              entry.highlighted ? (
                <Bar
                  key={`highlight-${index}`}
                  dataKey="count"
                  fill="#6c5ce7"
                  radius={[4, 4, 0, 0]}
                  maxBarSize={40}
                />
              ) : null
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
