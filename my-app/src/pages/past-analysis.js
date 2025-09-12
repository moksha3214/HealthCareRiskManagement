'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function PastAnalysis() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Data for charts
  const lineChartData = [
    { year: 2023, cases: 537 },
    { year: 2045, cases: 783 }
  ];

  const barChartData = [
    { model: "Clinical Scores", AUC: 0.75 },
    { model: "Lab Biomarkers", AUC: 0.83 },
    { model: "Machine Learning", AUC: 0.90 }
  ];

  const pieChartData = [
    { name: "Clinical", value: 40, color: "#3B82F6" },
    { name: "Genetic", value: 20, color: "#10B981" },
    { name: "Digital Biomarkers", value: 20, color: "#F59E0B" },
    { name: "Social Factors", value: 20, color: "#EF4444" }
  ];

  // Line Chart Component
  const LineChart = () => {
    const maxCases = Math.max(...lineChartData.map(d => d.cases));
    const minCases = Math.min(...lineChartData.map(d => d.cases));
    const range = maxCases - minCases;
    
    return (
      <div className="w-full h-80 bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Global Diabetes Cases (Millions)
        </h3>
        <div className="relative h-64">
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
              <line
                key={i}
                x1="50"
                y1={50 + ratio * 200}
                x2="90%"
                y2={50 + ratio * 200}
                stroke="currentColor"
                strokeWidth="1"
                className="text-gray-200 dark:text-gray-600"
              />
            ))}
            
            {/* Line path */}
            <path
              d={`M 50 ${50 + (1 - (lineChartData[0].cases - minCases) / range) * 200} L 90% ${50 + (1 - (lineChartData[1].cases - minCases) / range) * 200}`}
              stroke="#3B82F6"
              strokeWidth="3"
              fill="none"
              className="drop-shadow-sm"
            />
            
            {/* Data points */}
            {lineChartData.map((point, index) => {
              const x = 50 + (index * 0.4) * (90 - 5);
              const y = 50 + (1 - (point.cases - minCases) / range) * 200;
              return (
                <g key={index}>
                  <circle
                    cx={x}
                    cy={y}
                    r="6"
                    fill="#3B82F6"
                    className="drop-shadow-sm"
                  />
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    className="text-sm font-semibold fill-gray-800 dark:fill-gray-200"
                  >
                    {point.cases}M
                  </text>
                  <text
                    x={x}
                    y={y + 30}
                    textAnchor="middle"
                    className="text-sm fill-gray-600 dark:fill-gray-400"
                  >
                    {point.year}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    );
  };

  // Bar Chart Component
  const BarChart = () => {
    const maxAUC = Math.max(...barChartData.map(d => d.AUC));
    
    return (
      <div className="w-full h-80 bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Prediction Models by AUC Score
        </h3>
        <div className="flex items-end justify-center space-x-8 h-64">
          {barChartData.map((item, index) => {
            const height = (item.AUC / maxAUC) * 200;
            const colors = ["#3B82F6", "#10B981", "#F59E0B"];
            return (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-16 rounded-t-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    height: `${height}px`,
                    backgroundColor: colors[index]
                  }}
                  title={`${item.model}: ${item.AUC}`}
                >
                  <div className="h-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm transform -rotate-90">
                      {item.AUC}
                    </span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {item.model}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    AUC: {item.AUC}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Pie Chart Component
  const PieChart = () => {
    let cumulativePercentage = 0;
    
    return (
      <div className="w-full h-80 bg-white dark:bg-gray-800 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">
          Data Sources Contribution
        </h3>
        <div className="flex items-center justify-center h-64">
          <div className="relative w-48 h-48">
            <svg width="100%" height="100%" viewBox="0 0 200 200" className="transform -rotate-90">
              {pieChartData.map((item, index) => {
                const startAngle = cumulativePercentage * 3.6;
                const endAngle = (cumulativePercentage + item.value) * 3.6;
                const largeArcFlag = item.value > 50 ? 1 : 0;
                
                const x1 = 100 + 80 * Math.cos((startAngle * Math.PI) / 180);
                const y1 = 100 + 80 * Math.sin((startAngle * Math.PI) / 180);
                const x2 = 100 + 80 * Math.cos((endAngle * Math.PI) / 180);
                const y2 = 100 + 80 * Math.sin((endAngle * Math.PI) / 180);
                
                const pathData = [
                  `M 100 100`,
                  `L ${x1} ${y1}`,
                  `A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                  `Z`
                ].join(' ');
                
                cumulativePercentage += item.value;
                
                return (
                  <path
                    key={index}
                    d={pathData}
                    fill={item.color}
                    className="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
                    title={`${item.name}: ${item.value}%`}
                  />
                );
              })}
            </svg>
          </div>
          
          {/* Legend */}
          <div className="ml-8 space-y-3">
            {pieChartData.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className="w-4 h-4 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item.name}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-blue-600 dark:bg-gray-800 shadow-lg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-white text-xl font-bold">
                Healthcare Risk Management
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/risk-form"
                className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Risk Form
              </Link>
              <Link
                href="/past-analysis"
                className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 dark:bg-gray-700 text-white"
              >
                Past Analysis
              </Link>
              <Link
                href="/precautions"
                className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Precautions
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Past Diabetes Risk Analysis
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Insights from recent research (2010–2024).
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <LineChart />
          </div>

          {/* Bar Chart */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <BarChart />
          </div>
        </div>

        {/* Pie Chart - Full Width */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 mb-12">
          <PieChart />
        </div>

        {/* Summary Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Barriers Section */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 rounded-xl shadow-lg p-8 border border-red-200 dark:border-red-800">
            <h3 className="text-2xl font-bold text-red-800 dark:text-red-200 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Current Barriers
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-red-700 dark:text-red-300">
                  <strong>Workflow Disruption:</strong> Integration challenges with existing healthcare systems and clinical workflows.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-red-700 dark:text-red-300">
                  <strong>Bias in Minority Groups:</strong> Limited representation in training data leading to algorithmic bias.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-red-700 dark:text-red-300">
                  <strong>Privacy Issues:</strong> Concerns about patient data security and regulatory compliance.
                </p>
              </div>
            </div>
          </div>

          {/* Future Directions Section */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl shadow-lg p-8 border border-green-200 dark:border-green-800">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Future Directions
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-green-700 dark:text-green-300">
                  <strong>Federated Learning:</strong> Collaborative model training across institutions while preserving data privacy.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-green-700 dark:text-green-300">
                  <strong>Multi-omics Integration:</strong> Combining genomic, proteomic, and metabolomic data for comprehensive risk assessment.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-green-700 dark:text-green-300">
                  <strong>Adaptive Models:</strong> Self-updating algorithms that improve with new data and changing population characteristics.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Research Impact Summary
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">537M</div>
              <div className="text-gray-600 dark:text-gray-400">Current Global Cases (2023)</div>
            </div>
            <div className="text-center p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">783M</div>
              <div className="text-gray-600 dark:text-gray-400">Projected Cases (2045)</div>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">0.90</div>
              <div className="text-gray-600 dark:text-gray-400">Best AUC Score (ML)</div>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">14</div>
              <div className="text-gray-600 dark:text-gray-400">Years of Research</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}