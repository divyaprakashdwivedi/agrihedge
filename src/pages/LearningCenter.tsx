import { BookOpen, Video, FileText, TrendingUp, Shield, BookMarked, Search } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const LearningCenter = () => {
  const user = {
    name: 'R. Kumar',
    farmerId: '78543',
  };

  const learningModules = [
    {
      id: 1,
      title: 'What is a Futures Contract?',
      category: 'Basics',
      categoryColor: 'blue',
      description:
        'Learn the fundamental concepts of futures contracts and why they are important for farmers.',
      icon: BookOpen,
      type: 'Video',
      languages: ['हिंदी', 'English'],
      duration: '8 min',
    },
    {
      id: 2,
      title: 'How to Read Price Charts',
      category: 'Hedging',
      categoryColor: 'green',
      description:
        'Understand the basics of price charts to make better-informed hedging decisions for your crops.',
      icon: TrendingUp,
      type: 'Article',
      languages: ['English'],
      duration: '5 min',
    },
    {
      id: 3,
      title: 'Creating Your First E-Contract',
      category: 'E-Contracts',
      categoryColor: 'purple',
      description:
        'A step-by-step video guide on how to create, review, and sign a digital contract on the platform.',
      icon: FileText,
      type: 'Video',
      languages: ['हिंदी', 'मराठी'],
      duration: '12 min',
    },
    {
      id: 4,
      title: 'Managing Price Risk',
      category: 'Hedging',
      categoryColor: 'green',
      description:
        'Explore strategies to protect your income from market volatility using simulated hedging.',
      icon: Shield,
      type: 'Article',
      languages: ['हिंदी', 'English'],
      duration: '10 min',
    },
    {
      id: 5,
      title: 'Platform Tour for Beginners',
      category: 'Platform Guide',
      categoryColor: 'orange',
      description:
        'A complete walkthrough of all the features available on the AgriHedge dashboard.',
      icon: BookMarked,
      type: 'Video',
      languages: ['English'],
      duration: '15 min',
    },
    {
      id: 6,
      title: 'Understanding AI Predictions',
      category: 'Basics',
      categoryColor: 'blue',
      description:
        'How does our AI forecast prices? Get a simple explanation of the technology behind our predictions.',
      icon: TrendingUp,
      type: 'Article',
      languages: ['English'],
      duration: '6 min',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Sidebar />
      <Header user={user} />

      <main className="ml-0 sm:ml-64 mt-16 p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
                ज्ञान केंद्र (Learning Center)
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Master agricultural hedging and e-contracts with our simple guides and tutorials.
              </p>
            </div>

            <div className="flex items-center justify-center mt-4 lg:mt-0">
              <img
                src="https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Farmers Learning"
                className="rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl w-full h-48 sm:h-64 object-cover"
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for a topic..."
                  className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <select className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Categories</option>
                <option>Basics</option>
                <option>Hedging</option>
                <option>E-Contracts</option>
                <option>Platform Guide</option>
              </select>

              <select className="px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Languages</option>
                <option>English</option>
                <option>हिंदी</option>
                <option>मराठी</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {learningModules.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
                >
                  <div
                    className={`h-2 ${
                      module.categoryColor === 'blue'
                        ? 'bg-blue-500'
                        : module.categoryColor === 'green'
                        ? 'bg-green-500'
                        : module.categoryColor === 'purple'
                        ? 'bg-purple-500'
                        : 'bg-orange-500'
                    }`}
                  ></div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div
                        className={`p-3 rounded-lg ${
                          module.categoryColor === 'blue'
                            ? 'bg-blue-100'
                            : module.categoryColor === 'green'
                            ? 'bg-green-100'
                            : module.categoryColor === 'purple'
                            ? 'bg-purple-100'
                            : 'bg-orange-100'
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            module.categoryColor === 'blue'
                              ? 'text-blue-700'
                              : module.categoryColor === 'green'
                              ? 'text-green-700'
                              : module.categoryColor === 'purple'
                              ? 'text-purple-700'
                              : 'text-orange-700'
                          }`}
                        />
                      </div>

                      <span
                        className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          module.categoryColor === 'blue'
                            ? 'bg-blue-100 text-blue-700'
                            : module.categoryColor === 'green'
                            ? 'bg-green-100 text-green-700'
                            : module.categoryColor === 'purple'
                            ? 'bg-purple-100 text-purple-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {module.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                      {module.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        {module.type === 'Video' ? (
                          <Video className="w-4 h-4" />
                        ) : (
                          <FileText className="w-4 h-4" />
                        )}
                        <span>{module.type}</span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="font-semibold">{module.languages.join(', ')}</span>
                      </div>

                      <span>{module.duration}</span>
                    </div>

                    <button className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors flex items-center justify-center gap-2">
                      Start Learning
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-green-700 to-emerald-700 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-white shadow-lg sm:shadow-xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold mb-2">Need Help Getting Started?</h2>
                <p className="text-sm sm:text-base text-green-100">
                  Our support team is here to help you navigate the platform and answer any questions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-green-700 px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-green-50 transition-colors">
                  Help Center
                </button>
                <button className="w-full sm:w-auto border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-white hover:text-green-700 transition-colors">
                  FAQs
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="ml-0 sm:ml-64 bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 sm:py-8 mt-8 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">AgriHedge</h3>
              <p className="text-gray-400 text-sm">
                Empowering farmers with data and technology.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Dashboard</li>
                <li>Market Data</li>
                <li>E-Contracts</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Help Center</li>
                <li>FAQs</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            <p>&copy; 2025 AgriHedge Platform. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LearningCenter;
