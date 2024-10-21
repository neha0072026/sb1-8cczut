import React from "react";
import { Link } from "react-router-dom";
import {
  Package,
  Truck,
  CreditCard,
  Users,
  Mail,
  DollarSign,
  Globe,
  Lock,
  Percent,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

interface SettingItem {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const settingItems: SettingItem[] = [
  {
    icon: Package,
    title: "General",
    description: "Mathematics began to develop at an accelerating pace",
    link: "/settings/general",
  },
  {
    icon: Truck,
    title: "Shipping",
    description: "The study of quantity starts with numbers",
    link: "/settings/shipping",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Mathematicians seek and use patterns",
    link: "/settings/payment",
  },
  {
    icon: Users,
    title: "Users",
    description: "Practical applications for what began",
    link: "/settings/users",
  },
  {
    icon: Mail,
    title: "Emails",
    description: "As evidenced by tallies found on bone",
    link: "/settings/emails",
  },
  {
    icon: DollarSign,
    title: "Currency",
    description: "Three leading types of definition of mathematics today",
    link: "/settings/currency",
  },
  {
    icon: Globe,
    title: "Languages",
    description: "An early definition of mathematics in terms",
    link: "/settings/languages",
  },
  {
    icon: Lock,
    title: "Privacy",
    description: "Mathematics arises from many different kinds of problems",
    link: "/settings/privacy",
  },
  {
    icon: Percent,
    title: "Taxes",
    description: "Most of the mathematical notation",
    link: "/settings/taxes",
  },
];

const SettingsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[{ name: "Home", path: "/home" }, { name: "Settings" }]}
      />
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingItems.map((item, index) => (
          <Link to={item.link} key={index} className="group">
            <div className="bg-white overflow-hidden shadow rounded-lg h-48 transform transition-transform group-hover:scale-105 group-hover:shadow-lg cursor-pointer">
              {" "}
              {/* Set height */}
              <div className="p-5 flex flex-col items-center">
                <div className="flex-shrink-0 mb-4">
                  <item.icon
                    className="h-8 w-8 text-gray-400 group-hover:text-indigo-600"
                    aria-hidden="true"
                  />{" "}
                  {/* Adjusted size and hover effect */}
                </div>
                <div className="text-center">
                  <dl>
                    <dt className="text-lg font-medium text-gray-500 group-hover:text-indigo-600">
                      {item.title}
                    </dt>{" "}
                    {/* Text size and hover effect */}
                    <dd className="mt-2 text-sm text-gray-900">
                      {item.description}
                    </dd>{" "}
                    {/* Description size */}
                  </dl>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;
