'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function HabitCompletionRateChart() {
  const [completionTimeRange, setCompletionTimeRange] = useState('Last 6 Months');
  const timeRanges = [
    'Today', 'This Week', 'This Month', 'Last Month', 'Last 6 Months',
    'This Year', 'Last Year', 'All Time', 'Custom Range'
  ];
  const completionRateData = [
    { month: 'Jul', rate: 70 },
    { month: 'Aug', rate: 65 },
    { month: 'Sep', rate: 78 },
    { month: 'Oct', rate: 72 },
    { month: 'Nov', rate: 85 },
    { month: 'Dec', rate: 80 },
  ];

  return (
    <section className="data-card">
      <div className="card-header">
        <h2>Habit Completion Rate</h2>
        <div className="dropdown">
          <button onClick={() => {}} className="dropdown-btn">
            {completionTimeRange} ▾
          </button>
          <div className="dropdown-content hidden">
            {timeRanges.map(range => (
              <div
                key={range}
                className="dropdown-item"
                onClick={() => setCompletionTimeRange(range)}
              >
                {range}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            data={completionRateData}
            margin={{ top: 20, right: 10, left: 0, bottom: 10 }}
          >
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a0a0a0' }}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a0a0a0' }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#6c5ce7"
              strokeWidth={2}
              dot={{ fill: '#6c5ce7', r: 4 }}
              activeDot={{ fill: '#6c5ce7', r: 6, stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
