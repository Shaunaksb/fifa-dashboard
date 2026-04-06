import React from 'react';
import './styles/CardStyles.css';
import './styles/ChartStyles.css';

const DataTable = ({ title, data, span }) => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className={`card ${span ? `span-${span}` : ''}`}>
        <div className="card-title">{title}</div>
        <div style={{ color: 'var(--text-dim)', padding: '2rem', textAlign: 'center' }}>
          No data observations available.
        </div>
      </div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div className={`card ${span ? `span-${span}` : ''}`}>
      <div className="card-title">{title}</div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h.replace(/_/g, ' ').toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {headers.map((h) => (
                  <td key={`${i}-${h}`}>{row[h]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
