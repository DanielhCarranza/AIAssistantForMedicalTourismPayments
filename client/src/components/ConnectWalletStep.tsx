import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShieldCheck, 
  Wallet, 
  ArrowRight, 
  Globe, 
  Search, 
  Brain, 
  HeartPulse,
  CheckCircle,
  ChevronDown,
  Stethoscope,
  DollarSign
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface ConnectWalletStepProps {
  connectWallet: (method: 'crypto' | 'traditional') => void;
  onWalletConnected: () => void;
}

const ConnectWalletStep = ({ connectWallet, onWalletConnected }: ConnectWalletStepProps) => {
  const [procedure, setProcedure] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  
  const handleConnect = (method: 'crypto' | 'traditional') => {
    connectWallet(method);
    onWalletConnected();
  };

  const handleSearch = () => {
    if (procedure.trim()) {
      setShowResults(true);
    }
  };

  const handleProceed = () => {
    setShowWalletOptions(true);
    // Scroll to the wallet options section
    setTimeout(() => {
      document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
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
              Find affordable medical procedures abroad and pay seamlessly with our AI-powered platform.
            </p>

            {/* Start with a search box to find procedures */}
            <div className="max-w-2xl mx-auto mt-10 p-1 bg-white rounded-full shadow-lg">
              <div className="flex items-center">
                <div className="pl-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <Input 
                  className="rounded-full border-0 focus-visible:ring-0 px-4 py-6 text-lg placeholder:text-gray-400"
                  placeholder="What medical procedure are you looking for?"
                  value={procedure}
                  onChange={(e) => setProcedure(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                />
                <Button 
                  className="m-1 rounded-full px-6 py-6 bg-primary hover:bg-primary/90"
                  onClick={handleSearch}
                >
                  <span className="hidden md:inline mr-2">Find Options</span>
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {showResults && (
              <div className="max-w-3xl mx-auto mt-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Best Matches for "{procedure}"</h2>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Brain className="h-4 w-4 mr-1 text-primary" />
                    <span>AI-Powered Results</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Card className="overflow-hidden border-0 shadow-md">
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <Stethoscope className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-gray-900">Premium {procedure}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="font-medium text-primary">Bangkok International Hospital</span>
                            <span className="mx-2">•</span>
                            <span>Bangkok, Thailand</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">$8,500</div>
                        <div className="text-sm text-green-600 flex items-center justify-end">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span>65% cheaper than U.S. average</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JCI Accredited</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">English Speaking Staff</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">4.9 Star Rating</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">200+ Procedures/Year</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        This premium package includes the procedure, 5-night hospital stay, all medication, and follow-up consultations. The hospital specializes in orthopedic procedures with state-of-the-art facilities.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                          <span>Pay in crypto for an additional 3.5% discount</span>
                        </div>
                        <Button 
                          onClick={handleProceed}
                          className="rounded-full"
                        >
                          Proceed to Payment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="overflow-hidden border border-gray-200">
                    <div className="flex items-center justify-between p-6 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          <Stethoscope className="h-6 w-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">Standard {procedure}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <span>Seoul Medical Center</span>
                            <span className="mx-2">•</span>
                            <span>Seoul, South Korea</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-gray-900">$7,200</div>
                        <div className="text-sm text-green-600 flex items-center justify-end">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span>70% cheaper than U.S. average</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-gray-600 text-sm mb-4">
                        Standard package with 3-night hospital stay. Additional fees may apply for extended stay or special care.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={handleProceed}
                        className="w-full rounded-full"
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center p-4">
                    <Button variant="ghost" className="text-gray-500">
                      <span>View More Options</span>
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {!showResults && (
              <div className="relative max-w-2xl mx-auto p-6 my-12 bg-white rounded-2xl border border-gray-200 shadow-lg">
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-primary font-medium text-lg mb-2">MedTourPay AI Assistant</h3>
                    <p className="text-gray-700 text-base">
                      "I can help you find the best medical procedures abroad at a fraction of the cost. What procedure are you interested in? I'll research the top-rated clinics, compare prices, and help with payment options."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {showWalletOptions && (
            <div id="payment-section" className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How would you like to pay?</h2>
              <p className="text-gray-600 mb-8">
                Select your preferred payment method. Crypto payments offer lower fees and faster processing.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Card className="border-2 border-primary hover:shadow-lg transition-all cursor-pointer" onClick={() => handleConnect('crypto')}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Wallet className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Crypto Payment</h3>
                    <p className="text-gray-600 mb-4">Pay with cryptocurrency for 3-5% lower fees and instant transfers</p>
                    <Button className="rounded-full mt-auto">
                      Connect Crypto Wallet
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="border hover:shadow-lg transition-all cursor-pointer" onClick={() => handleConnect('traditional')}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                      <Globe className="h-8 w-8 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Traditional Payment</h3>
                    <p className="text-gray-600 mb-4">Pay with credit card, bank transfer, or other conventional methods</p>
                    <Button variant="outline" className="rounded-full mt-auto">
                      Use Traditional Payment
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          
          {!showResults && !showWalletOptions && (
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <p className="text-gray-800 font-medium">Find Treatment Options</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <p className="text-gray-800 font-medium">Compare Quality & Cost</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-3">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <p className="text-gray-800 font-medium">Secure Easy Payment</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Features Section with elegant, minimal design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How MedTourPay Works For You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Our platform combines advanced AI with seamless payments to make your medical tourism journey simple and stress-free.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <Search className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">1. Tell Us What You Need</h3>
              <p className="text-gray-600 text-center">Describe the procedure you're looking for, and our AI will start researching options for you.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <HeartPulse className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">2. Review Options</h3>
              <p className="text-gray-600 text-center">Compare quality-verified hospitals and clinics with transparent pricing and reviews.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <Wallet className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">3. Choose Payment</h3>
              <p className="text-gray-600 text-center">Select your preferred payment method - cryptocurrency for lower fees or traditional options.</p>
            </CardContent>
          </Card>
          
          <Card className="rounded-xl border-0 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="h-1 bg-primary w-1/3 mx-auto mt-0 rounded-b-full"></div>
            <CardContent className="p-6">
              <div className="text-primary mb-4 flex justify-center">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">4. Secure Booking</h3>
              <p className="text-gray-600 text-center">We handle the payment and booking confirmation, giving you peace of mind for your procedure.</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Testimonial section */}
        <div className="mt-24 bg-gray-50 rounded-xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Why Patients Choose MedTourPay</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">JL</span>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "MedTourPay's AI found me a dental clinic in Mexico that saved me $8,000 compared to local options. The payment process was seamless, and I could focus on my treatment instead of worrying about money transfers."
                </p>
                <div className="font-medium text-primary">Jessica L., California</div>
                <div className="text-sm text-gray-500">Dental Restoration</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">RK</span>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "After getting a $45,000 quote for knee surgery in the US, I found a top hospital in Thailand through MedTourPay for just $12,500. The AI assistant helped me compare options, and the crypto payment saved me on international fees."
                </p>
                <div className="font-medium text-primary">Robert K., New York</div>
                <div className="text-sm text-gray-500">Knee Replacement Surgery</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">MJ</span>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "I was hesitant about medical tourism until MedTourPay showed me JCI-accredited hospitals in South Korea. Saved 65% on my hip replacement, and the platform handled everything from finding the hospital to paying with crypto."
                </p>
                <div className="font-medium text-primary">Michael J., Texas</div>
                <div className="text-sm text-gray-500">Hip Replacement</div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">SP</span>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "As someone without insurance, I thought I'd never afford LASIK. MedTourPay found me options in Colombia that were 70% cheaper than US prices, with the same equipment and trained surgeons. Cryptocurrency payment was fast and simple."
                </p>
                <div className="font-medium text-primary">Sarah P., Florida</div>
                <div className="text-sm text-gray-500">LASIK Eye Surgery</div>
              </div>
            </div>
            
            <div className="mt-10">
              <Button variant="outline" className="rounded-full">
                Read More Success Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletStep;