import React, { useState } from "react";

import Layout from "components/Layout";
import LoadingScreen from "components/LoadingScreen";
import Typography from "components/Typography";
import CenterCarousel from "components/CenterCarousel";

const Inventory = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <React.Fragment>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Layout>
          <div>
            <div className="block md:flex items-end">
              <h1 className="text-white  pt-[10px] md:pt-0 text-[75px] clash-font font-semibold leading-[0.8] z-10">
                Inventory
              </h1>
              <Typography
                children="50 pieces"
                className="text-white pl-0 text-[20px] ml-0 md:ml-10"
              />
            </div>
            {isLoading && <LoadingScreen />}

            <div className="mt-[30px]">
              <CenterCarousel
                className="w-full"
                customScales={[1, 0.85, 0.7, 0.55]}
                isInventory
              />
            </div>
          </div>
        </Layout>
      )}
    </React.Fragment>
  );
};

export default Inventory;
