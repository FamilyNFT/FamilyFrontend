import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";

import InventoryCard from "components/Card/InventoryCard";
import MarketplaceCard from "components/Card/MarketplaceCard";

import RightButton from "assets/img/symbols/right-circle.png";
import LeftButton from "assets/img/symbols/left-circle.png";

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

  return (
    <div style={{ width: "100%", position: "relative", margin: "auto" }}>
      <ResponsiveContainer
        // @ts-ignore
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
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
              data={datas}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={3}
              useGrabCursor
              fadeDistance={0.22}
            />
          );
        }}
      />
      <div>
        <img
          src={LeftButton}
          alt="left"
          className="absolute top-[40%] left-0 md:left-[28%] z-20 cursor-pointer"
          // @ts-ignore
          onClick={() => ref.current?.goBack()}
        />
      </div>

      <div>
        <img
          src={RightButton}
          alt="right"
          className="absolute top-[40%] right-0 md:right-[28%] z-20 cursor-pointer"
          // @ts-ignore
          onClick={() => ref.current?.goNext()}
        />
      </div>
    </div>
  );
};

export default CenterCarousel;
