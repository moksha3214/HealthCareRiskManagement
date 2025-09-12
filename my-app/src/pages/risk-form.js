import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function RiskForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    age: '',
    gender: '',
    bloodPressure: '',
    glucoseLevel: '',
    bmi: '',
    cholesterol: '',
    smokingStatus: '',
    familyHistory: '',
    additionalNotes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        patientName: '',
        age: '',
        gender: '',
        bloodPressure: '',
        glucoseLevel: '',
        bmi: '',
        cholesterol: '',
        smokingStatus: '',
        familyHistory: '',
        additionalNotes: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
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
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:bg-blue-500 dark:hover:bg-gray-700 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/risk-form"
                  className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 dark:bg-gray-700 text-white"
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

        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 text-center transition-colors duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Success!</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
              Patient data submitted successfully for risk analysis.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
            >
              Return to Home
            </Link>
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
                className="px-3 py-2 rounded-md text-sm font-medium bg-blue-700 dark:bg-gray-700 text-white"
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
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Patient Risk Assessment Form
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
            Please fill in the patient's health information for comprehensive risk analysis
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Patient Name */}
            <div>
              <label htmlFor="patientName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                Patient Name *
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                placeholder="Enter patient's full name"
              />
            </div>

            {/* Age and Gender Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Age *
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="0"
                  max="120"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="Enter age"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Gender *
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Blood Pressure and Glucose Level Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bloodPressure" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Blood Pressure (mmHg) *
                </label>
                <input
                  type="number"
                  id="bloodPressure"
                  name="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={handleInputChange}
                  required
                  min="50"
                  max="300"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="e.g., 120"
                />
              </div>

              <div>
                <label htmlFor="glucoseLevel" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Glucose Level (mg/dL) *
                </label>
                <input
                  type="number"
                  id="glucoseLevel"
                  name="glucoseLevel"
                  value={formData.glucoseLevel}
                  onChange={handleInputChange}
                  required
                  min="50"
                  max="500"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="e.g., 100"
                />
              </div>
            </div>

            {/* BMI and Cholesterol Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bmi" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  BMI (kg/m²) *
                </label>
                <input
                  type="number"
                  id="bmi"
                  name="bmi"
                  value={formData.bmi}
                  onChange={handleInputChange}
                  required
                  min="10"
                  max="100"
                  step="0.1"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="e.g., 25.5"
                />
              </div>

              <div>
                <label htmlFor="cholesterol" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Cholesterol (mg/dL) *
                </label>
                <input
                  type="number"
                  id="cholesterol"
                  name="cholesterol"
                  value={formData.cholesterol}
                  onChange={handleInputChange}
                  required
                  min="100"
                  max="500"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="e.g., 200"
                />
              </div>
            </div>

            {/* Smoking Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                Smoking Status *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="smokingStatus"
                    value="Yes"
                    checked={formData.smokingStatus === 'Yes'}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="smokingStatus"
                    value="No"
                    checked={formData.smokingStatus === 'No'}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">No</span>
                </label>
              </div>
            </div>

            {/* Family History */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-300">
                Family History of Disease *
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="familyHistory"
                    value="Yes"
                    checked={formData.familyHistory === 'Yes'}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="familyHistory"
                    value="No"
                    checked={formData.familyHistory === 'No'}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                  />
                  <span className="ml-2 text-gray-700 dark:text-gray-300 transition-colors duration-300">No</span>
                </label>
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                placeholder="Any additional health information or concerns..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 dark:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Patient Data
              </button>
            </div>
          </form>
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
