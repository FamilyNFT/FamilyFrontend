import Header from "../Header";

import curveImg from "assets/img/Dashboard/Vector 2.png";
import MarketImg from "assets/img/symbols/marketplace.png";
import TradeImg from "assets/img/symbols/trade.png";
import StoreImg from "assets/img/symbols/store.png";
import CreateImg from "assets/img/symbols/create.png";
import InventoryImg from "assets/img/symbols/inventory.png";

import { FC, PropsWithChildren } from "react";
type Props = PropsWithChildren & {
  isDashboard?: boolean;
};
const Layout: FC<Props> = ({ children, isDashboard = false }) => {
  return (
    <div className="bg-gradient-to-b from-[#0E0D0E] to-[#0E0E0E]  w-full min-h-screen z-[-1000]">
      <Header isDashboard={isDashboard} />
      <div>
        <img
          src={curveImg}
          alt="curve"
          className="absolute top-0 w-full h-full z-1 object-cover"
        />
      </div>
      <div className="px-[15px] md:px-[150px] w-full h-full py-5 relative">
        {children}
        <div className="md:hidden  flex justify-between rounded-3xl w-full h-[60px] bottom-nav py-2 px-10 border-[1px] border-[#A09D9D] mt-5">
          <a href="/marketplace" className="flex flex-col items-center">
            <img src={MarketImg} alt="market" className="w-[60%]" />
            <p className="text-[#707070]">Market</p>
          </a>
          <a href="/trade" className="flex flex-col items-center">
            <img src={TradeImg} alt="trade" className="w-[60%]" />
            <p className="text-[#707070]">Trade</p>
          </a>
          <a href="/store" className="flex flex-col items-center">
            <img src={StoreImg} alt="store" className="w-[60%]" />
            <p className="text-[#707070]">Store</p>
          </a>
          <a href="/inventory" className="flex flex-col items-center">
            <img src={InventoryImg} alt="inventory" className="w-[50%]" />
            <p className="text-[#707070]">Inventory</p>
          </a>
          <a href="/create" className="flex flex-col items-center">
            <img src={CreateImg} alt="create" className="w-[60%]" />
            <p className="text-[#707070]">Create</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Layout;
