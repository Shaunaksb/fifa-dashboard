# ⚽ FIFA Player Analytics: KNN vs. Random Forest

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Recharts](https://img.shields.io/badge/Recharts-3.8-22B5BF?logo=recharts&logoColor=white)](https://recharts.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.3-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)

A rigorous, academic-grade comparative analysis dashboard exploring the predictive power of **k-Nearest Neighbors (KNN)** versus **Random Forest (RF)** ensemble methods on a comprehensive football player dataset.

![Dashboard Preview](https://placehold.co/1200x600/1e293b/f8fafc?text=FIFA+Analytics+Dashboard+Preview)

## 🎯 Project Overview

This dashboard serves as a visualization layer for a machine learning study conducted on 17,954 professional football players. The goal was to classify players into four broad roles—**Forward, Midfielder, Defender, and Goalkeeper**—based on 32 technical and physical attributes.

### Key Research Objectives:
- **Comparison**: Benchmarking lazy-learning (KNN) against ensemble methods (Random Forest).
- **Optimization**: Analyzing the Bias-Variance trade-off via hyperparameter tuning (k-neighbors vs. tree depth).
- **Synthesis**: Studying feature collinearity and the impact of Z-score normalization on classification accuracy.

---

## ✨ Features

### 📊 Advanced Visualizations
- **Correlation Heatmap**: Real-time rendering of feature relationships and multicollinearity.
- **Performance Benchmarking**: Side-by-side comparison of Accuracy, F1-Score, Precision, and Recall.
- **Radar Analysis**: Multi-dimensional capability maps for model training vs. validation phases.
- **Hyperparameter Traces**: Interactive line charts showing model performance across varying parameter spaces (K-neighbors and Max Depth).

### 🎨 Premium UI/UX
- **Glassmorphism Design**: Modern, translucent interface built with vanilla CSS.
- **Dynamic Theming**: Seamless transition between high-contrast Dark and Light modes.
- **Fluid Animations**: Smooth layout transitions and interactive elements powered by Framer Motion.
- **Responsive Layout**: Fully optimized for diverse display sizes using a custom CSS grid system.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS with modern tokens and glassmorphism.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shaunaksb/fifa-dashboard.git
   cd fifa-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 📈 Data Pipeline

The dashboard relies on a processed dataset generated from a Jupyter Notebook analysis. 

- **Source File**: `football_player1.ipynb`
- **Output Target**: `src/data/data.json`

> [!NOTE]
> The `data.json` file contains structured sections, visualization configurations, and a preview of the 17,954 samples. If you modify the machine learning models in the notebook, ensure you re-run the extraction script to update the dashboard.

---

## 🧪 Model Performance Summary

| Metric | KNN (k=3) | Random Forest |
| :--- | :--- | :--- |
| **Accuracy** | 85.02% | 89.03% |
| **F1-Score** | 85.00% | 88.96% |
| **Precision** | 85.08% | 88.98% |
| **Recall** | 85.02% | 89.03% |

*Random Forest demonstrates superior decision boundaries and ensemble stability compared to the memory-based KNN approach.*

---

## 📂 Project Structure

```text
fifa-dashboard/
├── src/
│   ├── components/       # Specialized visualization renderers
│   ├── data/             # Generated analytics results (data.json)
│   ├── assets/           # Static assets and images
│   ├── App.jsx           # Main application logic and routing
│   ├── index.css         # Design system and glassmorphism tokens
│   └── main.jsx          # React entry point
├── public/               # Public assets
├── package.json          # Project dependencies
└── vite.config.js        # Vite configuration
```

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Built with ❤️ for Football and Data Science enthusiasts.*
