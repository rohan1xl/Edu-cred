import React from 'react';
import { Wallet, LogOut, AlertCircle, Copy, ExternalLink } from 'lucide-react';
import { useAccount, useConnect, useDisconnect, useBalance, useChainId } from 'wagmi';
import { metaMask } from 'wagmi/connectors';

const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { data: balance } = useBalance({ address });

  const handleConnect = () => {
    connect({ connector: metaMask() });
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  const getNetworkName = (chainId: number) => {
    switch (chainId) {
      case 1: return 'Ethereum';
      case 11155111: return 'Sepolia';
      case 137: return 'Polygon';
      case 80001: return 'Mumbai';
      default: return 'Unknown';
    }
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center space-x-4">
        <div className="hidden md:block text-right">
          <div className="flex items-center space-x-2 text-sm text-slate-300">
            <span>{address.slice(0, 6)}...{address.slice(-4)}</span>
            <button
              onClick={copyAddress}
              className="text-slate-400 hover:text-yellow-400 transition-colors"
              title="Copy address"
            >
              <Copy className="w-3 h-3" />
            </button>
            <a
              href={`https://etherscan.io/address/${address}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-yellow-400 transition-colors"
              title="View on Etherscan"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="text-xs text-slate-400">
            {balance ? `${parseFloat(balance.formatted).toFixed(4)} ${balance.symbol}` : '0.0000 ETH'} • {getNetworkName(chainId)}
          </div>
        </div>
        <button
          onClick={() => disconnect()}
          className="flex items-center space-x-2 bg-slate-800 border border-slate-600 text-slate-300 px-4 py-2 rounded-lg hover:border-yellow-500 hover:text-yellow-400 transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden md:inline">Disconnect</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={isPending}
      className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200 shadow-lg hover:shadow-yellow-500/25 disabled:opacity-50"
    >
      {isPending ? (
        <>
          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
          <span>Connecting...</span>
        </>
      ) : (
        <>
          <Wallet className="w-4 h-4" />
          <span>Connect Wallet</span>
        </>
      )}
    </button>
  );
};

export default WalletConnect;