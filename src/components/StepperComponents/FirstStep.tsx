import React, { useState, useCallback } from "react";
import StepperActionButtons from "components/StepperActionButtons";
import Select from "react-select";
import InputMask from "react-input-mask";

import Typography from "components/Typography";
import chevronDown from "assets/svg/chevron-down.svg";
const FirstStep = (props: any) => {
  const [info1, setInfo1] = useState({});
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = React.useState(null);

  const [postal, setPostal] = useState("");

  const validate = () => {
    // if (!info1.name) setError("Name is mandatory field");
    // else {
    setError("");
    props.nextStep();
    // props.userCallback(info1);
    // }
  };

  const options = [
    { value: "US", label: "United States" },
    { value: "AU", label: "Australia" },
    { value: "IN", label: "India" },
  ];
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

  const checkPostalCode = (e: any) => {
    const maxSize = 5;
    const value = e.target.value;
    if (value.length > maxSize) return;
    setPostal(value);
  };

  return (
    <div>
      <div className="mt-2 md:mt-0 mb-8 archivo-font">
        <Typography
          children="Shipping Details"
          className="text-white text-[18px] font-semibold"
        />

        <Typography
          children="Name & SurName"
          className="text-md text-white/70 mt-5"
        />

        <input
          type="text"
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="John David"
        ></input>

        <div className="flex justify-between flex-col sm:flex-row gap-3">
          <div className="my-1 w-full sm:w-1/2 max-w-xs ">
            <Typography
              children="Country"
              className="text-md text-white/70 mt-5"
            />

            <div className="relative ">
              {/* <input
                type="text"
                className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
              text-white leading-6 tracking-wider"
                placeholder="Country"
              ></input> */}
              <Select
                value={selectedOption}
                onChange={(option: any) => {
                  setSelectedOption(option);
                }}
                options={options}
                styles={customSelectStyles}
                placeholder="Country"
              />
            </div>
          </div>

          <div className="my-1 w-full sm:w-1/2">
            <Typography
              children="Postal Code"
              className="text-md text-white/70 mt-5"
            />

            <InputMask
              mask="99999"
              maskChar=" "
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="00000"
            />
          </div>
        </div>

        <Typography children="City" className="text-md text-white/70 mt-5" />

        <input
          type="text"
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="Paris"
        ></input>

        <Typography
          children="Shipping Address"
          className="text-md text-white/70 mt-5"
        />

        <input
          type="text"
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="Number, street"
        ></input>
      </div>
      <div className="float-right">
        <StepperActionButtons {...props} nextStep={validate} />
      </div>
    </div>
  );
};

export default FirstStep;
