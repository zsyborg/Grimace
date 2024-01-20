
import { FC, Fragment, useState, useEffect, useMemo, type ReactElement, useRef, FormEvent } from 'react';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useRouter } from 'next/navigation';

import Image from 'next/image'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import web3, { PublicKey } from '@solana/web3.js';
import { GetProgramAccountsFilter, Connection, AccountInfo } from '@solana/web3.js';
import Link from "next/link";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Modal from 'react-modal';
// import { transferCNFT } from './web3/transferCNFT';
import axios from "axios";
import { animate, style } from 'motion';

import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'motion';
import { MongoClient } from 'mongodb';
import dbConnect from '../lib/dbConnect'
import clientPromise from '../lib/mongodb'
const MONGODB_URI='mongodb+srv://techzasha:ridYVCRZnC5FUDr1@dharti.ctgvhra.mongodb.net/?retryWrites=true&w=majority'




// import { createThemeStyle } from '@arwes/theme';
// import { Animator } from '@arwes/react-animator';
// import { Text } from '@arwes/react-text';
// import {
//   type AnimatorControl,
//   type AnimatorNode,
//   type AnimatorDuration,
//   type AnimatorSettingsPartial,
//   ANIMATOR_DEFAULT_DURATION,
//   ANIMATOR_DEFAULT_SETTINGS,
//   createAnimatorSystem
// } from '@arwes/animator';
// import { FrameSVGOctagon, FrameSVGCorners } from '@arwes/react-frames';
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';


// import { TheTabs } from '../components/TheTabs';
import { TabPanel } from "react-headless-tabs";
import { TabSelector } from "../components/TabSelector";
import { useTabs } from "react-headless-tabs";

import airdrop from '../final-1.json'


import App from './_app';
// import Displaynft from '../web3/GetNFT';
const connection = "https://rpc.helius.xyz/?api-key=4adfbec4-c143-499a-99b6-55d3638d20a4";
const connect = new Connection(connection);
const limit = 500;
const page = 1;
const before = "";
const after = "";
const sortBy = {
  "sortBy": "created",
  "sortDirection": "asc"
};

let asst = ""
let wlt = ""
let ident = ""




//   return (
//     <div>
//       {/* <NFTCard name={nft} /> */}
//       <p>{dt}</p>
//     </div>
//     )
//   // return dt;
// }

// airdrop.forEach((a: any) => {
//   console.log(a.wallet + "\n")
//   console.log(a.uri + "\n")
// });

export default function Home() {
  const [open, setOpen] = useState(true)
  const cancelButtonRef = useRef(null)
  const [selectedTab, setSelectedTab] = useTabs([

    "mynft",
    "marketplace",
    "userprofile",
    "help",
  ]);



  const [isOpen, setIsOpen] = useState(false)
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)'
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
      }
   }





  const audioRef = useRef();
  const { publicKey } = useWallet();
  
  const onClick = () => {};
  
  const [nfts, setNFTs] = useState([]);
  const [active, setActive] = useState(true);
  const [keyboard, setKeyboard] = useState()
    
    
    
  const [username, setUserName] = useState()
  const [wallet, setWallet] = useState()
  const  [score, setScore] = useState()


  // const navigate = useNavigate();
  const { push } = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  
  const [userData, setUserData] = useState([]);
  const [usernameExists, setUsernameExists] = useState(false);




  // useEffect(() => {
    
  //   }
  //   // setActive(active => !active)
  //   // const tid = setInterval(() => setActive(active => !active), 2000);
  //   return () => setActive(active);
  // }, []);
  
  const pushToGme = async () => {
    if (publicKey) {
      localStorage.setItem("wallet", publicKey.toBase58().toString())

      let data = {
        wallet: publicKey?.toBase58(),
        score: 0
      };
      
      let userdata = {
        wallet: publicKey?.toBase58().toString()
      }
      
    // console.log("Wallet: " + publicKey?.toBase58() + "& Username is: " + username)
    
    
    
    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: 'http://grimaceonsol.xyz/api/users',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : userdata
    };
    
    
    return axios.post('https://grimaceonsol.xyz/api/users/check', userdata)
    .then((response) => {
      console.log(JSON.stringify(response.data));
          if(response.data.success === false){
            console.log("Wallet Does not Exists")
            console.log(response)
            setIsLoading(false);
            
            return axios.post('http://grimaceonsol.xyz/api/users', data)
            .then((response) => {
              console.log(response)
              setIsLoading(false);
              push('http:/localhost:3000/game/qwerty.html');
            })
            .catch((error) => {
              console.log(error);
            });
            
            
          } else if(response.data.success === true) {
            console.log("Wallet Exists")
            push('http:/localhost:3000/game/qwerty.html');
              
          }
    })
    .catch((error) => {
      console.log(error);
    });


      // push('http:/localhost:3000/game/qwerty.html')
    } else {
    }
  }

pushToGme()




const fecthUser = async () => {
  try {
    
    if (publicKey) {
      console.log("Wallet Works " + publicKey.toBase58())

      // Check wallet and cross check with mongodb existence
      let data = {
        wallet: publicKey.toBase58(),
      };

          await axios.post('http://grimaceonsol.xyz/api/users/check', data)
              .then((response) => {
                
                localStorage.setItem("wallet", response.data.wallet)
                localStorage.setItem("score", response.data.score)
                // let usr = response.data.username
                let scr = response.data.score
                let wlt = response.data.wallet
                setWallet(wlt)
                setScore(scr)
                
                // console.log("Username is " + username)
                
              })
              .catch((error) => {
                console.log(error);
              });
      


    } else {
      
    }
  } catch (error) {
    console.log(error)
  }

}

fecthUser()




const handlePlay = (ast: any, id: any) => {
  // if (audioRef.current) {
  //   audioRef.current.play();
  // }

  let wlt = airdrop.filter(a => a.uri === id)
  console.log("Sent to: " + wlt[0].wallet)
  // transferCNFT(ast, wlt[0].wallet)

};




const handleChange = (event:any) => {
  // 👇 Get input value from "event"
  setUserName(event.target.value);
  localStorage.setItem("username",event.target.value)
  setUserName(event.target.value)
  
};

async function onSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
    const response = await fetch('http://grimaceonsol.xyz/api/users', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
}


function checkUserz() {
 
}



  // checkUserz()













const submitter = () => {
  setIsLoading(true);
  let data = {
    wallet: publicKey?.toBase58().toString(),
    score: 0
  };
  
  let userdata = {
    wallet: publicKey?.toBase58().toString()
  }
  
// console.log("Wallet: " + publicKey?.toBase58() + "& Username is: " + username)



let config = {
  method: 'POST',
  maxBodyLength: Infinity,
  url: 'http://grimaceonsol.xyz/api/users',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};



axios.post('http://grimaceonsol.xyz/api/users/check', userdata)
.then((response) => {
  
  // console.log(response.data)
  if(response.data.success === false){
    console.log("Wallet Does not Exists")
    console.log(response)
    setIsLoading(true);
    
    axios.post('http://grimaceonsol.xyz/api/users', data)
    .then((response) => {
      console.log(response)

      setIsLoading(false);
      // push('http:/localhost:3000/game/qwerty.html');
    })
    .catch((error) => {
      console.log(error);
    });
    
    
  } else if(response.data.success === true) {
    console.log("Wallet Exists")
    console.log("DEBUG" + userdata);
    push('http:/localhost:3000/game/qwerty.html');
      
  }

  // setIsLoading(false);

  
})
.catch((error) => {

  console.log(error);
});




  
}






const azerty = () => {
  setIsLoading(true);
  setUserName(username)
  
  let data = {
    wallet: publicKey?.toBase58().toString(),
    score: 0
  };
  localStorage.setItem("wallet", wallet)

let userdata = {
  wallet: publicKey?.toBase58()
}

// console.log("Wallet: " + publicKey?.toBase58() + "& Username is: " + username)



let config = {
  method: 'POST',
  maxBodyLength: Infinity,
  url: 'http://grimaceonsol.xyz/api/users',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};



axios.post('http://grimaceonsol.xyz/api/users/check', userdata)
.then((response) => {
  
  // console.log(response.data)
  if(response.data.success === false){
    console.log("Reached False Section")
    console.log(response)
    setIsLoading(true);
    
    axios.post('http://grimaceonsol.xyz/api/users', data)
    .then((response) => {
      console.log(response)

      // navigate("../../publichttp:/localhost:3000/game/qwerty");
      setIsLoading(false);
      push('http:/localhost:3000/game/azerty.html');
    })
    .catch((error) => {
      console.log(error);
    });
    
    
  } else if(response.data.success === true) {
    console.log("Reached True Section")
    push('http:/localhost:3000/game/azerty.html');
      
  }

  // setIsLoading(false);

  
})
.catch((error) => {

  console.log(error);
});  
}
















return (
  
 
  <main className='relative flex flex-col justify-center overflow-hidden h-full' style={{height:'100vh'}} >
         
                    
  <div className='flex grid-cols-6 flex-col gap-4 flex-wrap align-middle justify-items-center items-center justify-center text-center grim'>
  
    <img src='/logo1.png' width={800} className='img-fluid' />
    <img src='/welcome.png' width={800} className='img-fluid' />
  
     {/* <h2 className='m-0 p-0'>Solana's First Compressed NFT Marketplace</h2> */}
      <WalletMultiButton />
     </div>
    
  <div className='flex justify-center justify-items-center'>
    
     <p>
      {/* {publicKey ? <>Your address: {publicKey.toBase58()}</> : null} */}
    </p>


        
        {/* <TheTabs/> */}
      
        {/* {publicKey ? <><TheTabs nftdb={nfts}/></> : <span></span>} */}
        {publicKey ? <>
        <div className='text-center'>
        
        
        <TabSelector
    isActive={selectedTab === "mynft"}
        onClick={() => setSelectedTab("mynft")}
        >
        Register Profile
        </TabSelector>


        {/* <TabSelector
        isActive={selectedTab === "marketplace"}
        onClick={() => setSelectedTab("marketplace")}
        >
        Le Market Place
        </TabSelector> */}
        

        
        {/* <TabSelector
        isActive={selectedTab === "userprofile"}
        onClick={() => setSelectedTab("userprofile")}
        >
        My Profile
        </TabSelector> */}


        
        {/* <TabSelector
        isActive={selectedTab === "help"}
        onClick={() => setSelectedTab("help")}
        >
        How To Play?
        </TabSelector> */}


        <div className="p-4">
        <TabPanel hidden={selectedTab !== "mynft"}>
          <div className='grid grid-cols-1 justify-items-center justify-center text-center gap-4'>
        

<div className=''>
  
<div className="form-floating mb-3">
  <form onSubmit={submitter}>

  {/* <label for="username">Enter your username</label><br/> */}
  {/* <input
    type="text"
    className="form-control text-indigo-800"
    name="username"
    id="username"
    placeholder="Enter your username"
    onChange={handleChange}
    value={(username)}
    onLoad={username}
    /> */}
    <br/>
    <input
    type="text"
    className="form-control text-indigo-800"
    name="wallet"
    id="wallet"
    placeholder={publicKey}
    disabled
    value={publicKey}
    />
<br/>
<br/>


    {/* <button type='submit' className='text-gray-100 bg-sky-700 hover:bg-yellow-800 px-11 py-2 rounded-2xl bleep'>
    Play
    </button> */}
              <a className='btn btn-primary rounded-full p-4 bg-indigo-800' href='http:/localhost:3000/game/qwerty.html'>Play</a>

    


{isLoading ? 

  <div className="w-16 h-16 rounded-full border-t-lime-400 animate-spin" style={{marginLeft: '4.4rem', marginBottom: '2rem'}}>

  </div>

: null}
{/* <a href='#' onClick={submitter} id="bleep" className='text-gray-100 bg-sky-700 hover:bg-fuchsia-950 px-8 py-2 border border-indigo-900 border-5'>
Play QWERTY
</a>
<a href='#' onClick={azerty} id="bleep" className='text-gray-100 bg-sky-700 hover:bg-fuchsia-950 px-8 py-2 border border-indigo-900 border-5'>
Play AZERTY
</a> */}



    </form>
</div>

 </div>

<div>
</div>


      {/* ))} */}
      </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "marketplace"}>
        <div className='grid grid-cols-12 gap-4'>
          MarketPlace
        </div>

        </TabPanel>
        <TabPanel hidden={selectedTab !== "userprofile"}>
        <div className='grid grid-cols-1 justify-center gap-4'>
          <div className='text-center'>
            <h2>Welcome {publicKey.toBase58()} !</h2>
            
          </div>
          <div className='text-center'>
            <h2 className='text-2xl'>Own your Profile</h2>
              <form className='grid grid-cols-1 grid-flow-row'>  
              <div className='my-3'>

                  <input type="text" className="form-control bg-black border-solid border-2 border-orange-500 rounded-tr-xl rounded-bl-xl" name="inputName" id="inputName" placeholder="Enter your Username" />
              
              </div>
              
              <div>
                  <input type="text" className="form-control rounded-tr-xl rounded-bl-xl bg-black border-solid border-2 border-orange-500" name="wallet" id="wallet" placeholder={publicKey.toBase58()} disabled />
              </div>
                  {/* <button type="submit" className="btn btn-primary">Action</button> */}
              </form>
            
          </div>
        </div>
        </TabPanel>
        <TabPanel hidden={selectedTab !== "help"}>help</TabPanel>
        </div>
    </div>    
    </> : <span></span>}
     
        </div>

{/* 
<div class="container-fluid">
  <div class="row">
    <div
      class="col-12"
    >
  <h1 className=' text-indigo-600'>Leaderboard</h1>
    
    </div>
    
    
  </div>
</div> */}


    </main>
  )
}