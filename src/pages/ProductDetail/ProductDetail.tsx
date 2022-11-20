// @ts-nocheck
import { ReactElement, useState } from "react";

import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";

import Layout from "components/Layout";
import Typography from "components/Typography";
import StepperActionButtons from "components/StepperActionButtons";

import LeftCircleButton from "assets/img/symbols/left-circle.png";
import RightCircleButton from "assets/img/symbols/right-circle.png";
import FlowerImg from "assets/img/symbols/Flower.png";
import SparkleImg from "assets/img/symbols/Sparkle.png";
import PalletImg from "assets/img/symbols/Palette.png";
import ScissorImg from "assets/img/symbols/Scissors.png";
import BlackColor from "assets/img/symbols/black-color.png";
import WhitieColor from "assets/img/symbols/white-color.png";
import PurpleColor from "assets/img/symbols/purple-color.png";
import RightArrow from "assets/img/symbols/rightArrow.png";
import TshirtImg from "assets/img/symbols/TShirt.png";
import CloseButton from "assets/img/symbols/close.png";
import RightArrowImg from "assets/img/symbols/rightArrow.png";

import Button from "components/Button";
import Modal from "components/Modal";
import FirstStep from "components/StepperComponents/FirstStep";
import SecondStep from "components/StepperComponents/SecondStep";
import ThirdStep from "components/StepperComponents/ThirdStep";

const ProductDetail: React.FC = (props: any): ReactElement => {
  const [color, setColor] = useState<String>("black");
  const [size, setSize] = useState<String>("XS");

  const colorButtonClicked = (color: string) => {
    setColor(color);
  };

  const sizeButtonClicked = (size: string) => {
    setSize(size);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  const [stepWizard, setStepWizard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance: any) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e: any) => {
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };

  return (
    <Layout>
      <div className="block md:flex items-end w-full text-center">
        <h1 className="text-white text-[55px] md:text-[75px] clash-font font-semibold leading-[0.8]">
          The Hoodie
        </h1>
        <Typography
          children="50/80 Sold"
          className="text-white pl-[50px] text-[20px]"
        />
      </div>

      <div className="flex flex-wrap px-3 md:px-20 mt-8">
        <div className="border-[1px] border-[#A09D9D] rounded-[32px] shadow-lg h-full custom-drop mx-auto px-[30px] py-[32px] gap-[16px] cover w-full md:w-1/2">
          <img
            src="https://i.ibb.co/0Bqtcyv/image-3.png"
            alt="detail"
            className="w-full"
          />

          <div className="flex justify-center -mt-20">
            <img
              src={LeftCircleButton}
              alt="left-circle"
              className="cursor-pointer"
            ></img>
            <img
              src={RightCircleButton}
              alt="right-circle"
              className="pl-[30px] cursor-pointer"
            ></img>
          </div>
        </div>

        <div className="w-full md:w-1/2  p-2 md:pl-20">
          <Typography
            children="Jumper"
            className="text-[#A09D9D] text-[20px]"
          />

          <h5 className="text-white text-[20px] mt-[25px]">Description</h5>
          <Typography
            children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
            className="text-[#A09D9D] text-[17px] w-full md:w-[60%]"
          />

          <h5 className="text-white text-[20px] mt-[30px]">Details</h5>
          <div className="flex w-full md:w-[50%] justify-between">
            <div className="flex pt-3 ">
              <img src={FlowerImg} alt="flower" />
              <Typography
                children="100% Coton"
                className="text-[#A09D9D] text-[16px]"
              />
            </div>
            <div className="flex pt-3">
              <img src={SparkleImg} alt="sparkle" />
              <Typography
                children="Made In..."
                className="text-[#A09D9D] text-[16px]"
              />
            </div>
          </div>

          <h5 className="text-white text-[20px] mt-[30px]">Colors</h5>
          <div className="flex mt-5">
            <div
              className={`${
                color === "black" ? "text-white bg-[#2e2e2e]" : "text-[#A09D9D]"
              } border-[#A09D9D] rounded-[16px] border-[1px] w-[67px] h-[76px] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer`}
              onClick={() => {
                colorButtonClicked("black");
              }}
            >
              <img src={BlackColor} alt="black" />
              Black
            </div>
            <div
              className={`${
                color === "white" ? "text-white bg-[#2e2e2e]" : "text-[#A09D9D]"
              } border-[#A09D9D] rounded-[16px] border-[1px] w-[67px] h-[76px] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer ml-5`}
              onClick={() => {
                colorButtonClicked("white");
              }}
            >
              <img src={WhitieColor} alt="white" />
              White
            </div>
            <div
              className={`${
                color === "purple"
                  ? "text-white bg-[#2e2e2e]"
                  : "text-[#A09D9D]"
              } border-[#A09D9D] rounded-[16px] border-[1px] w-[67px] h-[76px] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer ml-5`}
              onClick={() => {
                colorButtonClicked("purple");
              }}
            >
              <img src={PurpleColor} alt="purple" />
              Purple
            </div>
          </div>

          <h5 className="text-white text-[20px] mt-[35px]">Size</h5>
          <div className="flex mt-5">
            <div
              className={`${
                size === "XS" ? "text-white bg-[#2e2e2e]" : "text-[#A09D9D]"
              } border-[#A09D9D] rounded-[16px] border-[1px] w-[67px] h-[41px] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer`}
              onClick={() => {
                sizeButtonClicked("XS");
              }}
            >
              XS
            </div>
            <div
              className={`${
                size === "S" ? "text-white bg-[#2e2e2e]" : "text-[#A09D9D]"
              } border-[#A09D9D] rounded-[16px] border-[1px] w-[67px] h-[41px] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer ml-5`}
              onClick={() => {
                sizeButtonClicked("S");
              }}
            >
              S
            </div>
            <div
              className={`${
                size === "L" ? "text-white bg-[#2e2e2e]" : "text-[#A09D9D]"
              } border-[#A09D9D] rounded-[16px] border-[1px] w-[67px] h-[41px] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer ml-5`}
              onClick={() => {
                sizeButtonClicked("L");
              }}
            >
              L
            </div>
            <div
              className={`${
                size === "XL" ? "text-white bg-[#2e2e2e]" : "text-[#A09D9D]"
              } border-[#A09D9D] rounded-[16px] border-[1px] w-[67px] h-[41px] p-[8px] gap-[4px] flex flex-col items-center  cursor-pointer ml-5`}
              onClick={() => {
                sizeButtonClicked("XL");
              }}
            >
              XL
            </div>
          </div>

          <div className="flex justify-center mb-10 md:mb-0">
            <Button
              imgSrc={RightArrow}
              text="Shop Now"
              className="flex-row-reverse mt-10"
              onClick={() => {
                setModalOpen(true);
              }}
            />
          </div>
        </div>
      </div>

      <Modal __isOpen={modalOpen} dispatchModal={() => {}}>
        <div className="relative w-[350px] md:w-[800px] h-full md:h-auto mt-5 max-h-[95vh] overflow-auto">
          <div className="relative bg-[#0E0E0E] rounded-[32px] shadow border-[1px] border-[#A09D9D] p-[25px]">
            <div className="flex justify-between items-start md:items-center">
              <div className="flex items-start md:items-center">
                <img
                  src={TshirtImg}
                  className="w-[30px] h-[30px]"
                  alt="Tshirt"
                />
                <Typography
                  children="Purchase your phygital piece"
                  className="text-white ml-3 text-[20px] md:text-[26px] clash-font font-semibold w-full"
                />
              </div>
              <button
                type="button"
                className="top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
                onClick={() => {
                  closeModal();
                  setActiveStep(0);
                }}
              >
                <img src={CloseButton} alt="closeButton" className="p-3" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <Typography
              children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
              className="text-white"
            />
            <div className="flex flex-wrap mt-5">
              <div className="w-full  md:w-1/2 h-full rounded-3xl border-[1px] border-[#A09D9D] p-[25px]">
                <div className="flex justify-between items-center">
                  <Typography
                    children="The Hoodie"
                    className="text-white text-xl clash-font font-semibold"
                  />
                  <Typography
                    children="3"
                    className="text-white text-xl clash-font font-semibold"
                  />
                </div>

                <img
                  src="https://i.ibb.co/0Bqtcyv/image-3.png"
                  alt="detail"
                  className="w-full h-full"
                />
                <div className="flex">
                  <div className="flex">
                    <img src={PalletImg} alt="pallete" />
                    <Typography
                      children="Black"
                      className="text-[#A09D9D] clash-font ml-2"
                    />
                  </div>
                  <div className="flex ml-4">
                    <img src={ScissorImg} alt="scissor" />
                    <Typography
                      children="XS"
                      className="text-[#A09D9D] clash-font ml-2"
                    />
                  </div>
                </div>

                <div className="md:flex mt-3">
                  <div className="flex">
                    <img src={FlowerImg} alt="material" />
                    <Typography
                      children="100% Cotton"
                      className="text-[#A09D9D] clash-font ml-2"
                    />
                  </div>
                  <div className="flex mt-2 md:mt-0 md:ml-4">
                    <img src={SparkleImg} alt="sparkle" />
                    <Typography
                      children="Made in Philippines"
                      className="text-[#A09D9D] clash-font ml-2"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 h-full px-5">
                <StepWizard
                  instance={assignStepWizard}
                  onStepChange={handleStepChange}
                >
                  <FirstStep />
                  <SecondStep />
                  <ThirdStep />
                </StepWizard>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5 md:-mt-20">
              <Stepper
                activeStep={activeStep}
                styleConfig={{
                  activeBgColor: "transparent",
                  activeTextColor: "#fff",
                  inactiveBgColor: "transparent",
                  inactiveTextColor: "#A09D9D",
                  completedBgColor: "#transparent",
                  completedTextColor: "#A09D9D",
                  size: "2em",
                }}
                stepClassName={"stepper__step"}
              >
                <Step label="Shipping Details" />
                <Step label="Payment Details" />
              </Stepper>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default ProductDetail;
