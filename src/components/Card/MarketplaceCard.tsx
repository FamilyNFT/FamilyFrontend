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
      <div className="p-8 rounded-[30px] border-[1px] border-white/10 custom-nav w-full h-full	 cursor-pointer  flex flex-col justify-between hover:scale-[1.02] transition-all duration-200 hover:shadow-[rgba(255,_255,_200,_0.2)_0px_3px_8px]  ">
        <div className="flex justify-between text-white items-center">
          <Typography
            children={title}
            className="text-white text-3xl md:text-4xl  leading-[30px] font-semibold  w-2/3 md:w-full clash-font good-title whitespace-pre-line	overflow-hidden"
          />
          <p className="text-2xl md:text-3xl font-semibold text-white/70">
            {amount}
          </p>
        </div>
        <LazyLoadImage
          src={imgSrc}
          alt="goods"
          className="w-full img-lazy h-full max-h-[320px] aspect-square text-align flex items-center my-5 object-cover "
          effect="blur"
        />

        <div className="flex justify-between items-center text-white">
          <Typography
            children="Edition 1/100"
            className="font-semibold text-[18px] text-white/70"
          />
          {/* <div className="flex items-center">
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
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default MarketplaceCard;
