import Header from "../Header";

import curveImg from "assets/img/Dashboard/Vector 2.png";
import MarketImg from "assets/svg/navbar/market.svg";
import MarketImgActive from "assets/svg/navbar/market-active.svg";
import TradeImg from "assets/svg/navbar/trade.svg";
import TradeImgActive from "assets/svg/navbar/trade-active.svg";
import StoreImg from "assets/svg/navbar/store.svg";
import StoreImgActive from "assets/svg/navbar/store-active.svg";
import CreateImg from "assets/svg/navbar/create.svg";
import CreateImgActive from "assets/svg/navbar/create-active.svg";
import InventoryImg from "assets/svg/navbar/inventory.svg";
import InventoryImgActive from "assets/svg/navbar/inventory-active.svg";

import { FC, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
type Props = PropsWithChildren & {
  isDashboard?: boolean;
};
const Layout: FC<Props> = ({ children, isDashboard = false }) => {
  return (
    <>
      <div className="gradient-background  min-h-screen ">
        <Header isDashboard={isDashboard} />

        <div className="px-[1rem] md:px-[4rem]  h-full py-5  bg-fixed ">
          <div className="min-h-screen z-50 ">{children}</div>

          {/* placeholder div for gap at bottom content covered by mobile nav */}
          <div className="block md:hidden h-24 "></div>
          {/* mobile bottom nav */}
          <div className="block md:hidden fixed bottom-6  left-0 w-full  max-h-[90px] p-4 z-50 ">
            <div className="py-3 px-6 flex gap-2 justify-between bg-[#1A1A1A] border-2 border-white/10 rounded-full max-w-lg mx-auto">
              <NavLink
                to="/marketplace"
                className="flex flex-col items-center justify-center"
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? MarketImgActive : MarketImg}
                      alt="market"
                      className="w-8 "
                    />
                    <p
                      className={`${
                        isActive ? "text-white" : "text-white/50"
                      } leading-none pt-1.5 font-semibold text-md`}
                    >
                      Market
                    </p>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/trade"
                className="flex flex-col items-center justify-center"
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? TradeImgActive : TradeImg}
                      alt="market"
                      className="w-6"
                    />
                    <p
                      className={`${
                        isActive ? "text-white" : "text-white/50"
                      } leading-none pt-1.5 font-semibold`}
                    >
                      Trade
                    </p>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/store"
                className="flex flex-col items-center justify-center"
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? StoreImgActive : StoreImg}
                      alt="market"
                      className="h-[1.80rem]"
                    />
                    <p
                      className={`${
                        isActive ? "text-white" : "text-white/50"
                      } leading-none pt-1.5 font-semibold`}
                    >
                      Store
                    </p>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/inventory"
                className="flex flex-col items-center justify-center"
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? InventoryImgActive : InventoryImg}
                      alt="market"
                      className="w-9"
                    />
                    <p
                      className={`${
                        isActive ? "text-white" : "text-white/50"
                      } leading-none pt-2 font-semibold`}
                    >
                      Inventory
                    </p>
                  </>
                )}
              </NavLink>
              <NavLink
                to="/create"
                className="flex flex-col items-center justify-between"
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? CreateImgActive : CreateImg}
                      alt="market"
                      className="w-8"
                    />
                    <p
                      className={`${
                        isActive ? "text-white" : "text-white/50"
                      } leading-none pt-1 font-semibold`}
                    >
                      Create
                    </p>
                  </>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
