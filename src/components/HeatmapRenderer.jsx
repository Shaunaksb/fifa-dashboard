import React from 'react';
import * as Icons from 'lucide-react';
import './styles/CardStyles.css';
import './styles/ChartStyles.css';

const HeatmapRenderer = ({ data: matrix = [], title, span }) => {
  if (!matrix || matrix.length === 0) return null;

  const labels = matrix.map(m => m.name);
  const size = labels.length;

  const getColor = (value) => {
    // PuOr Diverging Scale (Purple to Orange)
    if (value > 0) {
      const alpha = value; 
      return `rgba(234, 88, 12, ${alpha})`; 
    } else if (value < 0) {
      const alpha = Math.abs(value); 
      return `rgba(126, 34, 206, ${alpha})`;
    }
    return 'var(--border)'; // Use theme border for neutral/zero
  };

  const getTextColor = (value) => {
    // Strong correlation cells get white text for readability against dense color
    if (Math.abs(value) > 0.5) return '#ffffff';
    // Neutral or weak correlation cells use the current theme's primary text color
    return 'var(--text)';
  };

  return (
    <div className={`card ${span ? `span-${span}` : 'span-2'}`}>
      <div className="card-title">
        <Icons.Grid size={20} color="var(--primary)" />
        {title}
      </div>
      <div className="heatmap-container">
        <div className="heatmap-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${size + 1}, 1fr)`,
          gap: '4px'
        }}>
          {/* Empty corner */}
          <div className="heatmap-label corner"></div>
          
          {/* Column labels */}
          {labels.map((label, i) => (
            <div key={`col-${i}`} className="heatmap-label col">{label}</div>
          ))}

          {/* Rows */}
          {matrix.map((row, i) => (
            <React.Fragment key={`row-fr-${i}`}>
              <div className="heatmap-label row">{row.name}</div>
              {labels.map((label, j) => {
                const val = row.values[j];
                return (
                  <div 
                    key={`cell-${i}-${j}`} 
                    className="heatmap-cell"
                    style={{ backgroundColor: getColor(val) }}
                    title={`${row.name} vs ${label}: ${val.toFixed(2)}`}
                  >
                    <span className="cell-value" style={{ color: getTextColor(val) }}>
                       {val.toFixed(2)}
                    </span>
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="heatmap-legend" style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
        <div className="legend-item">
          <div className="legend-swatch" style={{ background: '#7e22ce' }}></div>
          <span>Negative Correlation</span>
        </div>
        <div className="legend-item">
          <div className="legend-swatch" style={{ background: 'var(--border)' }}></div>
          <span>Neutral</span>
        </div>
        <div className="legend-item">
          <div className="legend-swatch" style={{ background: '#ea580c' }}></div>
          <span>Positive Correlation</span>
        </div>
      </div>
    </div>
  );
};

export default HeatmapRenderer;
