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
const provider = new ethers.providers.Web3Provider(window.ethereum);
export const signer = provider.getSigner();

export const marketContractAddress =
  "0x6F263bCd831926B0F169F15a8eE39730d4e8067b";
export const useMarketplaceContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(marketContractAddress, abi.abi, signer);
};
export const useWeb3MarketplaceContract = () => {
  const provider = new Web3(window.ethereum);
  return new provider.eth.Contract(abi.abi as any, marketContractAddress);
};
export const useNFTContract = (address: string) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(address, NFTabi.abi, signer);
};
export const useWeb3NFTContract = (address: string) => {
  const provider = new Web3(window.ethereum);
  return new provider.eth.Contract(NFTabi.abi as any, address);
};
