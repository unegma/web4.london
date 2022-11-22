import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

const RPC_URLS: { [chainId: number]: string } = {
  137: process.env.REACT_APP_INFURA_URL_POLYGON as string,
};

export const injected = new InjectedConnector({ supportedChainIds: [137] });

export const walletconnect = new WalletConnectConnector({
  rpc: { 137: RPC_URLS[137] },
  qrcode: true
});
