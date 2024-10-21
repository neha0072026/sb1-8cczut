import React from 'react';
import { Users, Package, ShoppingCart, DollarSign } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const stats = [
    { name: 'Total Users', value: '1,234', icon: Users },
    { name: 'Total Products', value: '567', icon: Package },
    { name: 'Total Orders', value: '89', icon: ShoppingCart },
    { name: 'Total Revenue', value: '$12,345', icon: DollarSign },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <item.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                    <dd className="text-lg font-semibold text-gray-900">{item.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;