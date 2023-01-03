// @ts-nocheck
import { ReactElement, useCallback, useEffect, useState } from "react";

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
import FamilyMark from "assets/img/symbols/family.png";
import chevron from "assets/svg/chevron-right.svg";

import Button from "components/Button";
import Modal from "components/Modal";
import FirstStep from "components/StepperComponents/FirstStep";
import SecondStep from "components/StepperComponents/SecondStep";
import ThirdStep from "components/StepperComponents/ThirdStep";
import { useAppDispatch, useAppSelector } from "redux/hooks/redux-hooks";
import { setCheckout, setVariant } from "redux/product/reducer";
import Web3 from "web3";
import { setAuth } from "redux/auth/reducer";

const ProductDetail: React.FC = (props: any): ReactElement => {
  const [color, setColor] = useState<String>("black");
  const [size, setSize] = useState<String>("XS");
  const [loading, setLoading] = useState<boolean>(false);
  const product = useAppSelector((state) => state.product.product);
  const dispatch = useAppDispatch();
  const [selectedVariant, setSelectedVariant] = useState<any>(
    product?.variants[0]
  );
  const auth = useAppSelector((state) => state.auth.account);
  const connectWallet = async () => {
    const { ethereum } = window as any;
    if (!ethereum) {
      window.alert("You must install UP browser to use this website");
      return;
    }
    let web3 = new Web3(ethereum);

    const addr = await web3.eth.requestAccounts();
    // let universalProfile = await getProfile(addr[0]);
    if (addr[0]) {
      dispatch(setAuth(addr[0]));
    }
  };
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
  const createCheckout = async () => {
    console.log(selectedVariant.id);
    let checkout = await fetch("http://localhost:8080/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: selectedVariant.id }),
    });
    let response = await checkout.json();
    console.log(response);
    dispatch(setCheckout(response));
    // console.log(checkoutId);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };
  const options = product?.variants?.map((variant) => ({
    title: variant.title,
    value: variant.id,
  }));
  useEffect(() => {
    console.log(selectedVariant);
    dispatch(setVariant(selectedVariant));
  }, [selectedVariant]);

  return (
    <Layout>
      {product ? (
        <>
          <div className=" container mx-auto ">
            <div className="md:flex items-center max-w-lg sm:max-w-none mx-auto  mt-5  z-50">
              <h1 className="text-white text-[55px] md:text-[75px] pt-[10px] md:pt-0 clash-font font-semibold leading-[0.8] z-50">
                {product?.title}
              </h1>
              <p className="text-white/70 text-[20px] font-semibold mt-5 md:mt-0 ml-0 md:ml-16 z-50">
                50/80 Sold
              </p>
            </div>

            <div className="flex flex-col items-center sm:items-start sm:flex-row my-9 gap-8 ">
              <div className="w-full md:w-1/2 max-w-lg md:max-w-lg">
                <div className=" border rounded-3xl  border-white/10 p-5 ">
                  <video
                    src={product?.video}
                    alt="detail"
                    autoPlay
                    loop
                    className="w-full h-full"
                  />

                  {/* <div className="flex justify-center items-center -mt-20 gap-6">
                <img
                  src={LeftCircleButton}
                  alt="left-circle"
                  className="cursor-pointer w-10 md:w-auto max-w-[72px] max-h-[72px]"
                ></img>
                <div className="flex gap-3 items-center">
                  <img
                    src="https://i.ibb.co/0Bqtcyv/image-3.png"
                    alt="detail"
                    className="w-[30%] max-w-[72px] max-h-[72px] h-[30%] object-cover border border-white/10 rounded-lg"
                  />
                  <img
                    src="https://i.ibb.co/0Bqtcyv/image-3.png"
                    alt="detail"
                    className="w-[30%] max-w-[72px] max-h-[72px] h-[30%] object-cover border border-white/10 rounded-lg"
                  />
                  <img
                    src="https://i.ibb.co/0Bqtcyv/image-3.png"
                    alt="detail"
                    className="w-[30%] max-w-[72px] max-h-[72px] h-[30%] object-cover border border-white/10 rounded-lg"
                  />
                </div>

                <img
                  src={RightCircleButton}
                  alt="right-circle"
                  className="cursor-pointer w-10 md:w-auto max-w-[72px] max-h-[72px]"
                ></img>
              </div> */}
                </div>
              </div>

              <div className="w-fit  md:w-1/2 archivo-font flex flex-col gap-6 ">
                <div>
                  <h5 className="text-white text-2xl font-semibold">
                    Description
                  </h5>
                  <Typography
                    children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
                    className="text-white/50 font-medium text-xl max-w-lg mt-4"
                  />
                </div>
                <div className="mt-4">
                  <h5 className="text-white text-2xl font-semibold ">
                    Details
                  </h5>

                  <div className="text-white gap-7 flex mt-4">
                    <div class="flex gap-2">
                      {/* <h6 className="text-xl text-white/70 font-semibold">Drop</h6> */}
                      <img src={FlowerImg} alt="flower" />
                      <p className="text-base text-white/50 font-semibold">
                        100% Cotton
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {/* <h6 className="text-xl text-white/70 font-semibold">Drop</h6> */}
                      <img src={SparkleImg} alt="flower" />
                      <p className="text-base text-white/50 font-semibold">
                        Made in Philipines
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h5 className="text-white text-2xl font-semibold ">Size</h5>

                  <div class="text-white gap-7 flex mt-4">
                    <div class="flex flex-wrap gap-2">
                      {/* <h6 className="text-xl text-white/70 font-semibold">Drop</h6> */}
                      {product?.variants.map((variant) => {
                        return (
                          <div
                            onClick={() => {
                              setSelectedVariant(variant);
                            }}
                            className={
                              selectedVariant.title === variant.title
                                ? "active-size-button"
                                : "size-button text-white/50"
                            }
                          >
                            {variant.title}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                {/* <div className="mt-4">
              <button className="flex items-center gap-3 border-[#B7B7B7] border-[1px]    justify-center  px-6 h-[50px] rounded-full  text-white whitespace-nowrap  archivo-font font-semibold text-lg capitalize ">
                <img src={FamilyMark} alt="" className="w-6" />
                Radical Transparency
                <img src={chevron} alt="" className="w-3" />
              </button>
            </div> */}
                <div className="mt-2 md:mt-4">
                  {auth ? (
                    <Button
                      rightImgSrc={RightArrow}
                      text="Shop Now"
                      className=" text-lg"
                      isLoading={loading}
                      onClick={async () => {
                        setLoading(true);
                        await createCheckout();
                        setLoading(false);
                        setModalOpen(true);
                      }}
                    />
                  ) : (
                    <Button
                      // rightImgSrc={RightArrow}
                      text="Connect Wallet"
                      className=" text-lg"
                      onClick={async () => {
                        await connectWallet();
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/*  modal*/}
          <Modal __isOpen={modalOpen} dispatchModal={() => {}}>
            <div className="relative w-full max-w-screen-lg h-full md:h-auto   my-8 ">
              {/* <div className=" overflow-auto"> */}
              <div className="relative overflow-y-scroll bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#212121]/90 to-white/10   rounded-[32px]  shadow border-[1px] border-white/10  max-h-[100vh] overflow-hidden inline-block">
                <div className=" mt-2 h-[42rem]  p-8">
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
                      className="top-3 right-2.5  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                      data-modal-toggle="authentication-modal"
                      onClick={() => {
                        closeModal();
                        setActiveStep(0);
                      }}
                    >
                      <img
                        src={CloseButton}
                        alt="closeButton"
                        className="p-1 sm:p-3"
                      />
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  <Typography
                    children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
                    className="text-white"
                  />

                  {/* left card */}
                  <div className="flex flex-col gap-4 sm:flex-row  mt-5">
                    <div className="w-full md:w-1/2 h-full rounded-3xl border-[1px] border-white/10 p-[25px]  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[.08] to-white/[.01] ">
                      <div className="flex justify-between items-center">
                        <Typography
                          children={product.title}
                          className="text-white text-xl clash-font font-semibold"
                        />
                        <Typography
                          children="3"
                          className="text-white/70 text-xl clash-font font-semibold"
                        />
                      </div>

                      <video
                        src={product?.video}
                        loop
                        autoPlay
                        alt="detail"
                        className="mb-5 "
                      />
                      <div className="flex flex-wrap gap-x-4 gap-y-3">
                        <div className="flex gap-2 font-medium text-lg 	">
                          <img src={PalletImg} alt="pallete" />
                          <Typography
                            children="Black"
                            className="text-white/70 clash-font whitespace-nowrap"
                          />
                        </div>
                        <div className="flex gap-2">
                          <img src={ScissorImg} alt="scissor" />
                          <Typography
                            children="XS"
                            className="text-white/70 clash-font whitespace-nowrap"
                          />
                        </div>

                        <div className="flex gap-2">
                          <img src={FlowerImg} alt="material" />
                          <Typography
                            children="100% Cotton"
                            className="text-white/70 clash-font whitespace-nowrap"
                          />
                        </div>
                        <div className="flex gap-2">
                          <img src={SparkleImg} alt="sparkle" />
                          <Typography
                            children="Made in Philippines"
                            className="text-white/70 clash-font whitespace-nowrap"
                          />
                        </div>
                      </div>
                    </div>
                    {/* right form */}
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

                  <div className="w-full md:w-1/2">
                    <Stepper
                      activeStep={activeStep}
                      styleConfig={{
                        activeBgColor: "transparent",
                        activeTextColor: "#fff",
                        inactiveBgColor: "transparent",
                        inactiveTextColor: "#A09D9D",
                        completedBgColor: "transparent",
                        completedTextColor: "#A09D9D",
                        size: "2em",
                      }}
                      stepClassName={"stepper__step"}
                    >
                      <Step label="Shipping Details" />
                      <Step label="Payment Details" />
                    </Stepper>
                  </div>

                  {/* <div className="flex justify-between items-center mt-5 md:-mt-20">
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
              </div> */}
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <div className="text-white mt-5 text-center">
          {" "}
          No product has been selected please initiate an order from Store page
        </div>
      )}
    </Layout>
  );
};

export default ProductDetail;
