"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = exports.Web3Provider = void 0;
var react_1 = require("react");
var wallet_adapter_base_1 = require("@solana/wallet-adapter-base");
var wallet_adapter_wallets_1 = require("@solana/wallet-adapter-wallets");
var web3_js_1 = require("@solana/web3.js");
var wallet_adapter_react_1 = require("@solana/wallet-adapter-react");
var wallet_adapter_react_ui_1 = require("@solana/wallet-adapter-react-ui");
var Web3Provider = function (_a) {
    var children = _a.children;
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    var endpoint = (0, react_1.useMemo)(function () { return (0, web3_js_1.clusterApiUrl)(wallet_adapter_base_1.WalletAdapterNetwork.Devnet); }, []);
    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
    // Only the wallets you configure here will be compiled into your application
    var wallets = (0, react_1.useMemo)(function () { return [
        new wallet_adapter_wallets_1.PhantomWalletAdapter(),
        new wallet_adapter_wallets_1.TorusWalletAdapter(),
        new wallet_adapter_wallets_1.LedgerWalletAdapter(),
    ]; }, []);
    return endpoint = { endpoint: endpoint } >
        wallets;
    {
        wallets;
    }
     > { children: children } < /WalletProvider>
        < /WalletModalProvider>
        < /ConnectionProvider>;
};
exports.Web3Provider = Web3Provider;
;
;
/**
 * Make sure to wrap the App with
 * ConnectionProvider, WalletProvider, and WalletModalProvider.
 *
 * If you have a lot of Providers already, you can combine them
 * into a single wrapper (i.e. Web3Provider) instead.
 */
var App = function () {
    return (
        <Web3Provider />);
};
exports.App = App;
var AppChild = function () {
    var wallet = (0, wallet_adapter_react_1.useWallet)().wallet;
    var setVisible = (0, wallet_adapter_react_ui_1.useWalletModal)().setVisible;
    // Display the connection modal
    var onRequestConnectWallet = function () {
        setVisible(true);
    };
    // Prompt user to connect wallet
    if (!wallet) {
        return onClick;
        {
            onRequestConnectWallet;
        }
         <WalletConnectButton/>;;
    }
    return < p >Wallet;
    successfully;
    connected </p>
         { wallet: wallet.publicKey.toString() }
};
;
;
