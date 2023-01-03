import React, { useCallback, useEffect, useState } from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import InventoryCard from "components/Card/InventoryCard";
import MarketplaceCard from "components/Card/MarketplaceCard";

import RightButton from "assets/img/symbols/right-circle.png";
import LeftButton from "assets/img/symbols/left-circle.png";
import useMulticallContract from "hooks/useMulticall";
import LoadingScreen from "components/LoadingScreen";
import { useAppSelector } from "redux/hooks/redux-hooks";

export const datas = [
  {
    id: 1,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Interstaller",
  },
  { id: 2, cover: "https://i.ibb.co/0Bqtcyv/image-3.png", title: "Inception" },
  {
    id: 3,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Blade Runner 2049",
  },
  { id: 4, cover: "https://i.ibb.co/0Bqtcyv/image-3.png", title: "Icon man 3" },
  { id: 5, cover: "https://i.ibb.co/0Bqtcyv/image-3.png", title: "Venom" },
  {
    id: 6,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Steins Gate",
  },
  {
    id: 7,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "One Punch Man",
  },
  {
    id: 8,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "A Silent Voice",
  },
  {
    id: 9,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Demon Slayer",
  },
  {
    id: 10,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Attack On Titan",
  },
];

export const CenterCarousel = (props: any) => {
  const ref = React.useRef(StackedCarousel);
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setData] = useState<any[]>([]);
  const contract = useMulticallContract(
    "0xa31Be2dB7fF2A97c4c21a0a18D86c515b67BB5CC"
  );
  const account = useAppSelector((state) => state.auth.account);
  const getURI = useCallback(async () => {
    const uris = await contract.methods
      .getTokenIds("0x450a0461d584449386e008afa848d76217dc9e91", account)
      .call();
    let metadata = [];
    for (let uri of uris) {
      let data = await fetch(uri);
      metadata.push(await data.json());
    }
    setData(metadata);
    setIsLoading(false);
    console.log(metadata);
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
              let currentVisibleSlide = 3;
              if (parentWidth <= 1440)
                currentVisibleSlide = datas.length >= 3 ? 3 : 1;
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
                  maxVisibleSlide={datas.length >= 3 ? 3 : 1}
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
