import React, { useState, useCallback } from "react";
import StepperActionButtons from "components/StepperActionButtons";
import Typography from "components/Typography";

import CardImg from "assets/img/symbols/Cardholder.png";
import CreditCardImg from "assets/img/symbols/CreditCard.png";
import pencil from "assets/svg/pencil.svg";

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
      <div className="mt-2 md:mt-0 h-[500px] archivo-font">
        <Typography
          children="Full Name"
          className="text-white text font-semibold"
        />
        <p className="text-md text-white/50 flex items-center gap-2 font-semibold">
          John David
          <img src={pencil} alt="" className="w-4 h-4" />
        </p>

        <Typography
          children="Address"
          className="text-white text-[18px] font-semibold mt-5"
        />

        <p className="text-md text-white/50 flex items-center gap-2 ">
          240 avenue de Boston, 75000 Paris
          <img src={pencil} alt="" className="w-4 h-4" />
        </p>

        <Typography
          children="Country"
          className="text-white text-[18px] font-semibold mt-5"
        />
        <p className="text-md text-white/50 flex items-center gap-2 font-semibold">
          France
          <img src={pencil} alt="" className="w-4 h-4" />
        </p>
        <Typography
          children="Select your payment method"
          className="text-white text-[18px] font-semibold mt-5"
        />

        <div className="w-full h-[50px] rounded-2xl border-[1px] border-white/10 py-3 px-5 mt-3 text-white/60 flex archivo-font tracking-wide font-semibold">
          <img src={CardImg} alt="card" className="pr-3" />
          Pay with Card
        </div>

        <div className="w-full h-[50px] rounded-2xl border-[1px] border-white/10 py-3 px-5 mt-3 text-white/60 flex archivo-font tracking-wide font-semibold">
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
