
import React from 'react';
import { Globe, BarChart2, AlertTriangle, Anchor, Box, Compass, LineChart, HelpCircle, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { icon: Globe, label: 'Route Analysis', active: true },
    { icon: BarChart2, label: 'Statistics' },
    { icon: AlertTriangle, label: 'Risk Reports' },
    { icon: Anchor, label: 'Vessel Tracking' },
    { icon: Box, label: 'Cargo Management' },
    { icon: Compass, label: 'Navigation Tools' },
    { icon: LineChart, label: 'Market Insights' },
  ];
  
  const footerItems = [
    { icon: HelpCircle, label: 'Support' },
    { icon: Settings, label: 'Settings' }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden transition-opacity" 
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 h-full w-64 transform transition-transform duration-300 ease-in-out 
                  ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                  bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-sm`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-800">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              GlobalTrade Insight
            </div>
          </div>
          
          {/* Nav items */}
          <div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
            {navItems.map((item, index) => (
              <button 
                key={index}
                className={`flex items-center w-full px-3 py-2.5 text-sm rounded-lg transition-colors 
                          ${item.active ? 
                            'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 font-medium' : 
                            'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
              >
                <item.icon className={`h-5 w-5 mr-2 ${item.active ? 'text-blue-500' : 'text-gray-500 dark:text-gray-400'}`} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          {/* Footer */}
          <div className="p-3 border-t border-gray-200 dark:border-gray-800">
            {footerItems.map((item, index) => (
              <button 
                key={index}
                className="flex items-center w-full px-3 py-2.5 text-sm rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <item.icon className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-400" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          
          {/* User */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                GT
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  Trade Analyst
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  Pro Account
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
