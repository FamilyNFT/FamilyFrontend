import React, { useState } from "react";
import Button from "components/Button";
import Typography from "components/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Modal from "components/Modal";
import { Modal as MantineModal } from "@mantine/core";

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
import Chatbox from "components/Chatbox/Chatbox";
import { CgCloseO } from "react-icons/cg";

const TradeCard = React.memo(function (props: any) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [registered, setRegistered] = React.useState(false);
  const [reportOption, setReportOption] = React.useState("");
  const [optionClicked, setOptionClicked] = React.useState(false);

  const [chatOpen, setChatOpen] = React.useState(false);

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
      className=" px-[24px] py-[32px] gap-[32px] border-[1px] trade-card flex relative mt-5 justify-between flex-col lg:flex-row items-start sm:items-stretch"
    >
      <div className="flex gap-6 flex-col sm:flex-row flex-auto items-stretch  w-full">
        {/* left image */}
        <div className="w-full sm:w-fit    border-2 border-t-0 border-l-0 md:border-b-transparent border-r-0 md:border-r-2 border-white/10 pb-4 md:pb-0 md:pr-5 max-w-sm lg:max-w-none ">
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
            className="w-full  img-lazy max-h-300px"
            effect="blur"
          />
          <div className="flex  flex-wrap gap-x-4 gap-3 w-11/12 p-2">
            <div className="flex">
              <img src={PalletImg} alt="pallete" />
              <Typography
                children="Black"
                className="text-white/70 text-[18px] leading-[24px] font-medium archivo-font ml-2"
              />
            </div>
            <div className="flex ">
              <img src={ScissorImg} alt="scissor" />
              <Typography
                children="XS"
                className="text-white/70 text-[18px] leading-[24px] font-medium archivo-font ml-2"
              />
            </div>

            <div className="flex">
              <img src={FlowerImg} alt="material" />
              <Typography
                children="100% Cotton"
                className="text-white/70 text-[18px] leading-[24px] font-medium archivo-font ml-2"
              />
            </div>
            <div className="flex ">
              <img src={SparkleImg} alt="sparkle" />
              <Typography
                children="Made in Philippines"
                className="text-white/70 text-[18px] leading-[24px] font-medium archivo-font ml-2"
              />
            </div>
          </div>
        </div>

        {/* details */}
        <div className="w-full  p-2 relative overflow-hidden ">
          <p className="archivo-font font-semibold text-[18px]  text-white/50">
            User involved
          </p>
          <div className="flex justify-between mt-2 w-1/2 items-center gap-4 max-w-[150px]">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[50%] bg-[#767676]"></div>
              <Typography
                children="Ninja"
                className="text-white/70 text-md md:text-lg leading-[24px] font-semibold archivo-font "
              />
            </div>

            <Typography
              children="&"
              className="text-[#BABABA] text-md leading-[24px] font-semibold archivo-font"
            />
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-[50%] bg-[#767676] "></div>
              <Typography
                children="James"
                className="text-white/70 text-md md:text-lg leading-[24px] font-semibold archivo-font "
              />
            </div>
          </div>

          <p className="archivo-font font-semibold text-[18px]  text-white/50 mt-10">
            Tracking Details
          </p>

          <a
            href="https://auspost.au/mypost/track/#/search"
            target="_blank"
            className="text-white/70 text-md md:text-lg  leading-[24px] font-semibold archivo-font mt-2 max-w-[70vw] text-ellipsis overflow-hidden"
          >
            https://auspost.au/mypost/track/#/search
          </a>

          <p className="archivo-font font-semibold text-[18px]  text-white/50 mt-14">
            Details
          </p>
          <Typography
            children="-"
            className="text-white/70 text-md md:text-lg leading-[24px] font-semibold archivo-font mt-2"
          />

          <p className="archivo-font font-semibold text-[18px]  text-white/50 mt-14">
            Verify
          </p>
          <Typography
            children="-"
            className="text-white/70 text-md md:text-lg leading-[24px] font-semibold archivo-font mt-2"
          />
        </div>
      </div>
      {/* controls */}
      <div className="flex flex-col-reverse sm:flex-row lg:flex-col items-end justify-between gap-4  w-full lg:w-fit ">
        {registered ? (
          <div className="w-full  px-5">
            <Button
              text="Confirmed"
              imgSrc={ConfirmImg}
              className="ml-4 confirm-btn"
            />
          </div>
        ) : (
          <>
            <div className="w-fit ">
              <div className="flex gap-4 flex-wrap ">
                <Button
                  text="Message"
                  imgSrc={messageImg}
                  onClick={() => setChatOpen(true)}
                  className="flex-1 gradient-button"
                />
                <Button
                  text="Report loss"
                  imgSrc={reportImg}
                  className="report-btn flex-1"
                  onClick={() => handleReportButtonClick(props.id)}
                />
              </div>
            </div>
            <Button
              text="Confirm"
              imgSrc={ScanImg}
              className="gradient-button"
              onClick={() => handleRegisterButtonClick(props.id)}
            />
          </>
        )}
      </div>

      {/* confirm product modal*/}
      <Modal __isOpen={modalOpen} dispatchModal={() => {}}>
        <div className="relative w-full max-w-xl p-2 md:px-4 h-full md:h-auto  ">
          <div className="relative bg-[#0E0E0E] rounded-[32px] shadow border-[1px] border-[#A09D9D] p-2 md:p-5 pt-8">
            <div className="flex items-center justify-between px-2 md:px-5">
              <div className="flex items-center gap-2 md:gap-3 font-semibold text-xl md:text-2xl leading-8">
                <img src={Chip} alt="chip" className="w-[25px]  h-[25px] " />
                <p className="text-white clash-font">
                  Scan to confirm the reception
                </p>
              </div>

              <button
                type="button"
                className=" text-gray-400 bg-transparent  rounded-lg text-sm "
                data-modal-toggle="authentication-modal"
                onClick={() => {
                  closeModal();
                }}
              >
                <img src={CloseButton} alt="closeButton" className="h-6" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="py-6 px-2 md:px-6 lg:px-8">
              <div className="flex relative">
                {!registered ? (
                  <img
                    src="https://i.ibb.co/0Bqtcyv/image-3.png"
                    alt="goods"
                    className="w-[80%]"
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/0Bqtcyv/image-3.png"
                    alt="goods"
                    className="w-full"
                  />
                )}

                {!registered ? (
                  <img
                    src={ChipPhone}
                    alt="chip-phone"
                    className="absolute w-[60%] top-12 -right-5 md:top-14"
                  />
                ) : (
                  <img
                    src={FamilyMark}
                    alt="mark"
                    className="absolute w-14 right-[20%] top-[45%]"
                  />
                )}
              </div>

              {!registered ? (
                <Typography
                  children="To link your physical garment to its digital twin, you only need to scan the NFC ship on your  clothes directly with your phone."
                  className="text-[#A09D9D] mt-5 "
                />
              ) : (
                <Typography
                  children="You have successfully confirmed the reception of your physical fashion device."
                  className="text-[#A09D9D] mt-5 text-center"
                />
              )}

              {!registered && (
                <Button
                  text="Start Registering"
                  className="mt-8 text-lg gradient-button"
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

      {/* report product modal*/}
      <Modal __isOpen={reportModalOpen} dispatchModal={() => {}}>
        <div className="relative w-full max-w-md h-full md:h-auto mt-5 mx-4">
          <div className="relative bg-[#0E0E0E] rounded-[32px] shadow border-[1px] border-[#A09D9D] p-8 flex flex-col gap-4">
            <div className="flex items-center justify-between  ">
              <div className="flex items-center gap-3 font-semibold text-lg md:text-2xl leading-8">
                <img src={Chip} alt="chip" className="md:w-[25px] h-[25px] " />
                <p className="text-white clash-font">Report an issue</p>
              </div>

              <button
                type="button"
                className=" text-gray-400 bg-transparent  rounded-lg text-sm "
                data-modal-toggle="authentication-modal"
                onClick={() => {
                  closeReportModal();
                }}
              >
                <CgCloseO className="text-2xl text-white/50 hover:text-white/90 transition-all duration-200" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <Typography
              children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
              className="text-white/70 text-lg font-medium leading-[24px]"
            />
            <div className="">
              <Typography
                children="Select the type of your issue"
                className="text-white text-md font-medium leading-[24px]"
              />

              {!optionClicked && (
                <div>
                  <div className="flex border-[1px] border-[#343434] rounded-[16px] py-[12px] px-[24px] items-center mt-2 cursor-pointer">
                    <input
                      type="radio"
                      name="site_name"
                      id="radio-report-01"
                      value={"one"}
                      onClick={(e: any) => {
                        setReportOption(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="radio-report-01"
                      className="text-white/50 text-md leading-[24px] ml-5 cursor-pointer"
                    >
                      My product hasn’t arrived
                    </label>
                  </div>

                  <div className="flex border-[1px] border-[#343434] rounded-[16px] py-[12px] px-[24px] items-center cursor-pointer mt-2">
                    <input
                      type="radio"
                      name="site_name"
                      id="radio-report-02"
                      value={"two"}
                      onClick={(e: any) => {
                        setReportOption(e.target.value);
                      }}
                    />
                    <label
                      htmlFor="radio-report-02"
                      className="text-white/50 text-md leading-[24px] ml-5 cursor-pointer"
                    >
                      My product doesn’t correspond
                    </label>
                  </div>
                </div>
              )}

              <div className="flex border-[1px] border-[#343434] rounded-[16px] py-[12px] px-[24px] items-center  mt-2 cursor-pointer">
                <input
                  type="radio"
                  name="site_name"
                  id="radio-report-03"
                  value={"three"}
                  onClick={(e: any) => {
                    setReportOption(e.target.value);
                    setOptionClicked(true);
                  }}
                />
                <label
                  htmlFor="radio-report-03"
                  className="text-white/50 text-md leading-[24px] ml-5 cursor-pointer"
                >
                  Other Option
                </label>
              </div>

              {optionClicked && (
                <textarea
                  className="border-[1px] border-[#8B8B8B] rounded-[16px] bg-transparent w-full p-4 h-[150px] mt-3 text-white"
                  placeholder="Describe your issue..."
                ></textarea>
              )}

              <div className="flex mt-5 gap-4">
                <Button
                  text="Cancel"
                  className="flex-1"
                  onClick={() => {
                    closeReportModal();
                    setOptionClicked(false);
                  }}
                />
                <Button
                  text="Confirm"
                  className=" report-btn flex-auto"
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* chat modal */}
      <MantineModal
        opened={chatOpen}
        onClose={() => {}}
        withCloseButton={false}
        classNames={{
          inner: "bg-[#000000]/30 backdrop-blur	",
          modal:
            "bg-[#212121]/90 w-full max-w-lg h-full max-h-[50rem] rounded-3xl text-white",
        }}
      >
        <Chatbox closeModal={() => setChatOpen(false)} />
      </MantineModal>
    </div>
  );
});

export default TradeCard;
