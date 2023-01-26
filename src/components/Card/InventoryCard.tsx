import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Select from "react-select";

import Typography from "components/Typography";
import Button from "components/Button";
import Modal from "components/Modal";
import HoodieImg from "assets/img/black-hoodie.png";

import Chip from "assets/svg/scan.svg";
import CloseButton from "assets/img/symbols/close.png";
import ChipPhone from "assets/img/symbols/chip-phone.png";
import FamilyMark from "assets/img/symbols/family.png";
import RightButton from "assets/img/symbols/right-circle.png";
import LeftButton from "assets/img/symbols/left-circle.png";
import UploadImageButton from "components/UploadImageButton";
import RightArrowImg from "assets/img/symbols/rightArrow.png";
import { CgCloseO } from "react-icons/cg";
import { Modal as MantineModal } from "@mantine/core";
import { Link } from "react-router-dom";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.";

const GOOGLE_MAP_API_KEY = "AIzaSyCdestPnok8TkEx7sl4fENuFaQuS5uXaH4";

const options = [
  { value: "new", label: "New" },
  { value: "used", label: "Used" },
];

const customSelectStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
    color: state.isSelected ? "white" : "#A09D9D",
    fontWeignt: state.isSelected ? "600" : "500",
    background: state.isSelected ? "rgba(0,0,0, 0.7)" : "rgba(0,0,0)",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    // width: "100%",

    display: "flex",
    backgroundColor: " rgba(255, 255, 255, 0.01)",
    width: "100%",
    borderRadius: "1rem",
    border: "1px solid rgba(255, 255, 255, 0.08)",
    padding: "8px",
    marginTop: "13px",
    fontFamily: "Archivo",
  }),
  menu: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: " rgba(255, 255, 255, 0.01)",
    fontFamily: "Archivo",
  }),
  // singleValue: (provided: any, state: any) => {
  //   const opacity = state.isDisabled ? 0.5 : 1;
  //   const transition = "opacity 300ms";

  //   return { ...provided, opacity, transition };
  // },
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (provided: any, state: any) => ({
    ...provided,
    color: "#ffffff",
    textColor: "#ffffff",
    fontWeight: "600",
  }),
};

const InventoryCard = React.memo(function (props: any) {
  const { data, dataIndex, isCenterSlide, swipeTo } = props;
  console.log(props);
  const { imgUrl } = data[dataIndex];

  const [loadDelay, setLoadDelay] = React.useState<any>();
  const [removeDelay, setRemoveDelay] = React.useState<any>();
  const [loaded, setLoaded] = React.useState(false);

  const [registered, setRegistered] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  React.useEffect(() => {
    if (isCenterSlide) {
      clearTimeout(removeDelay);
      setLoadDelay(setTimeout(() => setLoaded(true), 100));
    } else {
      clearTimeout(loadDelay);
      if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 100));
    }
  }, [isCenterSlide]);

  React.useEffect(() => () => {
    clearTimeout(removeDelay);
    clearTimeout(loadDelay);
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [sellModalOpen, setSellModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeSellModal = () => {
    setSellModalOpen(false);
  };

  const handleRegisterButtonClick = (index: any) => {
    setModalOpen(true);
  };

  const handleSellButtonClick = (index: any) => {
    setSellModalOpen(true);
  };

  const ChipRegister = (index: any) => {
    setRegistered(true);
  };

  return (
    <div
      style={{
        width: "100%",
        userSelect: "none",
      }}
      className="my-slide-component"
    >
      <Link to="/inventory/1">
        <div
          className={`border-[1px] border-[#A09D9D] rounded-[32px] shadow-lg h-full w-[100%] mx-auto px-[30px] py-[32px] gap-[16px] cover ${
            isCenterSlide && loaded ? "off" : "on"
          }`}
        >
          <div className="relative">
            <div className="flex justify-between">
              <h5 className="text-white clash-font text-[32px] font-semibold">
                {data[dataIndex].name}
              </h5>
            </div>

            <Typography
              children={paragraph}
              className="text-[#A09D9D] text-[16px] leading-[24px]"
            />
          </div>

          {/* <LazyLoadImage
          src={cover}
          alt="goods"
          className=" rounded-lg img-lazy mx-auto max-h-[50rem] "
          effect="blur"
          draggable={false}
        /> */}

          <video
            className="mx-auto max-h-[50rem] w-[250px] md:w-[450px] rounded-lg py-3"
            draggable={false}
            src={imgUrl}
            autoPlay
            loop
          />

          <div className="flex justify-between items-end">
            <Typography
              children="Edition 1/100"
              className="text-white/70 hidden md:inline-block"
            />
            <div className="flex gap-3">
              <Button
                text="Sell"
                className="border-white/10 px-7 bg-white/5 "
                onClick={() => handleSellButtonClick(dataIndex)}
              />
              {registered ? (
                <Button
                  onClick={() => handleRegisterButtonClick(dataIndex)}
                  text="Registered"
                  imgSrc={Chip}
                  className=" border-white/40  text-lg shadow-[inset_1px_1px_8px_rgba(255,255,255,0.40)] bg-white/10"
                  disabled
                />
              ) : (
                <Button
                  onClick={() => handleRegisterButtonClick(dataIndex)}
                  text="Register"
                  imgSrc={Chip}
                  className=" border-white/40  text-lg shadow-[inset_1px_1px_8px_rgba(255,255,255,0.40)] bg-white/10"
                />
              )}
            </div>
          </div>
        </div>
      </Link>

      {
        <>
          <Modal __isOpen={modalOpen} dispatchModal={() => {}}>
            <div className="relative w-full max-w-xl p-2 md:px-4 h-full md:h-auto  ">
              <div className="relative bg-[#0E0E0E] rounded-[32px] shadow border-[1px] border-[#A09D9D] p-2 md:p-5 pt-8">
                <div className="flex items-center justify-between px-2 md:px-5">
                  <div className="flex items-center gap-2 md:gap-3 font-semibold text-xl md:text-2xl leading-8">
                    <img
                      src={Chip}
                      alt="chip"
                      className="w-[25px]  h-[25px] "
                    />
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
                    <CgCloseO className="text-2xl text-white/50 hover:text-white/90 transition-all duration-200 cursor-pointer" />
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <div className="py-6 px-2 md:px-6 lg:px-8">
                  <div className="flex relative">
                    {!registered ? (
                      <img src={HoodieImg} alt="goods" className="w-[80%]" />
                    ) : (
                      <img src={HoodieImg} alt="goods" className="w-full" />
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

          <MantineModal
            opened={sellModalOpen}
            onClose={() => {}}
            withCloseButton={false}
            classNames={{
              inner: "bg-[#000000]/30 backdrop-blur	",
              modal:
                "bg-transparent w-full max-w-lg h-full  rounded-3xl text-white overflow-auto",
            }}
          >
            <div className="relative w-full max-w-lg h-full md:h-auto   my-8 ">
              <div className="relative  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#212121]/90 to-white/10   rounded-[32px]  shadow border-[1px] border-white/10  h-fit max-h-[calc(100vh-100px)] overflow-hidden inline-block">
                <div className="overflow-y-auto mt-2   p-8">
                  <div className="flex justify-between items-center ">
                    <div className="flex items-start md:items-center">
                      <Typography
                        children="Sell your phygital piece"
                        className="text-white  text-xl clash-font font-semibold w-full"
                      />
                    </div>

                    <button
                      type="button"
                      className="top-3 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                      data-modal-toggle="authentication-modal"
                      onClick={() => {
                        closeSellModal();
                      }}
                    >
                      <CgCloseO className="text-2xl text-white/50 hover:text-white/90 transition-all duration-200 cursor-pointer" />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div>
                    {/* content */}
                    <Typography
                      children="Picture"
                      className="text-white/70 font-semibold mt-4 "
                    />
                    <div className="flex justify-start gap-4 mt-3">
                      <UploadImageButton
                        id={1}
                        isSelect={true}
                      ></UploadImageButton>
                      <UploadImageButton
                        id={2}
                        isSelect={false}
                      ></UploadImageButton>
                      <UploadImageButton
                        id={3}
                        isSelect={false}
                      ></UploadImageButton>
                      <UploadImageButton
                        id={4}
                        isSelect={false}
                      ></UploadImageButton>
                    </div>
                    <Typography
                      children="Location"
                      className="text-white/70 font-semibold mt-4 "
                    />
                    <Autocomplete
                      // apiKey={GOOGLE_MAP_API_KEY}
                      onPlaceSelected={(place) => {
                        console.log(place);
                      }}
                      className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.01]  mt-3 outline-none text-md placeholder:text-white/50 
                      text-white leading-6 tracking-wider"
                    />
                    <div className="w-full">
                      <Typography
                        children="Condition"
                        className="text-white/70 font-semibold mt-4 "
                      />
                      <Select
                        value={selectedOption}
                        onChange={(option: any) => {
                          setSelectedOption(option);
                        }}
                        options={options}
                        styles={customSelectStyles}
                        className="text-white w-full "
                      />
                    </div>

                    <textarea
                      className="w-full mt-4 h-[100px] p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.01]  outline-none text-md placeholder:text-white/50 
                      text-white leading-6 tracking-wider"
                      placeholder="Additional notes about the condition of your garment..."
                    ></textarea>

                    <Typography
                      children="Price (including shipping)"
                      className="text-white/70 font-semibold mt-4 "
                    />

                    <div className="flex items-center gap-3 mt-3">
                      <p className="text-white/70 text-xl">$</p>
                      <input
                        type="number"
                        className="max-w-[120px]  p-3 px-5 rounded-2xl border-[1px] border-white/10 bg-white/[.01]  outline-none text-md placeholder:text-white/50 
                        text-white leading-6 tracking-wider font-semibold"
                        placeholder="200"
                      ></input>
                    </div>

                    <Button
                      text="Sell your Price"
                      className="mt-8 flex-row-reverse gradient-button"
                      imgSrc={RightArrowImg}
                      onClick={() => {
                        ChipRegister(dataIndex);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="relative w-[400px] h-full md:h-auto max-h-[95vh] overflow-auto ">
              <div className="relative bg-[#0E0E0E] rounded-[32px] shadow h-[800px] border-[1px] border-[#A09D9D] p-[15px]">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="authentication-modal"
                  onClick={() => {
                    closeSellModal();
                  }}
                >
                  <img src={CloseButton} alt="closeButton" className="p-3" />
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="py-6 px-3 md:px-4">
                  <div className="flex items-center">
                    <h3 className="ml-2 text-xl font-medium text-white">
                      Sell your phygital piece
                    </h3>
                  </div>
                  <Typography
                    children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi."
                    className="text-[#A09D9D] mt-3"
                  />
                  <Typography
                    children="Picture"
                    className="text-[#A09D9D] mt-3"
                  />
                  <div className="flex justify-between mt-3">
                    <UploadImageButton
                      id={1}
                      isSelect={true}
                    ></UploadImageButton>
                    <UploadImageButton
                      id={2}
                      isSelect={false}
                    ></UploadImageButton>
                    <UploadImageButton
                      id={3}
                      isSelect={false}
                    ></UploadImageButton>
                    <UploadImageButton
                      id={4}
                      isSelect={false}
                    ></UploadImageButton>
                  </div>
                  <Typography
                    children="Location"
                    className="text-[#A09D9D] mt-3"
                  />
                  <Autocomplete
                    // apiKey={GOOGLE_MAP_API_KEY}
                    onPlaceSelected={(place) => {
                      console.log(place);
                    }}
                    className="w-full p-3 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
                  />
                  <Typography
                    children="Condition"
                    className="text-[#A09D9D] mt-3"
                  />
                  <Select
                    value={selectedOption}
                    onChange={(option: any) => {
                      setSelectedOption(option);
                    }}
                    options={options}
                    styles={customSelectStyles}
                    className="text-white w-full md:w-[50%]"
                  />

                  <textarea
                    className="w-full h-[100px] p-2 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-5"
                    placeholder="Additional notes about the condition of your garment..."
                  ></textarea>

                  <Typography
                    children="Price(include shipping)"
                    className="text-[#A09D9D] mt-3"
                  />

                  <div className="flex items-center">
                    <p className="text-[#A09D9D] text-xl">$</p>
                    <input
                      type="number"
                      className="w-[100px] p-3 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3 ml-3"
                    ></input>
                  </div>

                  <Button
                    text="Sell your Price"
                    className="mt-8 flex-row-reverse"
                    imgSrc={RightArrowImg}
                    onClick={() => {
                      ChipRegister(dataIndex);
                    }}
                  />
                </div>
              </div>
            </div> */}
          </MantineModal>
        </>
      }
      {isCenterSlide && (
        <>
          <div>
            <img
              src={LeftButton}
              alt="left"
              className="absolute top-[50%] -left-5 md:-left-8 sm:left-[calc(50)] z-50 cursor-pointer  "
              // @ts-ignore
              onClick={() => swipeTo(-1)}
            />
          </div>
          <div>
            <img
              src={RightButton}
              alt="right"
              className="absolute top-[50%] -right-5 md:-right-8 z-50 cursor-pointer"
              // @ts-ignore
              onClick={() => swipeTo(1)}
            />
          </div>
        </>
      )}
    </div>
  );
});

export default InventoryCard;
