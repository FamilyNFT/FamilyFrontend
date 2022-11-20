import React, { useState, useCallback } from "react";
import StepperActionButtons from "components/StepperActionButtons";
import Typography from "components/Typography";

import CardImg from "assets/img/symbols/Cardholder.png";
import CreditCardImg from "assets/img/symbols/CreditCard.png";

const SecondStep = (props: any) => {
  const [info2, setInfo1] = useState({});
  const [error, setError] = useState("");

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
      <div className="mt-2 md:mt-0 h-[500px]">
        <Typography
          children="Full Name"
          className="text-white text-[18px] font-semibold"
        />
        <Typography
          children="John David"
          className="text-[16px] text-[#A09D9D] "
        />

        <Typography
          children="Address"
          className="text-white text-[18px] font-semibold mt-5"
        />
        <Typography
          children="J2643 Stanko Way, Kamloops"
          className="text-[16px] text-[#A09D9D] "
        />

        <Typography
          children="Country"
          className="text-white text-[18px] font-semibold mt-5"
        />
        <Typography children="France" className="text-[16px] text-[#A09D9D] " />

        <Typography
          children="Select your payment method"
          className="text-white text-[18px] font-semibold mt-5"
        />

        <div className="w-full h-[50px] rounded-2xl border-[1px] border-[#A09D9D] py-3 px-5 mt-3 text-white flex">
          <img src={CardImg} alt="card" className="pr-3" />
          Pay with Card
        </div>

        <div className="w-full h-[50px] rounded-2xl border-[1px] border-[#A09D9D] py-3 px-5 mt-3 text-white flex">
          <img src={CreditCardImg} alt="card" className="pr-3" />
          Pay with Wallet
        </div>
      </div>
      <div>
        <StepperActionButtons {...props} nextStep={validate} />
      </div>
    </div>
  );
};

export default SecondStep;
