import React, { useState } from "react";
import Button from "components/Button";
import Typography from "components/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "components/Modal";

import FlowerImg from "assets/img/symbols/Flower.png";
import SparkleImg from "assets/img/symbols/Sparkle.png";
import PalletImg from "assets/img/symbols/Palette.png";
import ScissorImg from "assets/img/symbols/Scissors.png";
import messageImg from "assets/img/symbols/ChatsTeardrop.svg";
import reportImg from "assets/img/symbols/XCircle.svg";
import ScanImg from "assets/img/symbols/Scan.png";
import ConfirmImg from "assets/img/symbols/confirm.svg";
import Chip from "assets/img/symbols/Scan.png";
import CloseButton from "assets/img/symbols/close.png";
import ChipPhone from "assets/img/symbols/chip-phone.png";
import FamilyMark from "assets/img/symbols/family.png";

const TradeCard = React.memo(function (props: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [registered, setRegistered] = React.useState(false);
  const [reportOption, setReportOption] = React.useState("");
  const [optionClicked, setOptionClicked] = React.useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeReportModal = () => {
    setReportModalOpen(false);
  };

  const handleRegisterButtonClick = (index: any) => {
    setModalOpen(true);
  };

  const handleReportButtonClick = (index: any) => {
    setReportModalOpen(true);
  };

  const ChipRegister = (index: any) => {
    console.log(props.id);
    setRegistered(true);
  };

  const optionSelected = (option: any) => {};

  return (
    <div
      id={props.id}
      className="w-full h-full px-[24px] py-[32px] gap-[32px] border-[1px] trade-card flex flex-wrap relative mt-5"
    >
      <div className="w-full md:w-[30%] md:border-r-[2px] border-r-[#212021] pr-5">
        <div className="flex justify-between px-3">
          <Typography
            children="The Hoodie"
            className="text-white text-[35px] leading-[30px] font-semibold  w-2/3 md:w-full "
          />
          <p className="text-[25px] font-semibold text-white">3</p>
        </div>
        <LazyLoadImage
          src="https://i.ibb.co/0Bqtcyv/image-3.png"
          alt="goods"
          className="w-full img-lazy "
          effect="blur"
        />
        <div className="flex">
          <div className="flex">
            <img src={PalletImg} alt="pallete" />
            <Typography
              children="Black"
              className="text-[#BABABA] text-[18px] leading-[24px] font-medium archivo-font ml-2"
            />
          </div>
          <div className="flex ml-8">
            <img src={ScissorImg} alt="scissor" />
            <Typography
              children="XS"
              className="text-[#BABABA] text-[18px] leading-[24px] font-medium archivo-font ml-2"
            />
          </div>
        </div>

        <div className="md:flex mt-3">
          <div className="flex">
            <img src={FlowerImg} alt="material" />
            <Typography
              children="100% Cotton"
              className="text-[#BABABA] text-[18px] leading-[24px] font-medium archivo-font ml-2"
            />
          </div>
          <div className="flex mt-2 md:mt-0 md:ml-8">
            <img src={SparkleImg} alt="sparkle" />
            <Typography
              children="Made in Philippines"
              className="text-[#BABABA] text-[18px] leading-[24px] font-medium archivo-font ml-2"
            />
          </div>
        </div>
      </div>

      <div className="w-full md:w-[35%]">
        <p className="archivo-font font-semibold text-[18px]  text-[#8F8F8F]">
          User involved
        </p>
        <div className="flex justify-between mt-2 w-1/2 items-center">
          <div className="flex items-center">
            <div className="w-[28px] h-[28px] rounded-[50%] bg-[#767676]"></div>
            <Typography
              children="Ninja"
              className="text-[#BABABA] text-[22px] leading-[24px] font-semibold archivo-font ml-3"
            />
          </div>

          <Typography
            children="&"
            className="text-[#BABABA] text-[22px] leading-[24px] font-semibold archivo-font ml-8"
          />
          <div className="flex items-center">
            <div className="w-[28px] h-[28px] rounded-[50%] bg-[#767676] ml-8"></div>
            <Typography
              children="James"
              className="text-[#BABABA] text-[22px] leading-[24px] font-semibold archivo-font ml-3"
            />
          </div>
        </div>

        <p className="archivo-font font-semibold text-[18px]  text-[#8F8F8F] mt-10">
          Tracking Details
        </p>
        <Typography
          children="https://auspost.au/mypost/track/#/search"
          className="text-[#BABABA] text-[18px] md:text-[22px] leading-[24px] font-semibold archivo-font mt-2"
        />

        <p className="archivo-font font-semibold text-[18px]  text-[#8F8F8F] mt-14">
          Details
        </p>
        <Typography
          children="-"
          className="text-[#BABABA] text-[22px] leading-[24px] font-semibold archivo-font mt-2"
        />

        <p className="archivo-font font-semibold text-[18px]  text-[#8F8F8F] mt-14">
          Verify
        </p>
        <Typography
          children="-"
          className="text-[#BABABA] text-[22px] leading-[24px] font-semibold archivo-font mt-2"
        />
      </div>

      <div className="w-full md:w-[30%]">
        {registered ? (
          <div className="w-full  px-5">
            <Button
              text="Confirmed"
              imgSrc={ConfirmImg}
              className="ml-4 confirm-btn"
            />
          </div>
        ) : (
          <div className="w-full  px-5">
            <div className="flex">
              <Button text="Contact James" imgSrc={messageImg} />
              <Button
                text="Report loss"
                imgSrc={reportImg}
                className="ml-4 report-btn"
                onClick={() => handleReportButtonClick(props.id)}
              />
            </div>
            <Button
              text="Confirm Reception"
              imgSrc={ScanImg}
              className="md:absolute bottom-10 right-10 mt-5 md:mt-0"
              onClick={() => handleRegisterButtonClick(props.id)}
            />
          </div>
        )}
      </div>

      <Modal __isOpen={modalOpen} dispatchModal={() => {}}>
        <div className="relative w-[350px] md:w-[600px] h-full md:h-auto mt-5">
          <div className="relative bg-[#0E0E0E] rounded-[32px] shadow border-[1px] border-[#A09D9D] p-[15px]">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              onClick={() => {
                closeModal();
              }}
            >
              <img src={CloseButton} alt="closeButton" className="p-3" />
              <span className="sr-only">Close modal</span>
            </button>

            <div className="py-6 px-2 md:px-6 lg:px-8">
              <div className="flex items-center">
                <img src={Chip} alt="chip" className="w-[25px] h-[25px]" />

                <h3 className="ml-2 text-[18px] md:text-xl font-medium text-gray-900 dark:text-white">
                  Register your phygital piece
                </h3>
              </div>

              <div className="flex">
                {!registered ? (
                  <img
                    src="https://i.ibb.co/0Bqtcyv/image-3.png"
                    alt="goods"
                    className="w-[60%] md:w-[70%]"
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/0Bqtcyv/image-3.png"
                    alt="goods"
                    className="w-[90%] md:w-[70%]"
                  />
                )}

                {!registered ? (
                  <img
                    src={ChipPhone}
                    alt="chip-phone"
                    className="w-[90%] -ml-[120px] md:h-[180px] mt-[50px]"
                  />
                ) : (
                  <img
                    src={FamilyMark}
                    alt="mark"
                    className="w-[80px] h-[80px] -ml-[70px] md:-ml-[100px] mt-[100px] md:mt-[150px]"
                  />
                )}
              </div>

              {!registered ? (
                <Typography
                  children="To link your physical garment to its digital twin, you only need to scan the NFC ship on your  clothes directly with your phone."
                  className="text-[#A09D9D] mt-5 text-center"
                />
              ) : (
                <Typography
                  children="You have successfully registered your phygital fashion piece."
                  className="text-[#A09D9D] mt-5 text-center"
                />
              )}

              {!registered && (
                <Button
                  text="Start Registering"
                  className="mt-8"
                  imgSrc={Chip}
                  onClick={() => {
                    ChipRegister(props.id);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Modal>

      <Modal __isOpen={reportModalOpen} dispatchModal={() => {}}>
        <div className="relative w-[300px] md:w-[400px] h-full md:h-auto mt-5">
          <div className="relative bg-[#0E0E0E] rounded-[32px] shadow border-[1px] border-[#A09D9D] p-[8px]">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-toggle="authentication-modal"
              onClick={() => {
                closeReportModal();
              }}
            >
              <img src={CloseButton} alt="closeButton" className="p-3" />
              <span className="sr-only">Close modal</span>
            </button>

            <div className="py-6 px-2 md:px-6 lg:px-8">
              <div className="flex items-center">
                <img src={Chip} alt="chip" className="w-[25px] h-[25px]" />

                <h3 className="ml-2 text-[18px] md:text-xl font-medium text-gray-900 dark:text-white">
                  Report an issue
                </h3>
              </div>

              <Typography
                children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
                className="text-[#A09D9D] text-[16px] leading-[24px]"
              />

              <Typography
                children="Select the type of your issue"
                className="text-white text-[16px] leading-[24px]"
              />

              {!optionClicked && (
                <div>
                  <div className="flex border-[1px] border-[#343434] rounded-[16px] py-[12px] px-[24px] items-center mt-2">
                    <input
                      type="radio"
                      name="site_name"
                      value={"one"}
                      onClick={(e: any) => {
                        setReportOption(e.target.value);
                      }}
                    />
                    <Typography
                      children="My product hasn’t arrived"
                      className="text-[#8B8B8B] text-[16px] leading-[24px] ml-5"
                    />
                  </div>

                  <div className="flex border-[1px] border-[#343434] rounded-[16px] py-[12px] px-[24px] items-center  mt-2">
                    <input
                      type="radio"
                      name="site_name"
                      value={"two"}
                      onClick={(e: any) => {
                        setReportOption(e.target.value);
                      }}
                    />
                    <Typography
                      children="My product doesn’t correspond"
                      className="text-[#8B8B8B] text-[16px] leading-[24px] ml-5"
                    />
                  </div>
                </div>
              )}

              <div className="flex border-[1px] border-[#343434] rounded-[16px] py-[12px] px-[24px] items-center  mt-2">
                <input
                  type="radio"
                  name="site_name"
                  value={"three"}
                  onClick={(e: any) => {
                    setReportOption(e.target.value);
                    setOptionClicked(true);
                  }}
                />
                <Typography
                  children="Other Option"
                  className="text-[#8B8B8B] text-[16px] leading-[24px] ml-5"
                />
              </div>

              {optionClicked && (
                <textarea
                  className="border-[1px] border-[#8B8B8B] rounded-[16px] bg-transparent w-full p-4 h-[150px] mt-3 text-white"
                  placeholder="Describe your issue..."
                ></textarea>
              )}

              <div className="flex mt-5">
                <Button
                  text="Cancel"
                  onClick={() => {
                    closeReportModal();
                    setOptionClicked(false);
                  }}
                />
                <Button
                  text="Confirm"
                  className="ml-4 report-btn"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
});

export default TradeCard;
