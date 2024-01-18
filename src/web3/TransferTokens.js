const {
  Connection,
  PublicKey,
  Keypair,
  Transaction,
  sendAndConfirmTransaction,
} = require("@solana/web3.js");
const splToken = require("@solana/spl-token");

const base58 = require("bs58");

let connection = new Connection("https://api.mainnet-beta.solana.com");

let privateKeyString = "246,170,12,188,104,163,81,79,193,189,239,17,25,39,249,44,198,186,235,74,21,56,95,183,78,181,18,104,154,20,113,206,168,226,27,60,122,101,132,16,40,78,25,235,128,151,46,209,80,93,238,246,171,244,111,131,24,87,50,199,20,238,44,169";


// console.log(privateKeyString);

// let secret = new Uint8Array(base58.decode(privateKeyString));
// let senderWallet = Keypair.fromSecretKey(secret);
let senderWallet = loadWalletKey("CNFTr56CpwLA8jrAbFfvMn4MJznNCaYoKvTkTgMgfinL.json");
;

// let tokenMintAddress = new PublicKey("FSHsFHURzy2oxe8MYBM8rjHRvQ4GdDjukERRgjcsRCfe");
let tokenMintAddress = new PublicKey("FSHsFHURzy2oxe8MYBM8rjHRvQ4GdDjukERRgjcsRCfe");

let recipientWallet = new PublicKey(
  "pip8vrFDZQtsnDp1G8nAKKuZQcmyzyPymaQxntvB5uB"
);


function loadWalletKey(keypairFile) {
  // const fs = require("fs")
  return Keypair.fromSecretKey(
    // new Uint8Array(JSON.parse(fs.readFileSync(keypairFile).toString())),
  );
}


/**
 * To transfer a token from one wallet to another
 * @returns {Promise<{signature: string}>}
 */
async function transfer() {
  let my_token_account = await splToken.getOrCreateAssociatedTokenAccount(
    connection, 
    senderWallet, 
    tokenMintAddress, 
    senderWallet.publicKey, 
    false, 
    'finalized', 
    null,
    splToken.TOKEN_PROGRAM_ID, 
    splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
  )
  let reciver_token_account = await splToken.getOrCreateAssociatedTokenAccount(
    connection, 
    senderWallet, 
    tokenMintAddress, 
    recipientWallet, 
    false, 
    'finalized', 
    null, 
    splToken.TOKEN_PROGRAM_ID, 
    splToken.ASSOCIATED_TOKEN_PROGRAM_ID,
  );

  console.log('My token account public address: ' + my_token_account.address.toBase58());
  console.log('Reciver token account public address: ' + reciver_token_account.address.toBase58());
  try {
    let tx_hash = await transfer_tokens(
      senderWallet, 
      connection, 
      1, 
      reciver_token_account, 
      my_token_account,
      )
      return tx_hash
  } catch (error) {
    console.log(error)
  }
      
  console.log('Done!');

}

async function transfer_tokens(wallet, connection, amount, reciver_token_account, from_token_account) {
//if trx takes more when 60 sec to complete you will receive error here
const transfer_trx = await splToken.transfer(
  connection, 
  wallet, 
  from_token_account.address, 
  reciver_token_account.address, 
  wallet, 
  amount, 
  [wallet], 
  false, 
  splToken.TOKEN_PROGRAM_ID,
  )

console.log(transfer_trx)
return {
  signature: transfer_trx,
}

}
transfer()
// transfer_tokens(wallet, connection, 1, recipientWallet, tokenMintAddress)