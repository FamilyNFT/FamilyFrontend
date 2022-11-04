import ERC725 from "@erc725/erc725.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import erc725schema from "@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json";

import Web3 from "web3";

import pathUtils from "utils/pathUtils";

import { useAppSelector, useAppDispatch } from "redux/hooks/redux-hooks";

import { setAuth } from "redux/auth/reducer";

const RPC_ENDPOINT = "https://rpc.l16.lukso.network";
const IPFS_GATEWAY = "https://2eff.lukso.dev/ipfs/";

const Header = (): JSX.Element => {
  const [wallet, setWallet] = useState<string>("");

  const auth = useAppSelector((state) => state.auth.account);
  const dispatch = useAppDispatch();

  const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);

  const config = { ipfsGateway: IPFS_GATEWAY };

  async function getProfile(address: string) {
    try {
      const profile = new ERC725(
        erc725schema as any,
        address,
        provider,
        config
      );
      return await profile.fetchData("LSP3Profile");
    } catch (error) {
      return alert(
        "Install UP browser and setUp universal profile to use the web app"
      );
    }
  }
  const connectWallet = async () => {
    const { ethereum } = window as any;
    if (!ethereum) {
      window.alert("You must install UP browser to use this website");
      return;
    }
    let web3 = new Web3(ethereum);

    const addr = await web3.eth.requestAccounts();
    let universalProfile = await getProfile(addr[0]);
    if (universalProfile) {
      setWallet(addr[0]);
      dispatch(setAuth(addr[0]));
    }
  };

  return (
    <>
      <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Family Mainnet
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                connectWallet();
              }}
            >
              {auth === null ? "Connect Wallet" : auth}
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {pathUtils.map((path, index) => (
                <li key={index}>
                  <NavLink
                    to={path.path}
                    className={
                      "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                    }
                    aria-current="page"
                  >
                    {path.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
