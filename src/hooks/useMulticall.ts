import web3 from "./useWeb3";
import abi from "../utils/abis/multicall.json";
const useMulticallContract = (contract: string) => {
  return new web3.eth.Contract(abi as any, contract);
};

export default useMulticallContract;
