import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import { ConnectionProvider } from "@solana/wallet-adapter-react";
import { FC, Fragment, useState, useEffect, type ReactElement, useRef } from 'react';

const endpoint = "https://rpc.helius.xyz/?api-key=4adfbec4-c143-499a-99b6-55d3638d20a4"
import {convertAniBinaryToCSS} from 'ani-cursor';

import '@/styles/globals.css'

const ConnectWallet = dynamic(
  () => import("../web3/WalletProvider"),
  {
    ssr: false,
  }
);


// applyCursor("#main", "https://archive.org/cors/tucows_169906_Pizza_cursor/pizza.ani");

export default function App({ Component, pageProps }: AppProps) {
  async function applyCursor(selector, aniUrl) {
    const response = await fetch(aniUrl);
    const data = new Uint8Array(await response.arrayBuffer());
  
    const style = document.createElement('style');
    style.innerText = convertAniBinaryToCSS(selector, data);
  
    document.head.appendChild(style);
  }
  useEffect(() => {
    
    applyCursor("#main", "https://www.agoracnft.io/linkselect.ani")
     })
    // },[])

  return (
    <div className='bg-indigo-900 mainbg' style={{'height':'100vh'}} id='main'>

    <ConnectionProvider endpoint={endpoint}>
    <ConnectWallet>
      <Component {...pageProps} />
    </ConnectWallet>
  </ConnectionProvider>
    </div>
  )
}
