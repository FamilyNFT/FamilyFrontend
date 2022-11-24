import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Select from "react-select";

import Typography from "components/Typography";
import Button from "components/Button";
import Modal from "components/Modal";

import Chip from "assets/img/symbols/Scan.png";
import CloseButton from "assets/img/symbols/close.png";
import ChipPhone from "assets/img/symbols/chip-phone.png";
import FamilyMark from "assets/img/symbols/family.png";

import UploadImageButton from "components/UploadImageButton";
import RightArrowImg from "assets/img/symbols/rightArrow.png";

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.";

const GOOGLE_MAP_API_KEY = "AIzaSyCdestPnok8TkEx7sl4fENuFaQuS5uXaH4";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customSelectStyles = {
  option: (provided: any, state: any) => ({
    ...provided,
    borderBottom: "1px solid white",
    color: state.isSelected ? "white" : "#A09D9D",
    background: "#0E0E0E",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: "100%",
    display: "flex",
    border: "1px solid white",
    borderRadius: "20px",
    padding: "8px",
    marginTop: "13px",
  }),
  singleValue: (provided: any, state: any) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

const InventoryCard = React.memo(function (props: any) {
  const { data, dataIndex, isCenterSlide } = props;
  const { cover } = data[dataIndex];

  const [loadDelay, setLoadDelay] = React.useState<any>();
  const [removeDelay, setRemoveDelay] = React.useState<any>();
  const [loaded, setLoaded] = React.useState(false);

  const [registered, setRegistered] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState(null);

  React.useEffect(() => {
    if (isCenterSlide) {
      clearTimeout(removeDelay);
      setLoadDelay(setTimeout(() => setLoaded(true), 1000));
    } else {
      clearTimeout(loadDelay);
      if (loaded) setRemoveDelay(setTimeout(() => setLoaded(false), 1000));
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
      <div
        className={`border-[1px] border-[#A09D9D] rounded-[32px] shadow-lg h-full w-[100%] mx-auto px-[30px] py-[32px] gap-[16px] cover ${
          isCenterSlide && loaded ? "off" : "on"
        }`}
      >
        <div>
          <div className="flex justify-between">
            <h5 className="text-white clash-font text-[32px] font-semibold">
              {data[dataIndex].title}
            </h5>
          </div>

          <Typography
            children={paragraph}
            className="text-[#A09D9D] text-[16px] leading-[24px]"
          />
        </div>

        <LazyLoadImage
          src={cover}
          alt="goods"
          className="h-[250px] md:h-[450px] w-[250px] md:w-[450px] rounded-lg img-lazy"
          effect="blur"
          draggable={false}
        />

        {/* <img
          className="h-[250px] md:h-[450px] w-[250px] md:w-[450px] rounded-lg "
          draggable={false}
          src={cover}
          alt=""
        /> */}

        <div className="flex justify-between items-end">
          <Typography
            children="Edition 1/100"
            className="text-white hidden md:inline-block"
          />
          <div className="flex">
            <Button
              text="Sell"
              onClick={() => handleSellButtonClick(dataIndex)}
            />
            {registered ? (
              <Button
                onClick={() => handleRegisterButtonClick(dataIndex)}
                text="Registered"
                imgSrc={Chip}
                className="ml-3"
                disabled
              />
            ) : (
              <Button
                onClick={() => handleRegisterButtonClick(dataIndex)}
                text="Register"
                imgSrc={Chip}
                className="ml-3"
              />
            )}
          </div>
        </div>
      </div>
      {
        <>
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
                        ChipRegister(dataIndex);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </Modal>
          <Modal __isOpen={sellModalOpen} dispatchModal={() => {}}>
            <div className="relative w-[400px] h-full md:h-auto max-h-[95vh] overflow-auto ">
              <div className="relative bg-[#0E0E0E] rounded-[32px] shadow h-[800px] border-[1px] border-[#A09D9D] p-[15px]">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
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
                    <h3 className="ml-2 text-xl font-medium text-gray-900 dark:text-white">
                      Sell your phisical piece
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
            </div>
          </Modal>
        </>
      }
    </div>
  );
});

export default InventoryCard;