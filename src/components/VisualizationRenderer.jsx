import React from 'react';
import StatCard from './StatCard';
import InsightCard from './InsightCard';
import RadarRenderer from './RadarRenderer';
import BarRenderer from './BarRenderer';
import AreaRenderer from './AreaRenderer';
import PieRenderer from './PieRenderer';
import DataTable from './DataTable';
import HeatmapRenderer from './HeatmapRenderer';
import TuningRenderer from './TuningRenderer';

const VisualizationRenderer = ({ viz, datasetPreview }) => {
  switch (viz.type) {
    case 'stat': 
      return <StatCard {...viz} />;
    case 'insight': 
      return <InsightCard {...viz} />;
    case 'radar': 
      return <RadarRenderer {...viz} />;
    case 'bar': 
      return <BarRenderer {...viz} />;
    case 'area': 
      return <AreaRenderer {...viz} />;
    case 'pie': 
      return <PieRenderer {...viz} />;
    case 'table': 
      return <DataTable title={viz.title} data={datasetPreview} span={viz.span} />;
    case 'heatmap': 
      return <HeatmapRenderer {...viz} />;
    case 'tuning': 
      return <TuningRenderer {...viz} />;
    default: 
      return <div className="card">Unknown viz type: {viz.type}</div>;
  }
};

export default VisualizationRenderer;
