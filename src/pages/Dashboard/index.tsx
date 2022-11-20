import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import starImg from "assets/img/Dashboard/Star 1.png";
import HomeHeadingImg from "assets/img/Dashboard/The Home of Phygitals.png";
import whiteBoxImg from "assets/img/Dashboard/Vector 1.png";
import FaceBookIcon from "assets/img/Dashboard/Frame 6.png";
import DiscordIcon from "assets/img/Dashboard/Frame 7.png";
import TelegramIcon from "assets/img/Dashboard/Frame 8.png";
import logoImg1 from "assets/img/logo/logo-1.png";
import mailSvg from "assets/svg/mail.svg";

import Button from "../../components/Button";
import Typography from "components/Typography";
import Layout from "components/Layout";
import LoadingScreen from "components/LoadingScreen";

import DashboardVideo from "assets/video/video.mp4";

const typhoText = "Where your hopes, dreams and desires are born";

const Dashboard = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 7000);
  }, []);

  return (
    <React.Fragment>
      {isLoading && <LoadingScreen />}
      <div className="custom-container">
        <div className="custom_overlay"></div>
        <video
          autoPlay
          muted
          id="myVideo"
          onLoadStart={() => setIsLoading(true)}
          onLoadedData={() => setIsLoading(false)}
        >
          <source src={DashboardVideo} type="video/mp4" />
        </video>
        {isDisplayed && (
          <div className="z-10 w-full h-full px-[10px] md:px-[100px] py-[20px]">
            <div className="flex justify-between items-center fade-effect">
              <NavLink to="/">
                <img
                  className="w-[105px] h-[40px] "
                  src={logoImg1}
                  alt="logo"
                ></img>
              </NavLink>
              <NavLink to="/marketplace">
                <Button text="Shop Now" imgSrc={mailSvg} />
              </NavLink>
            </div>
            <div className="flex flex-col items-center mt-20 fade-effect">
              <img src={starImg} alt="starImg" className="w-[160px]"></img>
              <div className="block xl:flex  text-center">
                {" "}
                <Typography
                  className="z-10 md:text-[90px] text-[60px] font-black text-white clash-font tracking-wide"
                  children="The Home Of "
                />
                <div className={`home-heading-img flex ml-2 md:ml-5 mt-5`}>
                  <Typography
                    className="z-10 md:text-[90px] text-[60px] font-black ml-6 md:ml-4 clash-font tracking-wide p-1 leading-none"
                    children="Phygitals"
                  />
                </div>
              </div>
              <Typography
                children={typhoText}
                className="text-white text-2xl mt-5 "
              />
              <Link to="/marketplace">
                <Button type="button" text="Enter" className="mt-10 px-20" />
              </Link>
              <div className="flex mt-[50px]">
                <Link to="#">
                  <img
                    src={FaceBookIcon}
                    alt="faceBookIcon"
                    className="p-2"
                  ></img>
                </Link>
                <Link to="#">
                  <img
                    src={DiscordIcon}
                    alt="discordIcon"
                    className="p-2"
                  ></img>
                </Link>
                <Link to="#">
                  <img
                    src={TelegramIcon}
                    alt="telegramIcon"
                    className="p-2"
                  ></img>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
