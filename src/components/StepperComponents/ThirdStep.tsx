import React, { useState, useCallback } from "react";
import Typography from "components/Typography";
import StepperActionButtons from "components/StepperActionButtons";

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
      <div className="mt-2 md:mt-0 h-[500px]">
        <Typography
          children="Payment Details"
          className="text-white text-[18px] font-semibold"
        />
        <Typography
          children="Name on Card"
          className="text-[16px] text-[#A09D9D] mt-5"
        />
        <input
          type="text"
          className="w-full py-3 px-6 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
        ></input>
        <Typography
          children="Card Number"
          className="text-[16px] text-[#A09D9D] mt-5"
        />
        <input
          type="text"
          className="w-full py-3 px-6 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
        ></input>
        <div className="flex">
          <div>
            <Typography
              children="Expriation Date"
              className="text-[16px] text-[#A09D9D] mt-5"
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
            ></input>
          </div>
          <div className="ml-4">
            {" "}
            <Typography
              children="CCV"
              className="text-[16px] text-[#A09D9D] mt-5"
            />
            <input
              type="text"
              className="w-full py-3 px-6 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
            ></input>
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
