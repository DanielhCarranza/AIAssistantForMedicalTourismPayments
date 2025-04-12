interface WalletConnection {
  address: string;
  balance: number;
}

interface ExchangeRate {
  BTC: number;
  ETH: number;
  USDC: number;
}

interface TransactionResult {
  txHash: string;
  status: 'confirmed' | 'pending';
  timestamp: number;
}

// Mock Bluvo API integration
export const mockBluvoConnect = (): Promise<WalletConnection> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        address: '0xd914f98b2bCf169743698A28a75b67a24D1dFd8C',
        balance: 0.68
      });
    }, 1000);
  });
};

export const mockBluvoGetExchangeRates = (): Promise<ExchangeRate> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        BTC: 31459.50,
        ETH: 1809.25,
        USDC: 1
      });
    }, 500);
  });
};

export const mockBluvoSendPayment = (
  amount: number, 
  currency: string,
  recipientAddress: string
): Promise<TransactionResult> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        txHash: `tx_${Math.random().toString(36).substring(2, 15)}`,
        status: 'confirmed',
        timestamp: Date.now()
      });
    }, 2000);
  });
};
