import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import * as Icons from 'lucide-react';
import './styles/CardStyles.css';
import './styles/ChartStyles.css';

const RadarRenderer = ({ config = {}, data: chartData = [], title, status, subtitle }) => {
  const chartColor = config.color || 'var(--primary)';
  
  return (
    <div className="card">
      <div className="card-title">
        <Icons.Activity size={20} color={chartColor} />
        {title} 
        {status && (
          <span className={`badge ${status === 'Overfit' ? 'badge-overfit' : 'badge-stable'}`}>
            {status}
          </span>
        )}
      </div>
      <div className="stat-label" style={{ marginBottom: '1.5rem', opacity: 0.7 }}>{subtitle}</div>
      <div className="chart-container" style={{ height: '300px', minHeight: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 11 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name={title}
              dataKey="A"
              stroke={chartColor}
              fill={chartColor}
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RadarRenderer;
