import Typography from "components/Typography";
import React from "react";
import { Link } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";

import ThreeLineImg from "assets/img/symbols/three.png";
import BlackColor from "assets/img/symbols/black-color.png";
import WhitieColor from "assets/img/symbols/white-color.png";
import PurpleColor from "assets/img/symbols/purple-color.png";

import "react-lazy-load-image-component/src/effects/blur.css";

interface PropsType {
  id: string;
  title?: string;
  amount?: number;
  className?: string;
  disabled?: boolean;
  imgSrc?: any;
  onClick?: (props: any) => void;
}

const MarketplaceCard: React.FC<PropsType> = ({
  id = "",
  title = "",
  amount = 0,
  className = "",
  disabled = false,
  imgSrc = "",
  onClick,
}) => {
  return (
    <Link to={`/marketplace/${id}`}>
      <div className="p-8 rounded-[30px] border-[1px] border-[#A09D9D] custom-nav w-full md:w-[500px] md:m-4 cursor-pointer mt-2 ">
        <div className="flex justify-between text-white items-center">
          <Typography
            children={title}
            className="text-white text-[35px] leading-[30px] font-semibold  w-2/3 md:w-full clash-font good-title"
          />
          <p className="text-[25px] font-semibold">{amount}</p>
        </div>
        <LazyLoadImage
          src={imgSrc}
          alt="goods"
          className="w-full img-lazy h-[400px] text-align flex items-center"
          effect="blur"
        />

        <div className="flex justify-between text-white">
          <Typography
            children="Edition 1/100"
            className="font-semibold text-[18px]"
          />
          <div className="flex">
            <div
              className={` border-[#A09D9D] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer`}
            >
              <img src={BlackColor} alt="black" />
            </div>
            <div
              className={` border-[#A09D9D] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer`}
            >
              <img src={WhitieColor} alt="white" />
            </div>
            <div
              className={` border-[#A09D9D] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer`}
            >
              <img src={PurpleColor} alt="purple" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarketplaceCard;
