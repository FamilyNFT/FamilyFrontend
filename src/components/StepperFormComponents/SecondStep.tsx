import React, { useState, useEffect } from "react";
import StepperActionButtons from "components/StepperActionButtons";

import Typography from "components/Typography";
import chevronDown from "assets/svg/chevron-down.svg";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useAppDispatch, useAppSelector } from "redux/hooks/redux-hooks";
import { setEmail, setShipping } from "redux/product/reducer";

import { updateCheckout } from "utils/shopifyBackend";

const SecondStep = (props: any) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState("");

  const [shippingAddress, setShippingAddress] = React.useState({
    country: "",
    province: "",
    city: "",
    address1: "",
    address2: "",
    zip: "",
  });
  const checkout = useAppSelector((state) => state.product.checkout);

  const [loading, setLoading] = useState<boolean>(false);
  const name = useAppSelector((state) => state.product.shippingAddress);

  const [selectedOption, setSelectedOption] = React.useState("");
  const [province, setProvince] = React.useState("");
  const [city, setCity] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [postal, setPostal] = useState("");

  const [formErrors, setFormErrors] = useState({
    country: "",
    province: "",
    city: "",
    address1: "",
    address2: "",
    postal: "",
  });

  useEffect(() => {
    setShippingAddress((e) => ({
      ...e,
      firstName: name.firstName,
      lastName: name.lastName,
      address1: address1,
      address2: address2,
      city: city,
      zip: postal,
    }));
  }, [address1, address2, city, postal, name.firstName, name.lastName]);

  const validate = async () => {
    setFormErrors({
      country: "",
      province: "",
      city: "",
      address1: "",
      address2: "",
      postal: "",
    });
    let validForm = true;
    if (selectedOption === "") {
      setFormErrors((e) => {
        return { ...e, country: "Required" };
      });
      validForm = false;
    }
    if (province === "") {
      setFormErrors((e) => {
        return { ...e, province: "Required" };
      });
      validForm = false;
    }
    if (city === "") {
      setFormErrors((e) => {
        return { ...e, city: "City required" };
      });
      validForm = false;
    }
    if (address1 === "") {
      setFormErrors((e) => {
        return { ...e, address1: "Address details required" };
      });
      validForm = false;
    }
    if (postal === "") {
      setFormErrors((e) => {
        return { ...e, postal: "Required" };
      });
      validForm = false;
    }
    console.log("Test", checkout.id);

    if (validForm) {
      setLoading(true);
      const updatedShippingAddress = {
        city: city,
        province: province,
        address1: address1,
        address2: address2,
        zip: postal,
        country: selectedOption,
        firstName: name.firstName,
        lastName: name.lastName,
      };
      setShippingAddress(updatedShippingAddress);

      let id = checkout.id;
      console.log("Test", checkout.id);
      console.log("Test", id);
      try {
        dispatch(setShipping({ ...name, ...shippingAddress }));

        if (!id) {
          throw new Error("Checkout ID is invalid");
        }
        console.log("shippingAddress", shippingAddress);
        const result = await updateCheckout(
          id,
          shippingAddress,
          setEmail,
          setShipping
        );

        console.log(result);
        if (result.success) {
          props.nextStep();
        } else {
          setError(result.error);
        }
      } catch (error) {
        let message = "Something went wrong";
        const errorString = JSON.stringify(error);
        if (errorString.includes("checkoutId")) {
          message = "Checkout ID is invalid";
        }
        setError(message);
      }
      setLoading(false);
    }
  };

  // const changeAddressForm = (e: any) => {
  //   console.log(e?.target?.name);
  //   setShippingAddress((address) => ({
  //     [e?.target?.name]: e.target?.value,
  //     ...address,
  //   }));
  // };
  const changeAddressCountry = (value: string) => {
    setSelectedOption(value);
    setShippingAddress((address) => ({
      ...address,
      country: value,
    }));
  };
  const changeAddressProvince = (value: string) => {
    setProvince(value);
    setShippingAddress((address) => ({
      ...address,
      province: value,
    }));
  };

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

  // useEffect(() => {
  //   console.log("name:", name);
  //   dispatch(setShipping({ ...name, ...shippingAddress }));
  // }, [shippingAddress, dispatch]);
  return (
    <div>
      <div className="mt-2 md:mt-0 mb-8 archivo-font">
        <Typography
          children="Shipping Details"
          className="text-white text-[18px] font-semibold"
        />

        <div className="flex justify-between flex-col sm:flex-row gap-3">
          <div className="my-1 w-full sm:w-1/2 max-w-xs ">
            <div className="flex justify-start gap-4 items-end">
              <Typography
                children="Country"
                className="text-md text-white/70 mt-3"
              />
              <p className="text-[#E46060] text-sm">{formErrors.country}</p>
            </div>

            <div className="relative ">
              <CountryDropdown
                value={selectedOption}
                onChange={changeAddressCountry}
                classes={`w-full p-4 rounded-2xl border-[1px] border-white/10  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider selectNative focus:border-white/30 focus:text-white ${
            formErrors.province ? "border-[#E46060] border-2" : ""
          }`}
              />
            </div>
          </div>
          <div className="my-1 w-full sm:w-1/2 max-w-xs ">
            <div className="flex justify-start gap-4 items-end">
              <Typography
                children="State/Province"
                className="text-md text-white/70 mt-3"
              />
              <p className="text-[#E46060] text-sm">{formErrors.province}</p>
            </div>

            <div className="relative ">
              <RegionDropdown
                onChange={changeAddressProvince}
                country={selectedOption}
                value={province}
                classes={`w-full p-4 rounded-2xl border-[1px] border-white/10  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider focus:border-white/30 focus:text-white ${
            formErrors.province ? "border-[#E46060] border-2" : ""
          }`}
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
        <div className="">
          <div>
            <div className="flex justify-start gap-4 items-end">
              <Typography
                children="City"
                className="text-md text-white/70 mt-3"
              />
              <p className="text-[#E46060] text-sm">{formErrors.city}</p>
            </div>

            <input
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              className={`w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider focus:border-white/30 focus:text-white ${
            formErrors.city ? "border-[#E46060] border-2" : ""
          }`}
              placeholder="Paris"
              required
            ></input>
          </div>
          <div>
            <div className="flex justify-start gap-4 items-end">
              <Typography
                children="Address Line 1"
                className="text-md text-white/70 mt-5"
              />
              <p className="text-[#E46060] text-sm">{formErrors.address1}</p>
            </div>
            <input
              type="text"
              onChange={(e) => setAddress1(e.target.value)}
              value={address1}
              name="address1"
              className={`w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider focus:border-white/30 focus:text-white ${
            formErrors.address1 ? "border-[#E46060] border-2" : ""
          }`}
              placeholder="Number, street"
              required
            ></input>
          </div>
        </div>

        <div className="flex gap-0 md:gap-3 flex-col md:flex-row">
          <div className="">
            <Typography
              children="Address line 2 (Optional)"
              className="text-md text-white/70 mt-5"
            />

            <input
              onChange={(e) => setAddress2(e.target.value)}
              value={address2}
              type="text"
              name="address2"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider focus:border-white/30 focus:text-white"
              placeholder="address line 2"
            ></input>
          </div>
          <div className="">
            <div className="flex justify-start gap-4 items-end">
              <Typography
                children="Postal Code"
                className="text-md text-white/70 mt-5"
              />
              <p className="text-[#E46060] text-sm">{formErrors.postal}</p>
            </div>
            <input
              // mask="99999"
              // maskChar=" "
              onChange={(e) => setPostal(e.target.value)}
              value={postal}
              name="zip"
              className={`w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
      text-white leading-6 tracking-wider focus:border-white/30 focus:text-white ${
        formErrors.postal ? "border-[#E46060] border-2" : ""
      }`}
              placeholder="Postal or Zip Code"
              type="text"
              required
            />
          </div>
        </div>
      </div>

      <div>
        {error && (
          <div className="error-message" style={{ color: "red" }}>
            {error}
          </div>
        )}

        <StepperActionButtons
          isLoading={loading}
          {...props}
          nextStep={validate}
        />
      </div>
    </div>
  );
};

export default SecondStep;
