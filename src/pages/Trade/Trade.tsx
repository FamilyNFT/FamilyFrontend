import React from "react";
import Layout from "components/Layout";
import TradeCard from "components/TradeCard";

const Trade = () => {
  return (
    <Layout>
      <div className="md:flex items-end mt-5 hidden z-50">
        <h1 className="text-white text-[55px] md:text-[75px] pt-[10px] md:pt-0 clash-font font-semibold leading-[0.8] z-50">
          Trade
        </h1>
        <p className="text-white/70 text-[20px] font-semibold mt-5 md:mt-0 ml-0 md:ml-16 z-50">
          Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </p>
      </div>
      <div>
        <TradeCard id={1} />
        <TradeCard id={2} />
      </div>
    </Layout>
  );
};
export default Trade;
