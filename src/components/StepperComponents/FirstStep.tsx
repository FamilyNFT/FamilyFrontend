import React, {
  useState,
  useCallback,
  ChangeEvent,
  FormEvent,
  useEffect,
} from "react";
import StepperActionButtons from "components/StepperActionButtons";
import Select from "react-select";
import InputMask from "react-input-mask";

import Typography from "components/Typography";
import chevronDown from "assets/svg/chevron-down.svg";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useAppDispatch, useAppSelector } from "redux/hooks/redux-hooks";
import { setEmail, setShipping } from "redux/product/reducer";
import shopifyBackendURL from "constants/backendURL";
const FirstStep = (props: any) => {
  const dispatch = useAppDispatch();
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [shippingAddress, setShippingAddress] = React.useState({});
  const checkout = useAppSelector((state) => state.product.checkout);
  const [loading, setLoading] = useState<boolean>(false);
  const backend = shopifyBackendURL;
  console.log(checkout);

  const [postal, setPostal] = useState("");
  const updateCheckout = async () => {
    console.log(checkout);
    let check = await fetch(`${backend}/checkout/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: checkout?.id,
        address: shippingAddress,
        email: mail,
      }),
    });
  };
  useEffect(() => {
    dispatch(setEmail(mail));
  }, [mail]);
  useEffect(() => {
    dispatch(setShipping(shippingAddress));
  }, [shippingAddress]);

  const validate = async () => {
    // if (!info1.name) setError("Name is mandatory field");
    // else {
    setLoading(true);
    setError("");
    await updateCheckout();
    props.nextStep();
    setLoading(false);
    // props.userCallback(info1);
    // }
  };

  const changeAddressForm = (e: any) => {
    console.log(e?.target?.name);
    setShippingAddress((address) => ({
      [e?.target?.name]: e.target?.value,
      ...address,
    }));
  };
  const changeAddressCountry = (value: string) => {
    setSelectedOption(value);
    setShippingAddress((address) => ({
      country: value,
      ...address,
    }));
  };
  const changeAddressProvince = (value: string) => {
    setProvince(value);
    setShippingAddress((address) => ({
      province: value,
      ...address,
    }));
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

        <div className="flex flex-col sm:flex-row gap-3">
          <div>
            <Typography
              children="Firstname"
              className="text-md text-white/70 mt-5"
            />

            <input
              onChange={(e) => changeAddressForm(e)}
              type="text"
              name="firstName"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="John"
            ></input>
          </div>
          <div>
            <Typography
              children="Lastname"
              className="text-md text-white/70 mt-5"
            />
            <input
              onChange={(e) => changeAddressForm(e)}
              type="text"
              name="lastName"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="David"
              required
            ></input>
          </div>
        </div>
        <div>
          <Typography
            children="Email Address"
            className="text-md text-white/70 mt-5"
          />

          <input
            type="email"
            name="email"
            onChange={(e) => {
              setMail(e.target.value);
            }}
            className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
            placeholder="John@example.com"
            required
          ></input>
        </div>

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
              <CountryDropdown
                value={selectedOption}
                onChange={changeAddressCountry}
                classes="w-full p-4 rounded-2xl border-[1px] border-white/10  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              />
              {/* <Select
                value={selectedOption}
                onChange={(option: any) => {
                  setSelectedOption(option);
                }}
                options={options}
                styles={customSelectStyles}
                placeholder="Country"
              /> */}
            </div>
          </div>
          <div className="my-1 w-full sm:w-1/2 max-w-xs ">
            <Typography
              children="State/Province"
              className="text-md text-white/70 mt-5"
            />

            <div className="relative ">
              <RegionDropdown
                onChange={changeAddressProvince}
                country={selectedOption}
                value={province}
                classes="w-full p-4 rounded-2xl border-[1px] border-white/10  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              />
              {/* <input
                type="text"
                className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
              text-white leading-6 tracking-wider"
                placeholder="Country"
              ></input> */}
              {/* <Select
                value={selectedOption}
                onChange={(option: any) => {
                  setSelectedOption(option);
                }}
                options={options}
                styles={customSelectStyles}
                placeholder="Country"
              /> */}
            </div>
          </div>
        </div>

        <Typography children="City" className="text-md text-white/70 mt-5" />

        <input
          type="text"
          name="city"
          onChange={(e) => changeAddressForm(e)}
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="Paris"
          required
        ></input>

        <Typography
          children="Address line 1"
          className="text-md text-white/70 mt-5"
        />

        <input
          type="text"
          onChange={(e) => changeAddressForm(e)}
          name="address1"
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="Number, street"
          required
        ></input>
        <div className="flex gap-3">
          <div className="sm:flex-1">
            <Typography
              children="Address line 2 (Optional)"
              className="text-md text-white/70 mt-5"
            />

            <input
              onChange={(e) => changeAddressForm(e)}
              type="text"
              name="address2"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="address line 2"
            ></input>
          </div>
          <div className="my-1 w-full sm:w-1/3">
            <Typography
              children="Postal Code"
              className="text-md text-white/70 mt-5"
            />

            <input
              // mask="99999"
              // maskChar=" "
              onChange={(e) => changeAddressForm(e)}
              name="zip"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="00000"
              required
            />
          </div>
        </div>
      </div>
      <div className="float-right">
        <StepperActionButtons
          isLoading={loading}
          {...props}
          nextStep={validate}
        />
      </div>
    </div>
  );
};

export default FirstStep;
