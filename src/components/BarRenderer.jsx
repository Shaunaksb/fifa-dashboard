import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import * as Icons from 'lucide-react';
import './styles/CardStyles.css';
import './styles/ChartStyles.css';

const BarRenderer = ({ config = {}, data: chartData = [], title, span }) => {
  const bars = config.bars || [];
  
  return (
    <div className={`card ${span ? `span-${span}` : 'span-2'}`}>
      <div className="card-title">
        <Icons.BarChart3 size={20} color="var(--primary)" />
        {title}
      </div>
      <div className="chart-container" style={{ height: '350px', minHeight: '350px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 500 }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }} 
              tickLine={false} 
              dy={10}
            />
            <YAxis 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              axisLine={false} 
              tickLine={false} 
              unit="%"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(30, 41, 59, 0.95)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)'
              }}
              itemStyle={{ color: '#f8fafc', fontSize: '14px' }}
              cursor={{ fill: 'rgba(255,255,255,0.03)' }}
            />
            <Legend verticalAlign="top" height={50} wrapperStyle={{ paddingBottom: '20px' }} />
            {bars.map((bar, i) => (
              <Bar 
                key={i} 
                dataKey={bar.key} 
                name={bar.name} 
                fill={bar.color || 'var(--primary)'} 
                radius={[6, 6, 0, 0]} 
                animationDuration={1500}
                barSize={30}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarRenderer;
