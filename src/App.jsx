import React, { useState, useEffect } from 'react';
import data from './data/data.json';
import VisualizationRenderer from './components/VisualizationRenderer';
import { Sun, Moon } from 'lucide-react';
import './index.css';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('fifa-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('fifa-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (!data.sections) {
    return <div>Error: data.json is missing 'sections' array. Please run extraction script.</div>;
  }

  return (
    <div className="app-container">
      <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      <header className="header">
        {data.dashboard_title}
      </header>

      {data.sections.map((section) => (
        <section key={section.id} className="story-section">
          <div className="section-header">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
          </div>
          <div className="grid">
            {section.visualizations.map((viz) => (
              <VisualizationRenderer 
                key={viz.id} 
                viz={viz} 
                datasetPreview={data.dataset_preview} 
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
