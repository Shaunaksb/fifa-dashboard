import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import * as Icons from 'lucide-react';
import './styles/CardStyles.css';
import './styles/ChartStyles.css';

const AreaRenderer = ({ config = {}, data: chartData = [], title }) => {
  const chartColor = config.color || 'var(--primary)';
  const dataKey = config.dataKey || 'value';
  const xAxis = config.xAxis || 'name';
  const gradientId = `colorG-${title.replace(/\s+/g, '-')}`;

  return (
    <div className="card">
      <div className="card-title">
        <Icons.Activity size={20} color={chartColor} />
        {title}
      </div>
      <div className="chart-container" style={{ height: '300px', minHeight: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey={xAxis} 
              tick={{ fill: '#94a3b8', fontSize: 11 }} 
              axisLine={false} 
              tickLine={false} 
            />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(30, 41, 59, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(8px)' }}
              itemStyle={{ color: '#f8fafc' }}
            />
            <Area 
              type="monotone" 
              dataKey={dataKey} 
              stroke={chartColor} 
              strokeWidth={2}
              fillOpacity={1} 
              fill={`url(#${gradientId})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaRenderer;
