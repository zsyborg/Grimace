import * as React from "react";
import { TabPanel } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import { useTabs } from "react-headless-tabs";
const TheTabs = (fetchData:any) => {
    const [selectedTab, setSelectedTab] = useTabs([
        "mynft",
        "marketplace",
        "userprofile",
        "help",
      ]);
    
    
    return(

<div>
    <TabSelector
    isActive={selectedTab === "mynft"}
        onClick={() => setSelectedTab("mynft")}
        >
        My Precioush NFTsh!!
        </TabSelector>
        <TabSelector
        isActive={selectedTab === "marketplace"}
        onClick={() => setSelectedTab("marketplace")}
        >
        Le Market Place
        </TabSelector>
        <TabSelector
        isActive={selectedTab === "userprofile"}
        onClick={() => setSelectedTab("userprofile")}
        >
        Ma Profile
        </TabSelector>
        <TabSelector
        isActive={selectedTab === "help"}
        onClick={() => setSelectedTab("help")}
        >
        Wut!!??
        </TabSelector>
        <div className="p-4">
        <TabPanel hidden={selectedTab !== "mynft"}>
        {fetchData.map((nft:any) => (

<div className=''>
  
    { nft.content.files.map((u: any) => (
        <img src={u.uri} width={333} />
      ))
    }
   
    {/* <Animator active={active}>
<Text as='p' style={{ color: '#ddd' }}> */}

      <h2 className='mt-4 text-3xl'>{nft.content.metadata.name}</h2>
        {/* <br/> */}
      {/* <p>{nft.content.metadata.description}</p> */}
        {/* <br/> */}
      {/* <p>Group Address: {nft.grouping[0].group_value}</p>
        <br/> */}
      {/* <p>Tree Address: {nft.compression.tree}</p> */}
        {/* <br/> */}
      {/* <p>Leaf ID: {nft.compression.leaf_id}</p> */}
        {/* <br/> */}
      {/* <p>Mint Address / Asset ID: {nft.id}</p> */}
      <p>{nft.compression.compressed}</p>
    {/* Render other NFT properties */}
    {/* {console.log(nft.compression.compressed)} */}
{/* </Text>
</Animator> */}
<a onClick={() => setIsOpen(true)} id="bleep" className='text-gray-100 bg-sky-700 hover:bg-fuchsia-950 px-8 py-2 bleep'>
Flippin Sell !!!
</a>
<Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}>
<div className='relative flex flex-col justify-center overflow-hidden'>
<div className='grid flex-wrap grid-flow-col justify-center items-center grid-cols-4'>
<div className=''>
  <form className="space-y-6" action="#" method="POST">
  
  <input
        id="amount"
        name="amount"
        type="number"
        autoComplete="amount"
        required
        placeholder='Enter Amount'
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 w-full"
        />
        <a href='' className='bg-green-600 px-3 py-2 text-sm font-semibold'>List It</a>

  </form>
  <a href="#" className='text-black text-right' onClick={() => setIsOpen(false)}>Close</a>
  <button >Close Modal</button>
</div>
</div>
</div>
</Modal>
{

// ? nft.content.compression.compressed === 'false' : null
nft.compression.compressed === 'true' ? 

null

: (
<div className="whatever">cNFT !!!</div>

) 

}


    <br/>
        <br/>
          {/* <a onClick={() => handlePlay(nft.id,  nft.content.metadata.name.replace("MechCats #", ""))} id="bleep" className='text-gray-100 bg-sky-700 hover:bg-fuchsia-950 px-8 py-2 bleep'>
            Flippin Sell !!!
          </a> */}


          {/* <audio ref={audioRef} src="/sound/click.mp3" /> */}
        </div>
      ))}
        </TabPanel>
        <TabPanel hidden={selectedTab !== "marketplace"}>marketplace</TabPanel>
        <TabPanel hidden={selectedTab !== "userprofile"}>userprofile Members</TabPanel>
        <TabPanel hidden={selectedTab !== "help"}>help</TabPanel>
        </div>
    </div>    
    )
    
}

export default TheTabs