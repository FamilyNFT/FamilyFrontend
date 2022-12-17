import React, { useState, useCallback } from "react";
import Typography from "components/Typography";
import StepperActionButtons from "components/StepperActionButtons";
import InputMask from "react-input-mask";

const ThirdStep = (props: any) => {
  const [info3, setInfo1] = useState({});
  const [error, setError] = useState("");

  const validate = () => {
    // if (!info1.name) setError("Name is mandatory field");
    // else {
    setError("");
    props.nextStep();
    // props.userCallback(info3);
    // }
  };

  return (
    <div>
      <div className="mt-2 md:mt-0 h-[500px]  archivo-font">
        <Typography
          children="Payment Details"
          className="text-white text-md font-semibold"
        />
        <Typography
          children="Name on Card"
          className="text-sm text-white/50 mt-5"
        />
        <input
          type="text"
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="John David"
        ></input>
        <Typography
          children="Card Number"
          className="text-[16px] text-[#A09D9D] mt-5"
        />
        {/* <input
          type="text"
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="000 000 000 000"
        ></input> */}
        <InputMask
          mask="9999 9999 9999 9999"
          maskChar=" "
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="0000 0000 0000 0000"
        />
        <div className="flex gap-0 sm:gap-4 flex-col sm:flex-row">
          <div>
            <Typography
              children="Expriation Date"
              className="text-[16px] text-[#A09D9D] mt-5"
            />
            <InputMask
              mask="99/99"
              maskChar=" "
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="00/00"
            />
          </div>
          <div className="">
            <Typography
              children="CVV"
              className="text-[16px] text-[#A09D9D] mt-5"
            />
            <InputMask
              mask="999"
              maskChar=" "
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="000"
            />
          </div>
        </div>
      </div>
      <div className="">
        <StepperActionButtons {...props} nextStep={validate} />
      </div>
    </div>
  );
};

export default ThirdStep;
