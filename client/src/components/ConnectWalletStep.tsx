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
      <div className="relative overflow-hidden bg-white min-h-[600px] flex flex-col justify-center items-center mb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Your Health Journey,<br />
              <span className="text-primary">We Handle the Payments</span>
            </h1>
            <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light">
              Let our AI assistant find you the best medical procedures abroad while you focus on your health. Simple, secure payments with lower fees.
            </p>
            
            <div className="relative max-w-2xl mx-auto p-6 my-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="flex gap-4 items-start">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-primary font-medium text-lg mb-2">MedTourPay AI Assistant</h3>
                  <p className="text-gray-700 text-base">
                    "I've found 3 highly-rated clinics in Thailand offering your knee replacement procedure at 65% lower cost than domestic options. Would you like me to help you schedule a consultation?"
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              onClick={() => handleConnect('crypto')}
              className="group h-14 px-8 md:px-10 bg-primary hover:bg-primary/90 rounded-full text-white font-medium text-lg transition-all"
            >
              <span>Connect Crypto Wallet</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="outline" 
              onClick={() => handleConnect('traditional')}
              className="h-14 px-8 md:px-10 rounded-full border-gray-300 bg-white text-gray-800 hover:bg-gray-50 font-medium text-lg"
            >
              <Globe className="mr-2 h-5 w-5" />
              <span>Traditional Payment</span>
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                <Search className="h-6 w-6" />
              </div>
              <p className="text-gray-800 font-medium">AI-Powered Research</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                <HeartPulse className="h-6 w-6" />
              </div>
              <p className="text-gray-800 font-medium">Personalized Care Options</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-gray-800 font-medium">Secure Payment Processing</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section with elegant, minimal design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our AI Works For You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform combines advanced AI with seamless payments to make your medical tourism journey simple and stress-free.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <Search className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Researches For You</h3>
              <p className="text-gray-600 text-center">Our AI assistant proactively finds the best medical procedures abroad based on your specific needs and budget.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <HeartPulse className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Quality Assurance</h3>
              <p className="text-gray-600 text-center">We only partner with accredited hospitals and clinics to ensure you receive the highest standard of care.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <Lightbulb className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Smart Payments</h3>
              <p className="text-gray-600 text-center">AI-powered payment recommendations help you save money with the best exchange rates and lowest fees.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <Wallet className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">Flexible Options</h3>
              <p className="text-gray-600 text-center">Pay with cryptocurrency for lower fees or traditional methods - whatever works best for your situation.</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Testimonial section */}
        <div className="mt-24 bg-gray-50 rounded-xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Why Patients Choose MedTourPay</h3>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700 italic mb-4">
                "MedTourPay's AI found me a dental clinic in Mexico that saved me $8,000 compared to local options. The payment process was seamless, and I could focus on my treatment instead of worrying about money transfers."
              </p>
              <div className="font-medium text-primary">Jessica L., California</div>
              <div className="text-sm text-gray-500">Dental Restoration</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletStep;
