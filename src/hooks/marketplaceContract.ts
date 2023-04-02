import { ethers } from "ethers";
import abi from "../utils/abis/lsp8Marketplace.json";
import NFTabi from "../utils/abis/familynft.json";
import Web3 from "web3";
declare global {
  interface Window {
    // TODO: Complete type declaration
    ethereum?: any;
  }
}

const provider = window.ethereum
  ? new ethers.providers.Web3Provider(window.ethereum)
  : null;
export const signer = provider ? provider.getSigner() : null;

export const marketContractAddress =
  "0x6F263bCd831926B0F169F15a8eE39730d4e8067b";
export const useMarketplaceContract = () => {
  if (!provider) return null;
  const signer = provider.getSigner();
  return new ethers.Contract(marketContractAddress, abi.abi, signer);
};
export const useWeb3MarketplaceContract = () => {
  if (!window.ethereum) return null;
  const provider = new Web3(window.ethereum);
  return new provider.eth.Contract(abi.abi as any, marketContractAddress);
};
export const useNFTContract = (address: string) => {
  if (!provider) return null;
  const signer = provider.getSigner();
  return new ethers.Contract(address, NFTabi.abi, signer);
};
export const useWeb3NFTContract = (address: string) => {
  if (!window.ethereum) return null;
  const provider = new Web3(window.ethereum);
  return new provider.eth.Contract(NFTabi.abi as any, address);
};
