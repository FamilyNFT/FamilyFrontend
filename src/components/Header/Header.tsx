import ERC725 from "@erc725/erc725.js";
import { NavLink } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import erc725schema from "@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json";

import Web3 from "web3";
import logoImg1 from "assets/img/logo/logo-2.png";
import FaceBookIcon from "assets/img/Dashboard/twitter.svg";
import DiscordIcon from "assets/img/Dashboard/discord.svg";
import TelegramIcon from "assets/img/Dashboard/instagram.svg";
import mailSvg from "assets/svg/mail.svg";
import Button from "components/Button";
import pathUtils from "utils/pathUtils";

import { useAppSelector, useAppDispatch } from "redux/hooks/redux-hooks";
import { setAuth } from "redux/auth/reducer";

const RPC_ENDPOINT = "https://rpc.l16.lukso.network";
const IPFS_GATEWAY = "https://2eff.lukso.dev/ipfs/";

type Props = {
  isDashboard?: boolean;
};

const Header: React.FC<Props> = ({ isDashboard = false }) => {
  const [wallet, setWallet] = useState<string>("");
  const [currentPath, setCurrentPath] = useState<string>("");

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

  useEffect(() => {
    let urlPath = window.location.pathname;
    setCurrentPath(urlPath.replace("/", ""));
  }, []);

  return (
    <>
      <nav className="custom-nav py-[10px]  w-full relative z-10 px-[10px] md:px-[100px]">
        <div className="container flex flex-wrap justify-between items-center mx-auto]">
          <NavLink to="/">
            <img className="w-[6em] h-[3em] " src={logoImg1} alt="logo"></img>
          </NavLink>
          <div className="flex items-center md:order-2">
            {!isDashboard && (
              <div className=" hidden md:flex">
                <NavLink to="https://twitter.com/FamilyLYX">
                  <div className="rounded-[50%] w-[40px] h-[40px] social-icon flex justify-center items-center">
                    <img
                      src={FaceBookIcon}
                      alt="faceBookIcon"
                      className="p-3"
                    ></img>
                  </div>
                </NavLink>
                <NavLink to="https://discord.gg/pvZb6JjRPZ">
                  <div className="rounded-[50%] w-[40px] h-[40px] social-icon flex justify-center items-center ml-2">
                    <img
                      src={DiscordIcon}
                      alt="discordIcon"
                      className="p-3"
                    ></img>
                  </div>
                </NavLink>
                {/* <NavLink to="https://www.instagram.com/familylukso/">
                  <div className="rounded-[50%] w-[56px] h-[56px] bg-[#272727] flex justify-center items-center ml-2">
                    {" "}
                    <img
                      src={TelegramIcon}
                      alt="telegramIcon"
                      className="p-2"
                    ></img>
                  </div>
                </NavLink> */}
              </div>
            )}

            <Button
              type="button"
              text={
                auth === null ? "Connect Wallet" : auth.substring(0, 10) + "..."
              }
              imgSrc={mailSvg}
              onClick={() => {
                connectWallet();
              }}
              className="ml-6 tracking-wider archivo-font text-[16px]"
            />
            {/* {!isDashboard && (
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
            )} */}
          </div>

          {!isDashboard && (
            <nav
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col items-center px-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                {pathUtils.map((path, index) =>
                  path.title == null ? null : (
                    <li key={index}>
                      <NavLink to={path.path} aria-current="page">
                        <button
                          className={`text-[#B9B9B9] text-[16px] px-4  ${
                            currentPath === path.title?.toLowerCase()
                              ? "border-[1px]  flex justify-between items-center text-base px-[24px] h-[40px]   rounded-full font-nunito active-nav"
                              : "border-[1px] border-transparent flex justify-between items-center text-base px-[24px] h-[40px]  rounded-full font-nunito"
                          }`}
                        >
                          {path.title}
                        </button>
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </nav>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
