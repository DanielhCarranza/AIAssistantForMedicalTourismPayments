import { Clock, Search, HeartPulse } from "lucide-react";

interface HeaderProps {
  walletConnected: boolean;
  walletAddress: string;
  showProviderDashboard: boolean;
  toggleProviderDashboard: () => void;
}

const Header = ({ 
  walletConnected, 
  walletAddress, 
  showProviderDashboard, 
  toggleProviderDashboard 
}: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <HeartPulse className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-gray-800">MedTourPay</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-700 hover:text-primary">How It Works</a>
            <a href="#" className="text-gray-700 hover:text-primary">Find Procedures</a>
            <a href="#" className="text-gray-700 hover:text-primary">About Us</a>
          </div>
          
          <div className="flex items-center">
            {!showProviderDashboard && (
              <button className="mr-3 px-3 py-2 text-sm rounded-full bg-gray-100 hover:bg-gray-200 flex items-center">
                <Search className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-gray-700">Find Procedure</span>
              </button>
            )}
            
            <button 
              onClick={toggleProviderDashboard} 
              className="px-4 py-2 text-sm rounded-full border border-gray-300 hover:bg-gray-50">
              {showProviderDashboard ? 'Patient View' : 'Provider Dashboard'}
            </button>
            
            {walletConnected && (
              <div className="ml-4 flex items-center py-1 px-3 bg-primary/10 text-sm rounded-full">
                <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
                <span className="text-primary font-medium">{walletAddress.substring(0, 6) + '...' + walletAddress.substring(walletAddress.length - 4)}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
