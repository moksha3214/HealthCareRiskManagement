import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function Precautions() {
  const precautions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      title: "Maintain a Balanced Diet",
      description: "Focus on low sugar, high fiber foods. Include whole grains, vegetables, and lean proteins in your daily meals.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Exercise Regularly",
      description: "Engage in at least 30 minutes of moderate physical activity daily. Walking, swimming, or cycling are excellent options.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
        </svg>
      ),
      title: "Avoid Smoking and Alcohol",
      description: "Eliminate smoking and limit alcohol consumption. These habits significantly increase diabetes risk and complications.",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Monitor Glucose and Blood Pressure",
      description: "Regular monitoring helps track your health status and enables early intervention when needed.",
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Get Regular Health Check-ups",
      description: "Schedule annual comprehensive health screenings to detect any early signs of diabetes or related conditions.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Stay Hydrated and Manage Stress",
      description: "Drink plenty of water and practice stress management techniques like meditation or yoga for overall well-being.",
      color: "from-teal-500 to-green-600"
    }
  ];

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
                className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200"
              >
                Past Analysis
              </Link>
              <Link
                href="/precautions"
                className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 dark:bg-gray-700 text-white"
              >
                Precautions
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Precautions to Reduce Diabetes Risk
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Follow these evidence-based recommendations to maintain optimal health and reduce your risk of developing diabetes
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700 text-white rounded-lg shadow-md p-6 mb-12 transition-colors duration-300">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Prevention is Better Than Cure</h2>
            <p className="text-blue-100 dark:text-gray-300 text-lg max-w-3xl mx-auto transition-colors duration-300">
              Small lifestyle changes can make a big difference in preventing diabetes. 
              Start implementing these precautions today for a healthier tomorrow.
            </p>
          </div>
        </div>

        {/* Precautions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {precautions.map((precaution, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${precaution.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white`}>
                  {precaution.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  {precaution.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {precaution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 border-green-200 dark:border-gray-600 rounded-lg shadow-md p-6 border transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
              <svg className="w-6 h-6 text-green-600 dark:text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Quick Tips
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Choose water over sugary drinks
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Take the stairs instead of elevators
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Get 7-8 hours of quality sleep
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Practice portion control
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600 rounded-lg shadow-md p-6 border transition-colors duration-300">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center transition-colors duration-300">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Monitoring Schedule
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Daily: Blood glucose (if at risk)
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Weekly: Blood pressure check
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Monthly: Weight tracking
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Annually: Comprehensive health screening
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-gray-800 dark:to-gray-700 text-white rounded-lg shadow-md p-6 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4">Start Your Health Journey Today</h3>
          <p className="text-purple-100 dark:text-gray-300 mb-6 max-w-2xl mx-auto transition-colors duration-300">
            Remember, small consistent changes lead to significant health improvements. 
            Consult with your healthcare provider before making major lifestyle changes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/risk-form"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 dark:text-gray-800 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              Assess Your Risk
            </Link>
            <Link 
              href="/past-analysis"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 dark:hover:text-gray-800 transition-colors duration-200"
            >
              View Analysis
            </Link>
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
