import Layout from "components/Layout";
import Typography from "components/Typography";
import CenterCarousel from "components/CenterCarousel";
import Button from "components/Button";
import MarketplaceCard from "components/Card/MarketplaceCard";
import topImg from "assets/img/symbols/top.png";
import belowImg from "assets/img/symbols/below.png";
import SortImg from "assets/svg/ArrowsDownUp.svg";
import HoodieImg from "assets/img/black-hoodie.png";

export const datas = [
  {
    id: 1,
    cover: HoodieImg,
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
    cover: HoodieImg,
    title: "Blade Runner 2049",
    amount: 5,
  },
  {
    id: 4,
    cover: HoodieImg,
    title: "Icon man 3",
    amount: 5,
  },
  {
    id: 5,
    cover: HoodieImg,
    title: "Venom",
    amount: 5,
  },
  {
    id: 6,
    cover: HoodieImg,
    title: "Steins Gate",
    amount: 5,
  },
  {
    id: 7,
    cover: HoodieImg,
    title: "One Punch Man",
    amount: 5,
  },
  {
    id: 8,
    cover: HoodieImg,
    title: "A Silent Voice",
    amount: 5,
  },
  {
    id: 9,
    cover: HoodieImg,
    title: "Demon Slayer",
    amount: 5,
  },
  {
    id: 10,
    cover: HoodieImg,
    title: "Attack On Titan",
    amount: 5,
  },
];

const Marketplace = () => {
  return (
    <Layout>
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:flex items-end mt-5  z-50 ">
          <h1 className="text-white text-[55px] md:text-[75px] pt-[10px] md:pt-0 clash-font font-semibold leading-[0.8] z-50">
            Marketplace
          </h1>
          <div className="w-full flex justify-start md:justify-end my-7 md:my-0">
            <Button
              text="Price"
              rightImgSrc={SortImg}
              className="text-xl border-white/10 text-white/70 hover:border hover:border-white/70  hover:text-white transition-all duration-100"
              imgClassName="w-5"
            />
          </div>
        </div>
        <div className="mt-2 md:mt-12 grid items-stretch grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
    </Layout>
  );
};
export default Marketplace;
