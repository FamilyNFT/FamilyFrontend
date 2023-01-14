import ERC725 from "@erc725/erc725.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
import erc725schema from "@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json";

import Web3 from "web3";
import logoImg1 from "assets/img/logo/logo-2.png";

import mailSvg from "assets/svg/mail.svg";
import familyLogo from "assets/svg/family-logo-small.svg";
import Button from "components/Button";
import pathUtils from "utils/pathUtils";

import { useAppSelector, useAppDispatch } from "redux/hooks/redux-hooks";
import { setAuth } from "redux/auth/reducer";

import { AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import Notifications from "../Notifications/Notifications";

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
    // let universalProfile = await getProfile(addr[0]);
    if (addr[0]) {
      setWallet(addr[0]);
      dispatch(setAuth(addr[0]));
    }
  };

  useEffect(() => {
    let urlPath = window.location.pathname;
    setCurrentPath(urlPath.replace("/", ""));
  }, []);
  const location = useLocation();
  return (
    <>
      <nav className="custom-nav py-2  w-full relative z-50 px-3 lg:px-12 xl:px-20 ">
        <div className="flex justify-between">
          {/* left */}

          <div>
            <Link to="/">
              <img className="max-w-[8rem] p-2" src={logoImg1} alt="logo"></img>
            </Link>
          </div>

          {/* center */}
          <div className="hidden xl:flex">
            <ul className="flex flex-col items-center px-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-3 2xl:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0">
              {pathUtils.map((path, index) =>
                path.title == null ? null : (
                  <li key={index}>
                    <NavLink to={path.path} aria-current="page">
                      <button
                        className={`text-[#B9B9B9] text-[16px] px-4  ${
                          currentPath === path.title?.toLowerCase()
                            ? "border-[1px]  flex justify-between items-center text-base px-[24px] h-[40px]   rounded-full font-nunito active-nav"
                            : "border-[1px] border-transparent flex justify-between items-center text-base px-[24px] h-[40px]  rounded-full font-nunito hover:bg-white/10 transition-all duration-200"
                        }`}
                      >
                        {path.title}
                      </button>
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* right */}
          <div className="flex gap-4 justify-between items-center">
            {/* social icons */}
            {!isDashboard && location.pathname !== "/inventory" && (
              <div className=" hidden lg:flex gap-2 2xl:gap-4">
                <a href="https://twitter.com/FamilyLYX">
                  <div className="rounded-[50%] w-[40px] h-[40px] social-icon flex justify-center items-center text-white/70 hover:text-white ">
                    <AiOutlineTwitter className="text-2xl transition-all duration-200" />
                  </div>
                </a>
                <a href="https://discord.gg/pvZb6JjRPZ">
                  <div className="rounded-[50%] w-[40px] h-[40px] social-icon flex justify-center items-center  text-white/70 hover:text-white ">
                    <BsDiscord className="text-2xl transition-all duration-200" />
                  </div>
                </a>
                <a href="https://discord.gg/pvZb6JjRPZ">
                  <div className="rounded-[50%] w-[40px] h-[40px] social-icon flex justify-center items-center text-white/70 hover:text-white ">
                    <FaTelegramPlane className="text-2xl  transition-all duration-200" />
                  </div>
                </a>
              </div>
            )}

            {/* connect wallet button */}

            {location.pathname === "/inventory" && auth && (
              <Notifications className="" />
            )}
            <Button
              type="button"
              text={
                auth === null
                  ? "Connect Wallet"
                  : auth.substr(0, 5) + "..." + auth.substr(-5)
              }
              imgSrc={auth !== null ? familyLogo : mailSvg}
              onClick={() => {
                connectWallet();
              }}
              className={`shadow-[inset_1px_1px_10px_rgba(255,255,255,0.40)] bg-white/10 tracking-wider archivo-font text-md ${
                location.pathname === "/inventory" && auth ? "px-3 sm:px-6" : ""
              }`}
              textClassName={` ${
                location.pathname === "/inventory" && auth
                  ? "hidden sm:block"
                  : ""
              }`}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
