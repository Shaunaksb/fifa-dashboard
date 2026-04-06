import React from 'react';
import IconRenderer from './IconRenderer';
import './styles/CardStyles.css';

const StatCard = ({ title, value, unit, icon, color, trend, insight }) => {
  const cardColor = color || 'var(--primary)';
  
  return (
    <div className="card">
      <div className="card-title">
        <IconRenderer name={icon || 'Activity'} size={22} color={cardColor} />
        {title}
      </div>
      <div className="stat-value" style={{ 
        background: `linear-gradient(to bottom right, #fff, ${cardColor})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        {value}
        {unit && <span style={{ fontSize: '1rem', marginLeft: '0.5rem', opacity: 0.6, fontWeight: 500 }}>{unit}</span>}
      </div>
      {trend && (
        <div style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.5rem' }}>
          {trend}
        </div>
      )}
      <div className="stat-label" style={{ opacity: 0.7 }}>{insight}</div>
    </div>
  );
};

export default StatCard;
