import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
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
                className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 dark:bg-gray-700 text-white transition-colors duration-200"
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
                className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200"
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Healthcare Risk Management
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 transition-colors duration-300">
            Collect patient health details to assess risks and provide early intervention insights.
          </p>
          
          <Link 
            href="/risk-form"
            className="inline-flex items-center px-8 py-4 bg-blue-600 dark:bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Go to Risk Form
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Risk Assessment</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Comprehensive health data collection and analysis for early risk detection.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Data Analysis</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Historical data analysis to identify patterns and risk factors.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Preventive Care</h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Evidence-based recommendations and precautions for better health outcomes.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700 text-white rounded-lg shadow-md p-6 transition-colors duration-300">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100 dark:text-gray-300">Patients Assessed</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-blue-100 dark:text-gray-300">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100 dark:text-gray-300">System Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Early</div>
              <div className="text-blue-100 dark:text-gray-300">Risk Detection</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Healthcare Risk Management System</h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">
              Providing early intervention insights through comprehensive health risk assessment
            </p>
            <div className="mt-4 pt-4 border-t border-gray-700 dark:border-gray-600">
              <p className="text-gray-400 dark:text-gray-500 text-xs transition-colors duration-300">
                © 2024 Healthcare Risk Management. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
