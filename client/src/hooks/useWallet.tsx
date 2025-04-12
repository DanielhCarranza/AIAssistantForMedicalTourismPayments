import { useState } from 'react';
import { mockBluvoConnect } from '@/lib/bluvoApi';

export const useWallet = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState(0);

  const connectWallet = async (method: 'crypto' | 'traditional') => {
    try {
      if (method === 'crypto') {
        const { address, balance } = await mockBluvoConnect();
        setWalletAddress(address);
        setWalletBalance(balance);
      } else {
        setWalletAddress('Traditional Payment');
        setWalletBalance(0);
      }
      setWalletConnected(true);
      return true;
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      return false;
    }
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress('');
    setWalletBalance(0);
  };

  return {
    walletConnected,
    walletAddress,
    walletBalance,
    connectWallet,
    disconnectWallet
  };
};
