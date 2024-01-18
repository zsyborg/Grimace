import React from 'react'
import dynamic from 'next/dynamic';
import '@solana/web3.js';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import {
  PhantomWalletAdapter,
  LedgerWalletAdapter,
  SolflareWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
  TorusWalletAdapter
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl, Connection } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');
// https://rpc.helius.xyz/?api-key=4adfbec4-c143-499a-99b6-55d3638d20a4

import { useMemo } from "react";
import { ConnectionProvider, useWallet, WalletContext, WalletProvider, WalletProviderProps } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork, WalletAdapterEvents } from '@solana/wallet-adapter-base';
// import { useConnection } from '@solana/wallet-adapter-react';

// add this
// const WalletMultiButtonDynamic = dynamic(
//     async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
//     { ssr: false }
// );

export function ConnectWallet (
  props: Omit<WalletProviderProps, "wallets">
): JSX.Element {
  
  const network = WalletAdapterNetwork.Mainnet;
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter({ network }),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      
    ],
    [network]
  );



  return (
    <div className='container'>
    <div className='flex items-center align-middle justify-center flex-col'>
      {/* <p className='text-xl font-bold mt-3 text-center text-white'>Please connect your wallet to continue !!!</p> */}
      <div className='connectWalletBtn mt-5'>
    
    
    {/* <ConnectionProvider endpoint={endpoint}> */}
      {/* <WalletProvider wallets={wallets} autoConnect> */}
      <WalletProvider wallets={wallets} {...props}>
        <WalletModalProvider {...props} />
          {/* <WalletMultiButton /> */}
          {/* <WalletMultiButtonDynamic />  */}
        {/* </WalletModalProvider> */}
  </WalletProvider>
{/* </ConnectionProvider> */}

      </div>
    </div>
  </div>
  )
}

export default ConnectWallet