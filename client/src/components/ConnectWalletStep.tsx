import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LockKeyhole, CreditCard, ShieldCheck, Coins, Lightbulb, Wallet, ArrowRight, Globe } from "lucide-react";

interface ConnectWalletStepProps {
  connectWallet: (method: 'crypto' | 'traditional') => void;
  onWalletConnected: () => void;
}

const ConnectWalletStep = ({ connectWallet, onWalletConnected }: ConnectWalletStepProps) => {
  const handleConnect = (method: 'crypto' | 'traditional') => {
    connectWallet(method);
    onWalletConnected();
  };

  return (
    <div className="w-full">
      {/* Apple-inspired Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 min-h-[560px] flex flex-col justify-center items-center mb-24 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631815588090-d4bfec5b9882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-500 leading-tight tracking-tight mb-4">
              The Future of Medical <br className="hidden md:block" />Tourism Payments
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light">
              Seamlessly pay for medical procedures abroad with cryptocurrency or traditional methods. Experience unmatched security, lower fees, and instant transfers.
            </p>
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleConnect('crypto')}
              className="group h-14 px-8 md:px-10 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-medium text-lg transition-all"
            >
              <span>Connect Crypto Wallet</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline" 
              onClick={() => handleConnect('traditional')}
              className="h-14 px-8 md:px-10 rounded-full border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm font-medium text-lg"
            >
              <Globe className="mr-2 h-5 w-5" />
              <span>Traditional Payment</span>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-900/40 text-indigo-300 mb-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-white text-sm md:text-base font-medium">Secure Blockchain Transactions</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-900/40 text-indigo-300 mb-3">
                <Coins className="h-6 w-6" />
              </div>
              <p className="text-white text-sm md:text-base font-medium">Lower Cross-Border Fees</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-900/40 text-indigo-300 mb-3">
                <Lightbulb className="h-6 w-6" />
              </div>
              <p className="text-white text-sm md:text-base font-medium">AI-Powered Recommendations</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section (kept and redesigned) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reimagine Healthcare Payments</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform brings together advanced technology and user-friendly design to make medical tourism payments effortless.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <CardContent className="p-6">
              <div className="text-indigo-600 mb-4">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure Transactions</h3>
              <p className="text-gray-600">Blockchain technology ensures your payments are secure and tamper-proof, with immutable records.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
            <CardContent className="p-6">
              <div className="text-indigo-600 mb-4">
                <Coins className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Currency</h3>
              <p className="text-gray-600">Pay in cryptocurrency or your local fiat currency with seamless conversion at optimal rates.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <CardContent className="p-6">
              <div className="text-indigo-600 mb-4">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Recommendations</h3>
              <p className="text-gray-600">AI-powered suggestions help you optimize for the best exchange rates and lowest transaction fees.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-pink-500 to-red-500"></div>
            <CardContent className="p-6">
              <div className="text-indigo-600 mb-4">
                <Wallet className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Low Fees</h3>
              <p className="text-gray-600">Competitive fees far lower than traditional cross-border payment methods, saving you money.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletStep;
