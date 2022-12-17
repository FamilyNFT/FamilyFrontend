import React, { useEffect, useState } from "react";

import Layout from "components/Layout";
import LoadingScreen from "components/LoadingScreen";
import Typography from "components/Typography";
import CenterCarousel from "components/CenterCarousel";
import { createFalse } from "typescript";

const Inventory = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <div className=" mt-5 z-50">
            <h1 className="text-white text-[5rem] md:text-[5rem]  pt-[10px] md:pt-0 clash-font font-semibold leading-[0.8] z-50 text-center md:text-left">
              Inventory
            </h1>
          </div>
          <div className="mt-8">
            <CenterCarousel
              className="w-full"
              customScales={[1, 0.85, 0.7, 0.55]}
              isInventory
            />
          </div>
        </Layout>
      )}
    </>
  );
};

export default Inventory;
