  ]
}
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> solana-install-init.exe
Error: Please specify the release to install for x86_64-pc-windows-msvc.  See --help for more

PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> solana config set .\mechacats.json
error: Found argument '.\mechacats.json' which wasn't expected, or isn't valid in this context

USAGE:
    solana.exe config set [FLAGS] [OPTIONS] <--url <URL_OR_MONIKER>|--ws <URL>|--keypair <KEYPAIR>|--commitment <COMMITMENT_LEVEL>>

For more information try --help
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> solana config get
Config File: C:\Users\hp\.config\solana\cli\config.yml
RPC URL: https://api.devnet.solana.com
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: .\CNFTr56CpwLA8jrAbFfvMn4MJznNCaYoKvTkTgMgfinL.json
Commitment: confirmed
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> ts-node .\createTree.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5860
      throw new SendTransactionError(
SendTransactionError: failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x0
    at Connection.sendEncodedTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5860:13)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Connection.sendRawTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5819:20)
    at async Connection.sendTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5767:14)
    at async sendVersionedTx (D:\Blockchain\Solana\video-tutorial-resources\cnfts\utils.ts:24:23)
    at async createTree (D:\Blockchain\Solana\video-tutorial-resources\cnfts\createTree.ts:45:16) {
  logs: [
    'Program 11111111111111111111111111111111 invoke [1]',
    'Create Account: account Address { address: D7qxfyLqsCEfxVKpyiKZHFwQme2snqNkwPAZJ5BTmaAo, base: None } already in use',
    'Program 11111111111111111111111111111111 failed: custom program error: 0x0'
  ]
}
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> ts-node .\createTree.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5860
      throw new SendTransactionError(
SendTransactionError: failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x0
    at Connection.sendEncodedTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5860:13)
    at async Connection.sendRawTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5819:20)
    at async Connection.sendTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5767:14)
    at async sendVersionedTx (D:\Blockchain\Solana\video-tutorial-resources\cnfts\utils.ts:24:23)
  logs: [
    'Program 11111111111111111111111111111111 invoke [1]',
    'Create Account: account Address { address: D7qxfyLqsCEfxVKpyiKZHFwQme2snqNkwPAZJ5BTmaAo, base: None } already in use',
  ]
}
Searching with 4 threads for:
        1 pubkey that starts with 'TREE' and ends with ''
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> solana-keygen grind --starts-with tre:1 
Searching with 4 threads for:
        1 pubkey that starts with 'tre' and ends with ''
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> solana-keygen grind --starts-with ja:1 
Searching with 4 threads for:
        1 pubkey that starts with 'ja' and ends with ''
Wrote keypair to jaSMZXkYpryPSVg9zELUa22nFXKXq9JU25QTh82HBui.json
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> ts-node .\createTree.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
3VmkTyuSg97qttPyn8dDaDpwcVntsZEjcCkMog3DwPUDkXjxurEiweEcRPfxu4TQqvY7jrWXk7CKp6bWENSe9jdC

Success!!!





PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> ts-node .\createCollectionNFT.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5860
            ^
SendTransactionError: failed to send transaction: Transaction simulation failed: Error processing Instruction 0: custom program error: 0x0
    at Connection.sendEncodedTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5860:13)
    at async Connection.sendRawTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5819:20)
    at async Connection.sendTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\connection.ts:5807:12)
    at async sendAndConfirmTransaction (D:\Blockchain\Solana\video-tutorial-resources\cnfts\node_modules\@solana\web3.js\src\utils\send-and-confirm-transaction.ts:35:21) {      
  logs: [
    'Program 11111111111111111111111111111111 invoke [1]',
    'Create Account: account Address { address: CNFTr56CpwLA8jrAbFfvMn4MJznNCaYoKvTkTgMgfinL, base: None } already in use',
    'Program 11111111111111111111111111111111 failed: custom program error: 0x0'
  ]
}
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> solana-keygen grind --starts-with cat:1
Searching with 4 threads for:
        1 pubkey that starts with 'cat' and ends with ''
Wrote keypair to cattNiXLsCNVEK4JzAqJmX5FQz92e1MGiftmNN9xpXz.json
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> ts-node .\createCollectionNFT.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
1
2
3
Successfull created NFT collection with collection address: cattNiXLsCNVEK4JzAqJmX5FQz92e1MGiftmNN9xpXz


Collection Success

PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> ts-node .\mintOneCNFT.ts
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
4xkR6g8dgYxdai3BZgVEywV3NuM4y6KMi5NLwr9sHDdbNChbPBLZkt19ndYC1uPvteSc8d6NJ8iiH5gsSczMGWx8
PS D:\Blockchain\Solana\video-tutorial-resources\cnfts> 

Mint Success