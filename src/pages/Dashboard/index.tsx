import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import starImg from "assets/img/Dashboard/Star 1.svg";
import HomeHeadingImg from "assets/img/Dashboard/The Home of Phygitals.png";
import whiteBoxImg from "assets/img/Dashboard/Vector 1.png";
import FaceBookIcon from "assets/img/Dashboard/twitter.svg";
import DiscordIcon from "assets/img/Dashboard/discord.svg";
import TelegramIcon from "assets/img/Dashboard/telegram.svg";
import logoImg1 from "assets/img/logo/logo-2.png";
import LuksoImg from "assets/img/logo/logo-1.png";
import mailSvg from "assets/svg/mail.svg";

import Button from "../../components/Button";
import Typography from "components/Typography";
import Layout from "components/Layout";
import LoadingScreen from "components/LoadingScreen";

import DashboardVideo from "assets/video/video.mp4";

const typhoText = "Where your Hopes, Dreams and Desires are Born";

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
              <div className="flex">
                <Link to="#">
                  <div className="rounded-[50%] w-[56px] h-[56px] bg-[#272727] flex justify-center items-center">
                    {" "}
                    <img
                      src={FaceBookIcon}
                      alt="faceBookIcon"
                      className="p-2"
                    ></img>
                  </div>
                </Link>
                <Link to="#">
                  <div className="rounded-[50%] w-[56px] h-[56px] bg-[#272727] flex justify-center items-center ml-2">
                    {" "}
                    <img
                      src={DiscordIcon}
                      alt="discordIcon"
                      className="p-2"
                    ></img>
                  </div>
                </Link>
                <Link to="#">
                  <div className="rounded-[50%] w-[56px] h-[56px] bg-[#272727] flex justify-center items-center ml-2">
                    {" "}
                    <img
                      src={TelegramIcon}
                      alt="telegramIcon"
                      className="p-2"
                    ></img>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center mt-20 fade-effect">
              <img src={starImg} alt="starImg" className="w-[160px]"></img>
              <div className="block xl:flex  text-center">
                <Typography
                  className="z-10 md:text-[80px] text-[60px]  text-white clash-font font-semibold tracking-wider leading-[98.4px]"
                  children="The Home Of "
                />
                <div
                  className={`home-heading-img flex ml-2 md:ml-5 justify-center`}
                >
                  <Typography
                    className="z-10 md:text-[80px] text-[60px]  md:ml-4 clash-font font-semibold tracking-wider  pr-1  leading-[98.4px]"
                    children="Phygitals"
                  />
                </div>
              </div>
              <Typography
                children={typhoText}
                className="text-white text-opacity-70 text-[16px] mt-5 archivo-font"
              />
              <Link to="/marketplace">
                <Button
                  type="button"
                  text="Enter"
                  className="mt-10 px-20"
                  disabled
                />
              </Link>
            </div>
            <div>
              <div className="flex flex-col justify-center items-center md:absolute text-center bottom-[50px] w-[90%]">
                <Typography
                  children="POWERED BY"
                  className="text-white text-opacity-70 text-[13px] mt-5 archivo-font"
                />
                <img src={LuksoImg} alt="lukso" className="w-[120px]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
