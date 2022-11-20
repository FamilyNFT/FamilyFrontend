import React, { useState, useCallback } from "react";
import StepperActionButtons from "components/StepperActionButtons";
import Typography from "components/Typography";

const FirstStep = (props: any) => {
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");

  const validate = () => {
    // if (!info1.name) setError("Name is mandatory field");
    // else {
    setError("");
    props.nextStep();
    // props.userCallback(info1);
    // }
  };

  return (
    <div>
      <div className="mt-2 md:mt-0 h-[500px]">
        <Typography
          children="Shipping Details"
          className="text-white text-[18px] font-semibold"
        />
        <Typography
          children="Name & SurName"
          className="text-[16px] text-[#A09D9D] mt-5"
        />

        <input
          type="text"
          className="w-full p-3 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
        ></input>

        <div className="flex justify-between">
          <div className="m-1">
            <Typography
              children="Country"
              className="text-[16px] text-[#A09D9D] mt-5"
            />

            <input
              type="text"
              className="w-full p-3 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
            ></input>
          </div>

          <div className="m-1">
            <Typography
              children="Postal Code"
              className="text-[16px] text-[#A09D9D] mt-5"
            />

            <input
              type="text"
              className="w-full p-3 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
            ></input>
          </div>
        </div>

        <Typography
          children="City"
          className="text-[16px] text-[#A09D9D] mt-5"
        />

        <input
          type="text"
          className="w-full p-3 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
        ></input>

        <Typography
          children="Shipping Address"
          className="text-[16px] text-[#A09D9D] mt-5"
        />

        <input
          type="text"
          className="w-full p-3 rounded-[18px] border-[1px] border-[#A09D9D] bg-[#0E0E0E] text-white mt-3"
        ></input>
      </div>
      <div className="float-right">
        <StepperActionButtons {...props} nextStep={validate} />
      </div>
    </div>
  );
};

export default FirstStep;
