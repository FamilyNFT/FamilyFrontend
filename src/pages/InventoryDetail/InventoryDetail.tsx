// @ts-nocheck
import React, { ReactElement, useEffect, useState } from "react";

import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import Autocomplete from "react-google-autocomplete";

import Layout from "components/Layout";
import Typography from "components/Typography";

import Chip from "assets/svg/scan.svg";
import ChipPhone from "assets/img/symbols/chip-phone.png";
import LeftCircleButton from "assets/svg/left-arrow.svg";
import RightCircleButton from "assets/svg/right-arrow.svg";
import FlowerImg from "assets/img/symbols/Flower.png";
import SparkleImg from "assets/img/symbols/Sparkle.png";
import PalletImg from "assets/img/symbols/Palette.png";
import ScissorImg from "assets/img/symbols/Scissors.png";
import Modal from "components/Modal";

import RightArrow from "assets/img/symbols/rightArrow.png";
import TshirtImg from "assets/img/symbols/TShirt.svg";
import HoodieImg from "assets/img/black-hoodie.png";
import Select from "react-select";

import FamilyMark from "assets/img/symbols/family.png";
import { BiChevronRight } from "react-icons/bi";
import { CgCloseO } from "react-icons/cg";
import UploadImageButton from "components/UploadImageButton";
import RightArrowImg from "assets/img/symbols/rightArrow.png";

import Button from "components/Button";
import FirstStep from "components/StepperFormComponents/FirstStep";
import SecondStep from "components/StepperFormComponents/SecondStep";
import ThirdStep from "components/StepperFormComponents/ThirdStep";
import FourthStep from "components/StepperFormComponents/FourthStep";
import { Modal as MantineModal } from "@mantine/core";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useParams } from "react-router-dom";
import web3 from "hooks/useWeb3";
import abi from "../../utils/abis/familynft.json";
import { ethers } from "ethers";
import {
  marketContractAddress,
  useNFTContract,
  useWeb3MarketplaceContract,
  useWeb3NFTContract,
} from "hooks/marketplaceContract";
import { useAppSelector } from "redux/hooks/redux-hooks";

const InventoryDetail: React.FC = (props: any): ReactElement => {
  const [color, setColor] = useState<String>("black");
  const { address, id } = useParams();
  const [data, setData] = useState({});
  const [price, setPrice] = useState();
  const [isOperator, setOperator] = useState(false);
  let contract = useNFTContract(address);
  let contract1 = useWeb3NFTContract(address);
  const marketContract = useWeb3MarketplaceContract();
  console.log(marketContract);
  const auth = useAppSelector((state) => state.auth.account);
  const [approvalLoading, setApproval] = useState(false);
  // console.log(contract);

  const options = [
    { value: "new", label: "New" },
    { value: "used", label: "Used" },
  ];

  const getDetails = async (address, id) => {
    const lsp8 = new web3.eth.Contract(abi.abi as any, address);
    let _id = parseInt(id) - 1;
    let hex = ethers.utils.hexZeroPad(ethers.utils.hexlify(_id), 32);
    // let byte = web3.hexZ(hex, 32);
    console.log(hex);
    const uri = await lsp8.methods.getMetadata(hex).call();
    let response = await fetch(uri);
    let data = await response.json();
    return data;
  };
  const getOperator = async (address, id) => {
    const lsp8 = new web3.eth.Contract(abi.abi as any, address);
    let _id = parseInt(id);
    let hex = ethers.utils.hexZeroPad(ethers.utils.hexlify(_id), 32);
    // let byte = web3.hexZ(hex, 32);
    console.log(hex);
    const data = await contract.isOperatorFor(address, hex);
    return data;
  };
  useEffect(() => {
    if (address && id) {
      getDetails(address, id).then((res) => setData(res));
    }
  }, [address, id]);
  useEffect(() => {
    if (address && id) {
      getOperator(marketContractAddress, id).then((res) => setOperator(res));
    }
  }, [address, id]);
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
  const product = { variants: ["XXS", "XS", "S", "M", "L", "XL", "XXL"] };

  const colorButtonClicked = (color: string) => {
    setColor(color);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [historyModalOpen, setHistoryModalOpen] = useState(false);
  const [sellModal, setSellModal] = useState(false);
  const [registered, setRegistered] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  };

  const [stepWizard, setStepWizard] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const assignStepWizard = (instance: any) => {
    setStepWizard(instance);
  };

  const handleStepChange = (e: any) => {
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("You r done. TQ");
  };
  const handleListing = async () => {
    // alert("You r done. TQ");
    console.log("hey");
    let _id = parseInt(id);
    let hex = ethers.utils.hexZeroPad(ethers.utils.hexlify(_id), 32);
    // console.log("list", hex);
    let txn = await marketContract.methods
      .putLSP8OnSale(address, hex, price, [true, false, false])
      .send({ from: auth })
      .on("receipt", async function (receipt) {
        await fetch("http://localhost:8080/items/", {
          method: "POST",
          body: {
            id: ethers.utils.hexZeroPad(ethers.utils.hexlify(_id), 32),
            contractAddress: address,
            originalMinter: data?.originalMinter,
            size: data?.size ?? "XS",
            drop: data.title,
            seller: auth,
            price: price,
            imgUrl: data?.imgUrl,
          },
        });
        setApproval(false);
        setOperator(true);
      });
  };
  const handleApprove = async () => {
    setApproval(true);
    // alert("You r done. TQ");
    let _id = parseInt(id);
    let hex = ethers.utils.hexZeroPad(ethers.utils.hexlify(_id), 32);
    // console.log(marketContractAddress, hex);
    // let txn = await contract.authorizeOperator(marketContractAddress, hex);
    let txn = await contract1.methods
      .authorizeOperator(marketContractAddress, hex)
      .send({ from: auth })
      .on("receipt", function (receipt) {
        setApproval(false);
        setOperator(true); // contains the new contract address
      });
  };

  return (
    <Layout>
      <div className=" container mx-auto ">
        <div className="md:flex items-center max-w-lg sm:max-w-none mx-auto  mt-5  z-50">
          <h1 className="text-white text-[55px] md:text-[75px] pt-[10px] md:pt-0 clash-font font-semibold leading-[0.8] z-50">
            The Hoodie
          </h1>
          <p className="text-white/70 text-[20px] font-semibold mt-5 md:mt-0 ml-0 md:ml-16 z-50">
            50/80 Sold
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start sm:flex-row my-9 gap-8 ">
          <div className="w-full md:w-1/2 max-w-lg md:max-w-lg">
            <div className=" border rounded-3xl  border-white/10 p-5 ">
              <video src={data?.imgUrl} alt="detail" className="w-full " />

              <div className="flex justify-center items-center -mt-20 gap-6">
                <img
                  src={LeftCircleButton}
                  alt="left-circle"
                  className="cursor-pointer w-auto max-w-[72px] max-h-[72px] bg-[#2B2B2B] border border-white/50 shadow-[inset_2px_0px_6px_rgba(255,255,255,0.15)] px-4 py-[1.2rem] rounded-full hover:shadow-[inset_1px_1px_10px_rgba(255,255,255,0.30)] transition-all duration-100  "
                ></img>
                <div className="flex gap-3 items-center">
                  <img
                    src={HoodieImg}
                    alt="detail"
                    className="w-[30%] max-w-[72px] max-h-[72px] h-[30%] object-cover border border-white/10 rounded-lg"
                  />
                  <img
                    src={HoodieImg}
                    alt="detail"
                    className="w-[30%] max-w-[72px] max-h-[72px] h-[30%] object-cover border border-white/10 rounded-lg"
                  />
                  <img
                    src={HoodieImg}
                    alt="detail"
                    className="w-[30%] max-w-[72px] max-h-[72px] h-[30%] object-cover border border-white/10 rounded-lg"
                  />
                </div>

                <img
                  src={RightCircleButton}
                  alt="right-circle"
                  className="cursor-pointer w-auto max-w-[72px] max-h-[72px] bg-[#2B2B2B] border border-white/50 shadow-[inset_2px_0px_6px_rgba(255,255,255,0.15)] px-4 py-[1.2rem] rounded-full hover:shadow-[inset_1px_1px_10px_rgba(255,255,255,0.30)] transition-all duration-100 "
                ></img>
              </div>
            </div>
          </div>

          <div className="w-fit  md:w-1/2 archivo-font flex flex-col gap-6 ">
            <div>
              <h5 className="text-white text-2xl font-semibold">Description</h5>
              <Typography
                children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
                className="text-white/50 font-medium text-xl max-w-lg mt-4"
              />
            </div>
            <div className="mt-4">
              <h5 className="text-white text-2xl font-semibold ">Details</h5>

              <div className="grid overflow-hidden grid-cols-1 sm:grid-cols-3 grid-rows-1 md:grid-rows-2 gap-2 text-white gap-y-4 mt-4">
                <div className="box">
                  <h6 className="text-xl text-white/70 font-semibold">Drop</h6>
                  <p className="text-lg text-white/50 font-medium">
                    {data?.name}
                  </p>
                </div>
                <div className="box col-span-1 sm:col-span-2">
                  <h6 className="text-xl text-white/70 font-semibold ">
                    Original Minter
                  </h6>
                  <p className="text-lg text-white/50 font-medium text-ellipsis overflow-hidden">
                    {data?.originalMinter}
                  </p>
                </div>
                <div className="box">
                  <h6 className="text-xl text-white/70 font-semibold">
                    Material
                  </h6>
                  <p className="text-lg text-white/50 font-medium">Cotton</p>
                </div>
                <div className="box col-span-1 sm:col-span-2">
                  <h6 className="text-xl text-white/70 font-semibold">
                    Manufacturer details
                  </h6>
                  <p className="text-lg text-white/50 font-medium">
                    Manufacturer Inc.
                  </p>
                </div>
                <div className="box">
                  <h6 className="text-xl text-white/70 font-semibold">Size</h6>
                  <p className="text-lg text-white/50 font-medium">XS</p>
                </div>
                <div className="box col-span-1 sm:col-span-2">
                  <h6 className="text-xl text-white/70 font-semibold">Color</h6>
                  <p className="text-lg text-white/50 font-medium">Black</p>
                </div>
              </div>
            </div>
            <div className="mt-4 relative group">
              <button className="flex items-center gap-3 border-white/10 border-[1px]    justify-center  px-6 h-[50px] rounded-full  text-white whitespace-nowrap  archivo-font font-semibold text-lg capitalize bg-white/5 hover:bg-white/5 transition-all duration-150">
                <img src={FamilyMark} alt="" className="w-6" />
                Radical Transparency
                <BiChevronRight className="text-3xl  text-white/70 " />
              </button>

              <div className="bg-black/90 xl:bg-white/10 border border-white/10 absolute top-14  xl:top-0 left-0 xl:left-80 text-white rounded-3xl p-6 archivo-font    gap-x-8 gap-y-3 grid-cols-2 hidden group-hover:grid">
                <div>
                  <p className="text-md font-semibold  text-white/70">
                    Manufacturer details
                  </p>
                  <p className="text-lg font-medium text-white/50">
                    Manufacturer Inc.
                  </p>
                </div>
                <div>
                  <p className="text-md font-semibold  text-white/70">
                    BTS Phygital Cost
                  </p>
                  <p className="text-lg font-medium text-white/50">
                    BTS Phygital Cost
                  </p>
                </div>
                <div>
                  <p className="text-md font-semibold  text-white/70">
                    Team's Profit
                  </p>
                  <p className="text-lg font-medium text-white/50">
                    Team's Profit
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <Button
                // rightImgSrc={RightArrow}
                text="History"
                className=" text-lg shadow-[inset_1px_1px_5px_rgba(255,255,255,0.40)] bg-white/10"
                onClick={() => {
                  setHistoryModalOpen(true);
                }}
              />
            </div>
            <div className="flex  gap-5">
              <div className="mt-2 flex gap-3">
                <Button
                  text="Sell"
                  className="border-white/10 px-7 bg-white/5 "
                  onClick={() => setSellModal(true)}
                />
                {registered ? (
                  <Button
                    // onClick={() => handleRegisterButtonClick(dataIndex)}
                    text="Registered"
                    // imgSrc={Chip}
                    className=" border-white/40  text-lg shadow-[inset_1px_1px_8px_rgba(255,255,255,0.40)] bg-white/10"
                    disabled
                  />
                ) : (
                  <Button
                    onClick={() => setRegisterModalOpen(true)}
                    text="Register"
                    // imgSrc={Chip}
                    className=" border-white/40  text-lg shadow-[inset_1px_1px_8px_rgba(255,255,255,0.40)] bg-white/10"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="h-10">{/* placeholder */}</div>
      </div>

      {/*  modal*/}
      <MantineModal
        opened={modalOpen}
        onClose={() => {}}
        withCloseButton={false}
        classNames={{
          inner: "bg-[#000000]/30 backdrop-blur	",
          modal:
            "bg-transparent w-full flex items-center justify-center h-full  rounded-3xl text-white",
        }}
      >
        <div className="relative w-full max-w-screen-lg h-full md:h-auto my-8">
          {/* <div className=" overflow-auto"> */}
          <div className="relative  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#212121]/90 to-white/10   rounded-[32px]  shadow border-[1px] border-white/10  max-h-[100vh] overflow-hidden inline-block">
            <div className="overflow-y-auto mt-2 h-fit max-h-[calc(100vh-50px)]   p-4 md:p-6">
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
                  <CgCloseO className="text-2xl text-white/50 hover:text-white/90 transition-all duration-200" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <Typography
                children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
                className="text-white"
              />

              <div className="flex flex-col gap-4 sm:flex-row  mt-5">
                {/* left card */}
                <div className="w-full md:w-1/2">
                  <div className="h-fit rounded-3xl border-[1px] border-white/10 p-[25px]  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[.08] to-white/[.01] max-w-sm mx-auto ">
                    <div className="flex justify-between items-center">
                      <Typography
                        children="The Hoodie"
                        className="text-white text-xl clash-font font-semibold"
                      />
                      <Typography
                        children="3"
                        className="text-white/70 text-xl clash-font font-semibold"
                      />
                    </div>

                    <img src={HoodieImg} alt="detail" className="" />
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

                  <div className="w-full  float-left ">
                    {/* <Stepper
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
                    </Stepper> */}

                    <Stepper
                      styleConfig={{
                        activeBgColor: "transparent",
                        activeTextColor: "#fff",
                        inactiveBgColor: "transparent",
                        inactiveTextColor: "#A09D9D",
                        completedBgColor: "transparent",
                        completedTextColor: "#fff",
                        size: "2em",
                      }}
                      ConnectorStyleProps={{
                        activeColor: "#ffffff",
                        completedColor: "#ffffff",
                        disabledColor: "#ffffff",
                        style: "solid",
                      }}
                      stepClassName={"stepper__step"}
                      steps={[
                        { label: "Personal details" },
                        { label: "Shipping details" },
                        { label: "Payment details" },
                      ]}
                      activeStep={activeStep}
                    />
                  </div>
                </div>
                {/* right form */}
                <div className="w-full md:w-1/2 h-min px-5 ">
                  <StepWizard
                    instance={assignStepWizard}
                    onStepChange={handleStepChange}
                  >
                    <FirstStep />
                    <SecondStep />
                    <ThirdStep />
                    <FourthStep />
                  </StepWizard>
                </div>
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
      </MantineModal>

      {/* item history modal */}
      <MantineModal
        opened={historyModalOpen}
        onClose={() => {}}
        withCloseButton={false}
        classNames={{
          inner: "bg-[#000000]/30 backdrop-blur	",
          modal:
            "bg-transparent w-full flex items-center justify-center h-full  rounded-3xl text-white",
        }}
      >
        <div className="relative w-full max-w-screen-lg h-full md:h-auto   my-8 ">
          {/* <div className=" overflow-auto"> */}
          <div className="relative  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#212121]/90 to-white/10   rounded-[32px]  shadow border-[1px] border-white/10  max-h-[100vh] overflow-hidden inline-block">
            <div className="overflow-y-scroll mt-2 max-h-[40rem]  p-8">
              <div className="flex justify-between items-start md:items-center">
                <div className="flex items-start md:items-center">
                  <img
                    src={TshirtImg}
                    className="w-[30px] h-[30px]"
                    alt="Tshirt"
                  />
                  <Typography
                    children="Item History"
                    className="text-white ml-3 text-[20px] md:text-[26px] clash-font font-semibold w-full"
                  />
                </div>

                <button
                  type="button"
                  className="top-3 right-2.5  rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                  data-modal-toggle="authentication-modal"
                  onClick={() => {
                    setHistoryModalOpen(false);
                  }}
                >
                  <CgCloseO className="text-2xl text-white/50 hover:text-white/90 transition-all duration-200" />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <Typography
                children="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien."
                className="text-white"
              />

              {/* component */}
              <div className="relative my-8">
                <div
                  className="border-r-2 border-white/10 absolute h-full top-0"
                  style={{ left: "9px" }}
                ></div>
                <ul className="list-none m-0 p-0">
                  <li className="mb-12">
                    <div className="flex group items-center archivo-font">
                      <div className="bg-white/10 ml-1  z-10 rounded-full  h-3 w-3">
                        <div className="bg-[#333333] h-0.5 w-8 items-center  ml-3 mt-1.5"></div>
                      </div>
                      <p className="ml-8 text-white/50">2 Days ago</p>
                      <div className="flex-1  z-10 font-medium text-white flex items-center justify-between ml-8">
                        {/* image */}
                        <div>
                          <div className="bg-white/10 rounded-3xl border border-white/10 w-28 h-28 flex items-center justify-center p-1">
                            <img src={HoodieImg} alt="" />
                          </div>
                        </div>

                        {/* details */}
                        <div>
                          <p className="mb-2 font-semibold text-white">
                            Hoodie Sold for 3
                          </p>

                          <div className="flex gap-8">
                            <div>
                              <p className="leading-6 font-semibold text-white/70">
                                From
                              </p>
                              <p className="leading-6 text-white/50 text-base font-semibold">
                                John David
                              </p>
                              <p className="flex items-center leading-6 gap-2 text-white/50 font-semibold text-base">
                                <HiOutlineLocationMarker />
                                France
                              </p>
                            </div>

                            <div>
                              <p className="leading-6 font-semibold text-white/70">
                                To
                              </p>
                              <p className="leading-6 text-white/50 text-base font-semibold">
                                John David
                              </p>
                              <p className="flex items-center leading-6 gap-2 text-white/50 font-semibold text-base">
                                <HiOutlineLocationMarker />
                                France
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* condition */}
                        <div className="mt-8">
                          <div className="flex gap-3">
                            <div>
                              <p className="font-semibold">Condition</p>
                              <p className="font-semibold text-white/50">
                                Good
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>

                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>

                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <p className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap mt-2 font-semibold text-white/50">
                            Additional notes about the condition of your garment
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio, laboriosam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="flex group items-center archivo-font">
                      <div className="bg-white/10 ml-1  z-10 rounded-full  h-3 w-3">
                        <div className="bg-[#333333] h-0.5 w-8 items-center  ml-3 mt-1.5"></div>
                      </div>
                      <p className="ml-8 text-white/50">2 Days ago</p>
                      <div className="flex-1  z-10 font-medium text-white flex items-center justify-between ml-8">
                        {/* image */}
                        <div>
                          <div className="bg-white/10 rounded-3xl border border-white/10 w-28 h-28 flex items-center justify-center p-1">
                            <img src={HoodieImg} alt="" />
                          </div>
                        </div>

                        {/* details */}
                        <div>
                          <p className="mb-2 font-semibold text-white">
                            Hoodie Sold for 3
                          </p>

                          <div className="flex gap-8">
                            <div>
                              <p className="leading-6 font-semibold text-white/70">
                                From
                              </p>
                              <p className="leading-6 text-white/50 text-base font-semibold">
                                John David
                              </p>
                              <p className="flex items-center leading-6 gap-2 text-white/50 font-semibold text-base">
                                <HiOutlineLocationMarker />
                                France
                              </p>
                            </div>

                            <div>
                              <p className="leading-6 font-semibold text-white/70">
                                To
                              </p>
                              <p className="leading-6 text-white/50 text-base font-semibold">
                                John David
                              </p>
                              <p className="flex items-center leading-6 gap-2 text-white/50 font-semibold text-base">
                                <HiOutlineLocationMarker />
                                France
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* condition */}
                        <div className="mt-8">
                          <div className="flex gap-3">
                            <div>
                              <p className="font-semibold">Condition</p>
                              <p className="font-semibold text-white/50">
                                Good
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>

                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>

                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <p className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap mt-2 font-semibold text-white/50">
                            Additional notes about the condition of your garment
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio, laboriosam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="mb-12">
                    <div className="flex group items-center archivo-font">
                      <div className="bg-white/10 ml-1  z-10 rounded-full  h-3 w-3">
                        <div className="bg-[#333333] h-0.5 w-8 items-center  ml-3 mt-1.5"></div>
                      </div>
                      <p className="ml-8 text-white/50">2 Days ago</p>
                      <div className="flex-1  z-10 font-medium text-white flex items-center justify-between ml-8">
                        {/* image */}
                        <div>
                          <div className="bg-white/10 rounded-3xl border border-white/10 w-28 h-28 flex items-center justify-center p-1">
                            <img src={HoodieImg} alt="" />
                          </div>
                        </div>

                        {/* details */}
                        <div>
                          <p className="mb-2 font-semibold text-white">
                            Hoodie Sold for 3
                          </p>

                          <div className="flex gap-8">
                            <div>
                              <p className="leading-6 font-semibold text-white/70">
                                From
                              </p>
                              <p className="leading-6 text-white/50 text-base font-semibold">
                                John David
                              </p>
                              <p className="flex items-center leading-6 gap-2 text-white/50 font-semibold text-base">
                                <HiOutlineLocationMarker />
                                France
                              </p>
                            </div>

                            <div>
                              <p className="leading-6 font-semibold text-white/70">
                                To
                              </p>
                              <p className="leading-6 text-white/50 text-base font-semibold">
                                John David
                              </p>
                              <p className="flex items-center leading-6 gap-2 text-white/50 font-semibold text-base">
                                <HiOutlineLocationMarker />
                                France
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* condition */}
                        <div className="mt-8">
                          <div className="flex gap-3">
                            <div>
                              <p className="font-semibold">Condition</p>
                              <p className="font-semibold text-white/50">
                                Good
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>

                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>

                              <div className=" rounded-xl border border-white/10 w-12 h-12 flex items-center justify-center ">
                                <img
                                  src={HoodieImg}
                                  alt=""
                                  className="object-cover w-full h-full"
                                />
                              </div>
                            </div>
                          </div>
                          <p className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap mt-2 font-semibold text-white/50">
                            Additional notes about the condition of your garment
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio, laboriosam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* timeline ends */}
            </div>
          </div>
        </div>
      </MantineModal>

      {
        <>
          <Modal __isOpen={registerModalOpen} dispatchModal={() => {}}>
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
                      setRegisterModalOpen(false);
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
                        setRegistered(true);
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </Modal>

          <MantineModal
            opened={sellModal}
            onClose={() => {}}
            withCloseButton={false}
            classNames={{
              inner: "bg-[#000000]/30 backdrop-blur	",
              modal:
                "bg-transparent w-full max-w-lg h-full  rounded-3xl text-white overflow-auto",
            }}
          >
            <div className="relative w-full max-w-lg h-full md:h-auto  my-8 ">
              <div className="relative overflow-scroll bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#212121]/90 to-white/10   rounded-[32px]  shadow border-[1px] border-white/10  h-fit max-h-[calc(100vh-100px)] overflow-hidden inline-block">
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
                        setSellModal(false);
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
                        onChange={(e) => setPrice(e.target.value)}
                        className="max-w-[120px]  p-3 px-5 rounded-2xl border-[1px] border-white/10 bg-white/[.01]  outline-none text-md placeholder:text-white/50 
                        text-white leading-6 tracking-wider font-semibold"
                        placeholder="200"
                      ></input>
                    </div>

                    {isOperator ? (
                      <Button
                        text="Sell your Price"
                        className="mt-8 flex-row-reverse gradient-button"
                        imgSrc={RightArrowImg}
                        onClick={() => {
                          handleListing();
                        }}
                      />
                    ) : (
                      <Button
                        text="Approve"
                        className="mt-8 flex-row-reverse gradient-button"
                        onClick={() => {
                          handleApprove();
                        }}
                        isLoading={approvalLoading}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </MantineModal>
        </>
      }
    </Layout>
  );
};

export default InventoryDetail;
