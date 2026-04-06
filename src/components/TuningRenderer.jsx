import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import * as Icons from 'lucide-react';
import './styles/CardStyles.css';
import './styles/ChartStyles.css';

const TuningRenderer = ({ data: tuningData = [], title, subtitle }) => (
  <div className="card span-2">
    <div className="card-title">
      <Icons.Settings size={20} color="var(--secondary)" />
      {title}
    </div>
    <div className="stat-label" style={{ marginBottom: '1.5rem', opacity: 0.8 }}>{subtitle}</div>
    <div className="chart-container" style={{ height: '350px', minHeight: '350px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={tuningData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis 
            dataKey="param" 
            label={{ value: 'Hyperparameter Value', position: 'bottom', offset: -5, fill: '#94a3b8', fontSize: 12 }} 
            tick={{ fill: '#94a3b8', fontSize: 13 }}
          />
          <YAxis 
            tick={{ fill: '#94a3b8', fontSize: 12 }} 
            label={{ value: 'Accuracy Score', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 12 }}
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
          />
          <Legend verticalAlign="top" height={50}/>
          <Line 
            type="monotone" 
            dataKey="Training" 
            stroke="var(--primary)" 
            strokeWidth={3} 
            dot={{ r: 4, stroke: 'var(--primary)', strokeWidth: 2, fill: '#0b0f1a' }}
            activeDot={{ r: 8 }}
          />
          <Line 
            type="monotone" 
            dataKey="Validation" 
            stroke="var(--secondary)" 
            strokeWidth={3} 
            strokeDasharray="5 5"
            dot={{ r: 4, stroke: 'var(--secondary)', strokeWidth: 2, fill: '#0b0f1a' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default TuningRenderer;
