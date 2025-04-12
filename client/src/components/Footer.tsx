import { Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Clock className="h-6 w-6 text-primary" />
            <span className="font-medium text-gray-800">MedTourPay</span>
          </div>
          
          <div className="flex space-x-4 text-sm text-gray-600">
            <a href="#" className="hover:text-primary transition">About</a>
            <a href="#" className="hover:text-primary transition">FAQ</a>
            <a href="#" className="hover:text-primary transition">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition">Terms of Service</a>
            <a href="#" className="hover:text-primary transition">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MedTourPay. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-xs text-gray-500">Supported Cryptocurrencies:</div>
            <div className="flex items-center space-x-2">
              <span className="h-6 w-6 rounded-full flex items-center justify-center bg-yellow-100 text-yellow-600 text-xs font-medium">BTC</span>
              <span className="h-6 w-6 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 text-xs font-medium">ETH</span>
              <span className="h-6 w-6 rounded-full flex items-center justify-center bg-blue-100 text-blue-600 text-xs font-medium">USDC</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
