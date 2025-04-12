import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Provider, Procedure } from "@/lib/mockData";

interface PaymentConfirmationStepProps {
  selectedProvider: Provider | null;
  selectedProcedure: Procedure | null;
  paymentMethod: 'crypto' | 'fiat';
  onReturnHome: () => void;
}

const PaymentConfirmationStep = ({ 
  selectedProvider, 
  selectedProcedure,
  paymentMethod,
  onReturnHome
}: PaymentConfirmationStepProps) => {
  if (!selectedProvider || !selectedProcedure) {
    return null;
  }

  const procedureCost = selectedProcedure.cost;
  const platformFee = procedureCost * 0.015; // 1.5%
  const totalCostUSD = paymentMethod === 'fiat' 
    ? procedureCost + platformFee + (procedureCost * 0.03)
    : procedureCost + platformFee;
  
  const cryptoAmount = paymentMethod === 'crypto' ? (totalCostUSD / 31459.50).toFixed(5) : '0';
  const txnId = `TXN-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}${String(new Date().getDate()).padStart(2, '0')}-${paymentMethod === 'crypto' ? 'BTC' : 'FIAT'}`;

  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card className="rounded-xl shadow-sm overflow-hidden p-8">
        <CardContent className="p-0">
          <div className="w-16 h-16 mx-auto bg-secondary-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-secondary" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Your payment has been processed and confirmed. The healthcare provider has been notified about your booking.</p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row justify-between mb-4 text-left">
              <div className="mb-4 md:mb-0">
                <div className="text-sm text-gray-500 mb-1">Procedure</div>
                <div className="font-medium text-gray-800">{selectedProcedure.name}</div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-1">Provider</div>
                <div className="font-medium text-gray-800">{selectedProvider.name}</div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between text-left">
              <div className="mb-4 md:mb-0">
                <div className="text-sm text-gray-500 mb-1">Amount Paid</div>
                <div className="font-medium text-gray-800">
                  ${totalCostUSD.toLocaleString()}
                  {paymentMethod === 'crypto' && ` (${cryptoAmount} BTC)`}
                </div>
              </div>
              
              <div>
                <div className="text-sm text-gray-500 mb-1">Transaction ID</div>
                <div className="font-medium text-gray-800">{txnId}</div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-medium text-primary-800 mb-2">Next Steps</h3>
            <ol className="space-y-2 text-sm text-primary-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-primary-200 text-primary-700 text-xs font-medium mr-2">1</span>
                <span>You will receive a confirmation email with all details about your procedure.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-primary-200 text-primary-700 text-xs font-medium mr-2">2</span>
                <span>The hospital will contact you within 24-48 hours to arrange the appointment.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 flex items-center justify-center rounded-full bg-primary-200 text-primary-700 text-xs font-medium mr-2">3</span>
                <span>Keep your transaction ID for reference in all communications.</span>
              </li>
            </ol>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={onReturnHome}
            >
              Return to Home
            </Button>
            
            <Button 
              variant="outline"
            >
              Download Receipt
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentConfirmationStep;
