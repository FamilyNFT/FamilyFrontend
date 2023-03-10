import React, { useCallback, useEffect, useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import InventoryCard from "components/Card/InventoryCard";
import MarketplaceCard from "components/Card/MarketplaceCard";
import HoodieImg from "assets/img/black-hoodie.png";

import RightButton from "assets/img/symbols/right-circle.png";
import LeftButton from "assets/img/symbols/left-circle.png";
import useMulticallContract from "hooks/useMulticall";
import LoadingScreen from "components/LoadingScreen";
import { useAppSelector } from "redux/hooks/redux-hooks";

export const datas = [
  {
    id: 1,
    cover: { HoodieImg },
    title: "Interstaller",
  },
  { id: 2, cover: { HoodieImg }, title: "Inception" },
  {
    id: 3,
    cover: { HoodieImg },
    title: "Blade Runner 2049",
  },
  { id: 4, cover: { HoodieImg }, title: "Icon man 3" },
  { id: 5, cover: { HoodieImg }, title: "Venom" },
  {
    id: 6,
    cover: { HoodieImg },
    title: "Steins Gate",
  },
  {
    id: 7,
    cover: { HoodieImg },
    title: "One Punch Man",
  },
  {
    id: 8,
    cover: { HoodieImg },
    title: "A Silent Voice",
  },
  {
    id: 9,
    cover: { HoodieImg },
    title: "Demon Slayer",
  },
  {
    id: 10,
    cover: { HoodieImg },
    title: "Attack On Titan",
  },
];

export const CenterCarousel = (props: any) => {
  const ref = React.useRef(StackedCarousel);
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setData] = useState<any[]>([]);
  const [metaCount, setDataCount] = useState<number>(0);
  const contract = useMulticallContract(
    "0x450a0461D584449386e008afa848d76217dC9e91"
  );
  const account = useAppSelector((state) => state.auth.account);
  const getURI = useCallback(async () => {
    const uris = await contract.methods
      .getTokenIds("0x353AF3A24A39031DA7c99155f5e9f7Bf09A3C55E", account)
      .call();
    let metadata = [];
    for (let uri of uris) {
      let res = await fetch(uri);
      let data = await res.json();
      metadata.push({
        ...data,
        contract: "0x353AF3A24A39031DA7c99155f5e9f7Bf09A3C55E",
      });
    }
    setData(metadata);
    console.log(metadata);
    setIsLoading(false);
    setDataCount(metadata.length);
    // console.log(data);
  }, []);
  useEffect(() => {
    getURI();
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <>
      {meta.length !== 0 ? (
        <div style={{ width: "100%", position: "relative", margin: "auto" }}>
          <ResponsiveContainer
            // @ts-ignore
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              let currentVisibleSlide = metaCount >= 3 ? 3 : 1;
              if (parentWidth <= 1440)
                currentVisibleSlide = meta.length >= 3 ? 3 : 1;
              if (parentWidth <= 1080) currentVisibleSlide = 1;
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={
                    props.isInventory ? InventoryCard : MarketplaceCard
                  }
                  height={parentWidth > 500 ? 700 : 600}
                  slideWidth={parentWidth < 800 ? parentWidth - 40 : 550}
                  carouselWidth={parentWidth}
                  data={meta}
                  currentVisibleSlide={currentVisibleSlide}
                  maxVisibleSlide={meta.length >= 3 ? 3 : 1}
                  useGrabCursor
                  fadeDistance={0.22}
                />
              );
            }}
          />
        </div>
      ) : (
        <div className="text-white mt-5 text-center">No NFT</div>
      )}
    </>
  );
};

export default CenterCarousel;
