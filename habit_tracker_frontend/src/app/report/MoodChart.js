'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default function MoodChart() {
  const [moodTimeRange, setMoodTimeRange] = useState('This Week');
  const timeRanges = [
    'Today', 'This Week', 'This Month', 'Last Month', 'Last 6 Months',
    'This Year', 'Last Year', 'All Time', 'Custom Range'
  ];
  const moodChartData = [
    { day: 16, mood: 2 },
    { day: 17, mood: 3 },
    { day: 18, mood: 4 },
    { day: 19, mood: 4 },
    { day: 20, mood: 3 },
    { day: 21, mood: 2 },
    { day: 22, mood: 4 },
  ];

  return (
    <section className="data-card">
      <div className="card-header">
        <h2>Mood Chart</h2>
        <div className="dropdown">
          <button onClick={() => {}} className="dropdown-btn">
            {moodTimeRange} ▾
          </button>
        </div>
      </div>

      <div className="chart-container mood-chart">
        <div className="mood-labels">
          <div className="mood-label">😄</div>
          <div className="mood-label">🙂</div>
          <div className="mood-label">😐</div>
          <div className="mood-label">🙁</div>
          <div className="mood-label">😢</div>
        </div>
        <ResponsiveContainer width="90%" height={180}>
          <LineChart
            data={moodChartData}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <YAxis
              domain={[1, 5]}
              reversed
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a0a0a0' }}
            />
            <Line
              type="monotone"
              dataKey="mood"
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
