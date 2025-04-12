import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  LockKeyhole, 
  CreditCard, 
  ShieldCheck, 
  Coins, 
  Lightbulb, 
  Wallet, 
  ArrowRight, 
  Globe, 
  Search, 
  Brain, 
  HeartPulse 
} from "lucide-react";

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
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-cyan-900 to-blue-950 min-h-[600px] flex flex-col justify-center items-center mb-24 px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1631815588090-d4bfec5b9882?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] opacity-15 bg-cover bg-center mix-blend-overlay"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Your Health Journey,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">We Handle the Payments</span>
            </h1>
            <p className="text-cyan-100 text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light">
              Let our AI assistant find you the best medical procedures abroad while you focus on your health. Simple, secure payments with lower fees.
            </p>
            
            <div className="relative max-w-2xl mx-auto p-6 my-8 bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-200/20">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-cyan-200 font-medium text-lg mb-2">MedTourPay AI Assistant</h3>
                  <p className="text-white/80 text-base">
                    "I've found 3 highly-rated clinics in Thailand offering your knee replacement procedure at 65% lower cost than domestic options. Would you like me to help you schedule a consultation?"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleConnect('crypto')}
              className="group h-14 px-8 md:px-10 bg-cyan-600 hover:bg-cyan-700 rounded-full text-white font-medium text-lg transition-all"
            >
              <span>Connect Crypto Wallet</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline" 
              onClick={() => handleConnect('traditional')}
              className="h-14 px-8 md:px-10 rounded-full border-cyan-400/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur font-medium text-lg"
            >
              <Globe className="mr-2 h-5 w-5" />
              <span>Traditional Payment</span>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-cyan-900/60 text-cyan-300 mb-3">
                <Search className="h-6 w-6" />
              </div>
              <p className="text-white text-sm md:text-base font-medium">AI-Powered Research</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-cyan-900/60 text-cyan-300 mb-3">
                <HeartPulse className="h-6 w-6" />
              </div>
              <p className="text-white text-sm md:text-base font-medium">Personalized Care Options</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-cyan-900/60 text-cyan-300 mb-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-white text-sm md:text-base font-medium">Secure Payment Processing</p>
            </div>
          </div>
        </div>
        
        {/* Wave SVG divider */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill="#f9fafb">
            <path fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,197.3C672,213,768,203,864,165.3C960,128,1056,64,1152,48C1248,32,1344,64,1392,80L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Features Section with consistent colors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our AI Works For You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform combines advanced AI with seamless payments to make your medical tourism journey simple and stress-free.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <CardContent className="p-6">
              <div className="text-cyan-600 mb-4">
                <Search className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Researches For You</h3>
              <p className="text-gray-600">Our AI assistant proactively finds the best medical procedures abroad based on your specific needs and budget.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <CardContent className="p-6">
              <div className="text-cyan-600 mb-4">
                <HeartPulse className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">We only partner with accredited hospitals and clinics to ensure you receive the highest standard of care.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
            <CardContent className="p-6">
              <div className="text-cyan-600 mb-4">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Payments</h3>
              <p className="text-gray-600">AI-powered payment recommendations help you save money with the best exchange rates and lowest fees.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-2xl border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
            <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
            <CardContent className="p-6">
              <div className="text-cyan-600 mb-4">
                <Wallet className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Options</h3>
              <p className="text-gray-600">Pay with cryptocurrency for lower fees or traditional methods - whatever works best for your situation.</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Testimonial section */}
        <div className="mt-24 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Why Patients Choose MedTourPay</h3>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic mb-4">
                "MedTourPay's AI found me a dental clinic in Mexico that saved me $8,000 compared to local options. The payment process was seamless, and I could focus on my treatment instead of worrying about money transfers."
              </p>
              <div className="font-medium text-cyan-700">Jessica L., California</div>
              <div className="text-sm text-gray-500">Dental Restoration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletStep;
