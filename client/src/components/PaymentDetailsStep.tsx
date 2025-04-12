import { useState } from "react";
import { 
  Card, 
  CardContent,
  CardHeader 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CircleHelp, Clock } from "lucide-react";
import { Provider, Procedure } from "@/lib/mockData";

interface PaymentDetailsStepProps {
  selectedProvider: Provider | null;
  selectedProcedure: Procedure | null;
  paymentMethod: 'crypto' | 'fiat';
  setPaymentMethod: (method: 'crypto' | 'fiat') => void;
  onComplete: () => void;
  onBack: () => void;
}

const cryptocurrencies = [
  { id: 'btc', name: 'Bitcoin', symbol: 'BTC', rate: 31459.50, color: 'yellow' },
  { id: 'eth', name: 'Ethereum', symbol: 'ETH', rate: 1809.25, color: 'indigo' },
  { id: 'usdc', name: 'USDC', symbol: 'USDC', rate: 1, color: 'blue' }
];

const PaymentDetailsStep = ({ 
  selectedProvider, 
  selectedProcedure,
  paymentMethod,
  setPaymentMethod,
  onComplete,
  onBack
}: PaymentDetailsStepProps) => {
  const [selectedCrypto, setSelectedCrypto] = useState('btc');

  if (!selectedProvider || !selectedProcedure) {
    return null;
  }

  const procedureCost = selectedProcedure.cost;
  const platformFee = procedureCost * 0.015; // 1.5%
  const internationalFee = paymentMethod === 'fiat' ? procedureCost * 0.03 : 0; // 3% for fiat
  const totalCostUSD = procedureCost + platformFee + internationalFee;
  
  const selectedCryptoObj = cryptocurrencies.find(c => c.id === selectedCrypto);
  const cryptoEquivalent = selectedCryptoObj ? (totalCostUSD / selectedCryptoObj.rate).toFixed(5) : '0';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
        
        <div className="bg-gray-100 rounded-full px-4 py-1 flex items-center space-x-2 text-sm">
          <Clock className="h-4 w-4 text-primary" />
          <span>Step 3 of 4</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="rounded-xl shadow-sm overflow-hidden mb-6">
            <CardHeader className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Payment Method</h3>
              <p className="text-gray-600 text-sm mt-1">Select how you would like to pay</p>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="space-y-4">
                <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'crypto' | 'fiat')}>
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="crypto" id="crypto" />
                    <div>
                      <Label htmlFor="crypto" className="text-gray-800 font-medium">Cryptocurrency</Label>
                      <p className="text-gray-500 text-sm">Pay using Bitcoin, Ethereum, or USDC with lower fees</p>
                    </div>
                  </div>
                  
                  {paymentMethod === 'crypto' && (
                    <div className="ml-7 mt-3 grid grid-cols-3 gap-3">
                      {cryptocurrencies.map((crypto) => (
                        <div 
                          key={crypto.id}
                          className={`relative border rounded-lg p-3 flex flex-col items-center cursor-pointer hover:bg-gray-50 ${
                            selectedCrypto === crypto.id ? `border-primary bg-primary-50` : ''
                          }`}
                          onClick={() => setSelectedCrypto(crypto.id)}
                        >
                          <div className={`flex items-center justify-center h-10 w-10 rounded-full bg-${crypto.color}-100 mb-2`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-${crypto.color}-600`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-gray-800">{crypto.name}</span>
                          <div className="text-xs text-gray-500 mt-1">1 {crypto.symbol} = ${crypto.rate.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-3">
                    <RadioGroupItem value="fiat" id="fiat" />
                    <div>
                      <Label htmlFor="fiat" className="text-gray-800 font-medium">Credit Card or Bank Transfer</Label>
                      <p className="text-gray-500 text-sm">Pay with Visa, Mastercard, or direct bank transfer</p>
                    </div>
                  </div>
                  
                  {paymentMethod === 'fiat' && (
                    <div className="ml-7 mt-3 space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="card-number" className="text-sm font-medium text-gray-700 mb-1">Card Number</Label>
                          <Input id="card-number" placeholder="1234 5678 9012 3456" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry" className="text-sm font-medium text-gray-700 mb-1">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          
                          <div>
                            <Label htmlFor="cvc" className="text-sm font-medium text-gray-700 mb-1">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">Name on Card</Label>
                        <Input id="name" placeholder="John Smith" />
                      </div>
                    </div>
                  )}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-100">
            <div className="flex items-start">
              <CircleHelp className="h-5 w-5 text-primary flex-shrink-0" />
              <div className="ml-3">
                <h3 className="text-sm font-medium text-primary-800">AI Payment Recommendation</h3>
                <div className="mt-1 text-sm text-primary-700">
                  <p>Based on current exchange rates, paying with <strong>Bitcoin</strong> will save you approximately 1.2% in fees compared to credit card. BTC price has been stable over the last 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Card className="rounded-xl shadow-sm overflow-hidden sticky top-6">
            <CardHeader className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
            </CardHeader>
            
            <CardContent className="p-6">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{selectedProcedure.name}</span>
              </div>
              <div className="text-sm text-gray-600 mb-4">at {selectedProvider.name}</div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Procedure Cost</span>
                  <span className="text-gray-800">${procedureCost.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Platform Fee (1.5%)</span>
                  <span className="text-gray-800">${platformFee.toLocaleString()}</span>
                </div>
                
                {paymentMethod === 'fiat' && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">International Payment Fee (3%)</span>
                    <span className="text-gray-800">${internationalFee.toLocaleString()}</span>
                  </div>
                )}
                
                <div className="border-t border-gray-200 my-4"></div>
                
                <div className="flex justify-between font-medium">
                  <span>Total (USD)</span>
                  <span>${totalCostUSD.toLocaleString()}</span>
                </div>
                
                {paymentMethod === 'crypto' && (
                  <div className="flex justify-between text-sm text-accent-600">
                    <span>{selectedCryptoObj?.symbol} Equivalent</span>
                    <span>≈ {cryptoEquivalent} {selectedCryptoObj?.symbol}</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <Button 
                  className="w-full"
                  onClick={onComplete}
                >
                  Complete Payment
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={onBack}
                >
                  Back to Procedure Selection
                </Button>
              </div>
              
              <div className="mt-6 flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-500">Secure payment processing</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetailsStep;
