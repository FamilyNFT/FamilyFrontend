import React, { useState, useCallback } from "react";
import StepperActionButtons from "components/StepperActionButtons";
import Typography from "components/Typography";

import CardImg from "assets/img/symbols/Cardholder.png";
import CreditCardImg from "assets/img/symbols/CreditCard.png";
import pencil from "assets/svg/pencil.svg";
import { useAppSelector } from "redux/hooks/redux-hooks";

const SecondStep = (props: any) => {
  const [info2, setInfo1] = useState({});
  const [error, setError] = useState("");
  const shippingAddress = useAppSelector(
    (state) => state.product.shippingAddress
  );

  const validate = () => {
    // if (!info1.name) setError("Name is mandatory field");
    // else {
    setError("");
    props.nextStep();
    // props.userCallback(info2);
    // }
  };

  return (
    <div>
      <div className="mt-2 md:mt-0 h-[500px] archivo-font">
        <Typography
          children="Full Name"
          className="text-white text font-semibold"
        />
        <p className="text-md text-white/50 flex items-center gap-2 font-semibold">
          {`${shippingAddress?.firstName} ${shippingAddress?.lastName}`}
          <img src={pencil} alt="" className="w-4 h-4" />
        </p>

        <Typography
          children="Address"
          className="text-white text-[18px] font-semibold mt-5"
        />

        <p className="text-md text-white/50 flex items-center gap-2 ">
          {`${shippingAddress?.address1}, ${shippingAddress?.city}, ${shippingAddress?.province}`}
          <img src={pencil} alt="" className="w-4 h-4" />
        </p>

        <Typography
          children="Country"
          className="text-white text-[18px] font-semibold mt-5"
        />
        <p className="text-md text-white/50 flex items-center gap-2 font-semibold">
          {shippingAddress?.country}
          <img src={pencil} alt="" className="w-4 h-4" />
        </p>
        <Typography
          children="Select your payment method"
          className="text-white text-[18px] font-semibold mt-5"
        />
        <div>
          <div className="relative w-full h-[50px] payment   pointer text-white/80 flex archivo-font tracking-wide font-semibold mt-3">
            <input
              type="radio"
              id="payment-card"
              className="block absolute top-0 left-0 right-0 bottom-0 opacity-0 z-50"
              name="payment-method"
              checked={true}
              onChange={() => {}}
            />
            <label
              className="block absolute top-0 left-0 right-0 bottom-0 cursor-pointer z-40 "
              htmlFor="payment-card"
            >
              <div className="flex items-center h-full p-4 gap-3 border-[1px] border-white/20 rounded-2xl">
                <img src={CardImg} alt="card" className="" />
                Pay with Card
              </div>
            </label>
          </div>

          <div className="relative w-full h-[50px] payment   pointer text-white/60 flex archivo-font tracking-wide font-semibold mt-3">
            <input
              type="radio"
              id="payment-wallet"
              className="block absolute top-0 left-0 right-0 bottom-0 opacity-0 z-50"
              name="payment-method"
              disabled={true}
            />

            <label
              className="block absolute top-0 left-0 right-0 bottom-0 pointer z-40 "
              htmlFor="payment-card"
            >
              <div className="flex items-center h-full p-4 gap-3 border-[1px] border-white/10 rounded-2xl">
                <img src={CreditCardImg} alt="card" className="" />
                Pay with Wallet
              </div>
            </label>
          </div>
        </div>

        {/* <div className="w-full h-[50px] rounded-2xl border-[1px] border-white/10 py-3 px-5 mt-3 text-white/60 flex archivo-font tracking-wide font-semibold">
          <img src={CardImg} alt="card" className="pr-3" />
          Pay with Card
        </div>

        <div className="w-full h-[50px] rounded-2xl border-[1px] border-white/10 py-3 px-5 mt-3 text-white/60 flex archivo-font tracking-wide font-semibold">
          <img src={CreditCardImg} alt="card" className="pr-3" />
          Pay with Wallet
        </div> */}
      </div>
      <div>
        <StepperActionButtons {...props} nextStep={validate} />
      </div>
    </div>
  );
};

export default SecondStep;
