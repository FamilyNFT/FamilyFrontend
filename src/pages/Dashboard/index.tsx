import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { zoomLevel } from "zoom-level";

import starImg from "assets/img/Dashboard/Star 1.svg";
import HomeHeadingImg from "assets/img/Dashboard/The Home of Phygitals.png";
import whiteBoxImg from "assets/img/Dashboard/Vector 1.png";
import FaceBookIcon from "assets/img/Dashboard/twitter.svg";
import DiscordIcon from "assets/img/Dashboard/discord.svg";
import InstagramIcon from "assets/img/Dashboard/instagram1.svg";
import logoImg1 from "assets/img/logo/logo-2.png";
import LuksoImg from "assets/img/logo/logo-1.png";
import mailSvg from "assets/svg/mail.svg";

import Button from "../../components/Button";
import Typography from "components/Typography";
import Layout from "components/Layout";
import LoadingScreen from "components/LoadingScreen";

import DashboardVideo from "assets/video/video.webm";

const typhoText = "Where your Hopes, Dreams and Desires are Born";

const Dashboard = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [level, setLevel] = useState(1);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 500);
  }, []);

  // window.addEventListener("resize", () => {
  //   setLevel(zoomLevel());
  // });

  return (
    <React.Fragment>
      {isLoading && <LoadingScreen />}
      <div className="custom-container">
        <div className="relative w-full h-full overflow-hidden text-center flex items-center justify-center">
          <video
            autoPlay
            muted
            id="myVideo"
            onLoadStart={() => setIsLoading(true)}
            onLoadedData={() => setIsLoading(false)}
          >
            <source src={DashboardVideo} type="video/webm" />
          </video>

          {isDisplayed && (
            <div className="z-10 w-full h-full px-[10px] md:px-[100px] py-[20px]">
              <div className="flex justify-between items-center fade-effect">
                <NavLink to="/">
                  <img
                    className="w-[6.5em] h-[3.5em] "
                    src={logoImg1}
                    alt="logo"
                  ></img>
                </NavLink>
                <div className="flex">
                  <Link to="https://twitter.com/FamilyLYX">
                    <div className="rounded-[50%] w-[56px] h-[56px] bg-[#272727] flex justify-center items-center">
                      {" "}
                      <img
                        src={FaceBookIcon}
                        alt="faceBookIcon"
                        className="p-2"
                      ></img>
                    </div>
                  </Link>
                  <Link to="https://discord.gg/pvZb6JjRPZ">
                    <div className="rounded-[50%] w-[56px] h-[56px] bg-[#272727] flex justify-center items-center ml-2">
                      {" "}
                      <img
                        src={DiscordIcon}
                        alt="discordIcon"
                        className="p-2"
                      ></img>
                    </div>
                  </Link>
                  <Link to="https://www.instagram.com/familylukso/">
                    <div className="rounded-[50%] w-[56px] h-[56px] bg-[#272727] flex justify-center items-center ml-2">
                      {" "}
                      <img
                        src={InstagramIcon}
                        alt="telegramIcon"
                        className="p-2"
                      ></img>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center mt-[3.5em] fade-effect">
                <img
                  src={starImg}
                  alt="starImg"
                  className="w-[160px]"
                  id="startImg"
                ></img>
                <div className="block xl:flex text-center md:mt-10">
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

                <div className="mt-10">
                  <Link to="/marketplace">
                    <Button
                      type="button"
                      text="Enter"
                      className="px-20"
                      disabled
                    />
                  </Link>
                </div>
              </div>
              <div
                className="fade-effect lukso-mark"
                // style={{ display: level > 1.5 ? "none" : "block" }}
              >
                <div className="flex flex-col justify-center items-center md:absolute text-center bottom-[50px] w-[full] left-[calc(50%-55px)] mt-[50px] md:mt-0">
                  <Typography
                    children="POWERED BY"
                    className="text-white text-opacity-70 text-[11px] mt-5 archivo-font"
                  />
                  <img src={LuksoImg} alt="lukso" className="w-[100px]" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
