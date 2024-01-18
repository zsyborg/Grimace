// import fs from "fs";
import { Connection, Keypair, PublicKey, Signer, TransactionInstruction, TransactionMessage, VersionedTransaction } from "@solana/web3.js";


export function loadWalletKey(keypairFile:string): Keypair {
    return Keypair.fromSecretKey(
      new Uint8Array([246,170,12,188,104,163,81,79,193,189,239,17,25,39,249,44,198,186,235,74,21,56,95,183,78,181,18,104,154,20,113,206,168,226,27,60,122,101,132,16,40,78,25,235,128,151,46,209,80,93,238,246,171,244,111,131,24,87,50,199,20,238,44,169]),
    );
  }

export async function sendVersionedTx(
    connection: Connection, 
    instructions: TransactionInstruction[], 
    payer: PublicKey,
    signers: Signer[]){
    let latestBlockhash = await connection.getLatestBlockhash()
    const messageLegacy = new TransactionMessage({
        payerKey: payer,
        recentBlockhash: latestBlockhash.blockhash,
        instructions,
    }).compileToLegacyMessage();
    const transation = new VersionedTransaction(messageLegacy)
    transation.sign(signers);
    const signature = await connection.sendTransaction(transation);
    console.log("Payer " + payer + "\n");
    console.log("Signature " + signature + "\n");
    return signature;
}