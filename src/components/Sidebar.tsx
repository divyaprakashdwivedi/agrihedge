import { useState } from 'react';
import { Home, TrendingUp, Repeat, FileText, BookOpen, HelpCircle, LogOut, Sprout, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: TrendingUp, label: 'Price Prediction', path: '/price-prediction' },
    { icon: Repeat, label: 'Simulated Hedging', path: '/simulate-trade' },
    { icon: FileText, label: 'E-Contracts', path: '/e-contracts' },
    { icon: BookOpen, label: 'Learning Center', path: '/learning-center' },
  ];

  const bottomItems = [
    { icon: HelpCircle, label: 'Help & Support', path: '/help' },
    { icon: LogOut, label: 'Logout', path: '/login' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed sm:hidden left-4 top-4 z-50 p-2 rounded-lg bg-green-700 text-white"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 sm:hidden z-40"
          onClick={toggleMobileMenu}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-[280px] sm:w-64 bg-gradient-to-b from-green-800 to-green-900 
          text-white flex flex-col shadow-xl z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'}`}
      >
        <div className="p-6 border-b border-green-700">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 sm:w-8 h-6 sm:h-8" />
            <h1 className="text-xl sm:text-2xl font-bold">AgriHedge</h1>
          </div>
        </div>

        <nav className="flex-1 py-4 sm:py-6 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 sm:py-3 transition-all ${
                  isActive
                    ? 'bg-green-700 border-l-4 border-green-400'
                    : 'hover:bg-green-700/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-green-700">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-6 py-4 sm:py-3 hover:bg-green-700/50 transition-all"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
