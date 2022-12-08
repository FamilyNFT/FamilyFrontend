import Layout from "components/Layout";
import Typography from "components/Typography";
import CenterCarousel from "components/CenterCarousel";
import Button from "components/Button";
import MarketplaceCard from "components/Card/MarketplaceCard";

import topImg from "assets/img/symbols/top.png";
import belowImg from "assets/img/symbols/below.png";
import SortImg from "assets/img/symbols/ArrowsDownUp.png";

export const datas = [
  {
    id: 1,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Interstaller",
    amount: 5,
  },
  {
    id: 2,
    cover:
      "https://img.freepik.com/premium-photo/cloth-template-visualization-blank-t-shirt-body-without-man-with-shadows-white-background-front-pose-mockup-ready-use-your-design_300849-1522.jpg",
    title: "Inception",
    amount: 1,
  },
  {
    id: 3,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Blade Runner 2049",
    amount: 5,
  },
  {
    id: 4,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Icon man 3",
    amount: 5,
  },
  {
    id: 5,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Venom",
    amount: 5,
  },
  {
    id: 6,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Steins Gate",
    amount: 5,
  },
  {
    id: 7,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "One Punch Man",
    amount: 5,
  },
  {
    id: 8,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "A Silent Voice",
    amount: 5,
  },
  {
    id: 9,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Demon Slayer",
    amount: 5,
  },
  {
    id: 10,
    cover: "https://i.ibb.co/0Bqtcyv/image-3.png",
    title: "Attack On Titan",
    amount: 5,
  },
];

const MarketPlace = () => {
  return (
    <Layout>
      <div>
        <div>
          <h1 className="text-white text-[55px] md:text-[75px] pt-[10px] md:pt-0 clash-font font-semibold leading-[0.8] mt-10">
            Marketplace
          </h1>
          <div className="w-full flex justify-center md:justify-end mt-3 md:mt-0">
            <Button text="Price" imgSrc={SortImg} />
          </div>
          <div className="flex flex-wrap item-container w-full">
            {datas.map((data: any, key: any) => (
              <MarketplaceCard
                id={key}
                key={key}
                title={data.title}
                imgSrc={data.cover}
                amount={data.amount}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MarketPlace;
