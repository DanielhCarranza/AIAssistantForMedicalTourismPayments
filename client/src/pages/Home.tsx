import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConnectWalletStep from "@/components/ConnectWalletStep";
import PaymentConfirmationStep from "@/components/PaymentConfirmationStep";
import ProviderDashboard from "@/components/ProviderDashboard";
import { useWallet } from "@/hooks/useWallet";
import { Provider, Procedure } from "@/lib/mockData";

const Home = () => {
  const { walletConnected, walletAddress, connectWallet } = useWallet();
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
      setCurrentStep(1); // Return to main step
    }
  };

  const resetFlow = () => {
    setCurrentStep(1);
    setSelectedProvider(null);
    setSelectedProcedure(null);
    setShowPaymentSuccess(false);
  };

  const handlePaymentComplete = () => {
    setCurrentStep(4);
    setShowPaymentSuccess(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        walletConnected={walletConnected}
        walletAddress={walletAddress}
        showProviderDashboard={showProviderDashboard}
        toggleProviderDashboard={toggleProviderDashboard}
      />
      
      <main className="flex-grow">
        {showProviderDashboard ? (
          <ProviderDashboard />
        ) : (
          <>
            {currentStep === 1 && (
              <ConnectWalletStep 
                connectWallet={connectWallet} 
                onWalletConnected={handlePaymentComplete}
              />
            )}
            
            {currentStep === 4 && showPaymentSuccess && (
              <PaymentConfirmationStep 
                selectedProvider={selectedProvider || {
                  id: 1,
                  name: "Bangkok International Hospital",
                  location: "Bangkok, Thailand",
                  specialties: ["Orthopedics"],
                  rating: 4.9,
                  imageUrl: ""
                }}
                selectedProcedure={selectedProcedure || {
                  id: 1,
                  name: "Knee Replacement",
                  description: "Premium package",
                  cost: 8500,
                  duration: "5-day stay",
                  imageUrl: ""
                }}
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
