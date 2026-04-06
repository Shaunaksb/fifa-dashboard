import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import * as Icons from 'lucide-react';
import './styles/CardStyles.css';
import './styles/ChartStyles.css';

const DEFAULT_COLORS = ['#6366f1', '#a855f7', '#ec4899', '#f59e0b', '#10b981', '#3b82f6'];

const PieRenderer = ({ data: chartData = [], title, config = {} }) => {
  const chartColor = config.color || 'var(--primary)';
  
  return (
    <div className="card">
      <div className="card-title">
        <Icons.PieChart size={20} color={chartColor} />
        {title}
      </div>
      <div className="chart-container" style={{ height: '320px', minHeight: '320px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              innerRadius={70}
              outerRadius={95}
              paddingAngle={8}
              dataKey="value"
              nameKey="name"
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={DEFAULT_COLORS[index % DEFAULT_COLORS.length]} 
                  style={{ filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))' }}
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'rgba(30, 41, 59, 0.95)', 
                border: '1px solid rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                backdropFilter: 'blur(12px)',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)'
              }}
              itemStyle={{ color: '#f8fafc', fontSize: '13px' }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={40} 
              iconType="circle" 
              iconSize={8}
              wrapperStyle={{ paddingTop: '20px', fontSize: '12px', color: '#94a3b8' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieRenderer;
