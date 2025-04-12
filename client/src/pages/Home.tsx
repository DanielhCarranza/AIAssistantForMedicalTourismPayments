import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConnectWalletStep from "@/components/ConnectWalletStep";
import SelectProviderStep from "@/components/SelectProviderStep";
import PaymentDetailsStep from "@/components/PaymentDetailsStep";
import PaymentConfirmationStep from "@/components/PaymentConfirmationStep";
import ProviderDashboard from "@/components/ProviderDashboard";
import { useWallet } from "@/hooks/useWallet";
import { Provider, Procedure } from "@/lib/mockData";

const Home = () => {
  const { walletConnected, walletAddress, walletBalance, connectWallet } = useWallet();
  const [currentStep, setCurrentStep] = useState(1);
  const [showProviderDashboard, setShowProviderDashboard] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);
  const [selectedProcedure, setSelectedProcedure] = useState<Procedure | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'crypto' | 'fiat'>('crypto');
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);

  const toggleProviderDashboard = () => {
    setShowProviderDashboard(!showProviderDashboard);
    if (!showProviderDashboard) {
      setCurrentStep(0); // Dashboard view
    } else {
      setCurrentStep(1); // Return to connect wallet step
    }
  };

  const resetFlow = () => {
    setCurrentStep(1);
    setSelectedProvider(null);
    setSelectedProcedure(null);
    setShowPaymentSuccess(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        showProviderDashboard={showProviderDashboard}
        toggleProviderDashboard={toggleProviderDashboard}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        {showProviderDashboard ? (
          <ProviderDashboard />
        ) : (
          <>
            {currentStep === 1 && (
              <ConnectWalletStep 
                connectWallet={connectWallet} 
                onWalletConnected={() => setCurrentStep(2)}
              />
            )}
            
            {currentStep === 2 && (
              <SelectProviderStep 
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
                selectedProcedure={selectedProcedure}
                setSelectedProcedure={setSelectedProcedure}
                onContinue={() => setCurrentStep(3)}
                onBack={() => {
                  setSelectedProvider(null);
                  setSelectedProcedure(null);
                }}
              />
            )}
            
            {currentStep === 3 && (
              <PaymentDetailsStep 
                selectedProvider={selectedProvider}
                selectedProcedure={selectedProcedure}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                onComplete={() => {
                  setCurrentStep(4);
                  setShowPaymentSuccess(true);
                }}
                onBack={() => setCurrentStep(2)}
              />
            )}
            
            {currentStep === 4 && (
              <PaymentConfirmationStep 
                selectedProvider={selectedProvider}
                selectedProcedure={selectedProcedure}
                paymentMethod={paymentMethod}
                onReturnHome={resetFlow}
              />
            )}
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
