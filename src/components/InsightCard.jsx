import React from 'react';
import * as Icons from 'lucide-react';
import IconRenderer from './IconRenderer';
import './styles/CardStyles.css';

const InsightCard = ({ title, content, icon, color, span }) => {
  const points = Array.isArray(content) ? content : [content];
  
  return (
    <div className={`card ${span ? `span-${span}` : ''}`}>
      <div className="card-title">
        <IconRenderer name={icon || 'Zap'} size={24} color={color || 'var(--primary)'} />
        {title}
      </div>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {points.map((point, i) => (
          <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <div style={{ 
              marginTop: '0.25rem',
              color: color || 'var(--primary)',
              opacity: 0.8
            }}>
              <Icons.ShieldCheck size={18} />
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.6' }}>{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightCard;
