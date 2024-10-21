import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, Package, ShoppingCart, BarChart2, Settings, Clipboard, Upload } from 'lucide-react';

const Sidebar: React.FC = () => {
  const [logo, setLogo] = useState<string | null>(null);

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Users', icon: Users, path: '/users' },
    { name: 'Products', icon: Package, path: '/products' },
    { name: 'Orders', icon: ShoppingCart, path: '/orders' },
    { name: 'Inventory', icon: Clipboard, path: '/inventory' },
    { name: 'Reports', icon: BarChart2, path: '/reports' },
    { name: 'Settings', icon: Settings, path: '/settings' },
  ];

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target?.result as string);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <div className="flex flex-col items-center mb-6">
        {logo ? (
          <img src={logo} alt="Company Logo" className="h-16 w-16 rounded-full mb-2" />
        ) : (
          <Package className="h-16 w-16 text-white mb-2" />
        )}
        <label htmlFor="logo-upload" className="cursor-pointer text-sm text-gray-300 hover:text-white">
          {logo ? 'Change Logo' : 'Upload Logo'}
          <input
            id="logo-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleLogoUpload}
          />
        </label>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `block py-2.5 px-4 rounded transition duration-200 ${
                isActive ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-700'
              }`
            }
          >
            <div className="flex items-center">
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </div>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;