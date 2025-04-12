import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LockKeyhole, CreditCard, ShieldCheck, Coins, Lightbulb, Wallet } from "lucide-react";

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
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Medical Tourism Payment Platform</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Pay for your medical procedures abroad with ease. Connect your wallet to get started.</p>
      </div>
      
      <Card className="rounded-xl shadow-sm overflow-hidden p-8">
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Connect Your Wallet</h2>
              <p className="text-gray-600 mb-6">To begin making payments for your medical procedures, connect your cryptocurrency wallet or choose traditional payment.</p>
              
              <div className="space-y-4">
                <Button 
                  variant="default"
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  onClick={() => handleConnect('crypto')}
                >
                  <LockKeyhole className="mr-2 h-5 w-5" />
                  Connect Crypto Wallet
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-white text-sm text-gray-500">or</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => handleConnect('traditional')}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Use Traditional Payment
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1631815588090-d4bfec5b9882?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Cryptocurrency payment illustration" 
                className="rounded-lg h-full w-full object-cover" 
              />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="text-primary mb-3">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Secure Transactions</h3>
          <p className="text-gray-600 text-sm">Blockchain technology ensures your payments are secure and tamper-proof.</p>
        </Card>
        
        <Card className="p-6">
          <div className="text-primary mb-3">
            <Coins className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Multi-Currency</h3>
          <p className="text-gray-600 text-sm">Pay in cryptocurrency or your local fiat currency with seamless conversion.</p>
        </Card>
        
        <Card className="p-6">
          <div className="text-primary mb-3">
            <Lightbulb className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Smart Recommendations</h3>
          <p className="text-gray-600 text-sm">AI-powered suggestions help you optimize for the best exchange rates and fees.</p>
        </Card>
        
        <Card className="p-6">
          <div className="text-primary mb-3">
            <Wallet className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Low Fees</h3>
          <p className="text-gray-600 text-sm">Competitive fees far lower than traditional cross-border payment methods.</p>
        </Card>
      </div>
    </div>
  );
};

export default ConnectWalletStep;
