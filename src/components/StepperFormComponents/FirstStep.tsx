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
  const [shippingAddress, setShippingAddress] = React.useState({
    firstName: "",
    lastName: "",
  });
  const checkout = useAppSelector((state) => state.product.checkout);
  const [loading, setLoading] = useState<boolean>(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

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
    setFormError({
      firstName: "",
      lastName: "",
      email: "",
    });
    if (firstName === "") {
      setFormError((e) => {
        return { ...e, firstName: "Invalid Name" };
      });
    }
    if (lastName === "") {
      setFormError((e) => {
        return { ...e, lastName: "Invalid Name" };
      });
    }
    if (!mail.includes("@")) {
      setFormError((e) => {
        return { ...e, email: "Invalid email" };
      });
    }
    // setError("");

    setLoading(true);

    if (firstName !== "" && lastName !== "" && mail.includes("@")) {
      console.log(formError);
      setShippingAddress({ firstName, lastName });
      await updateCheckout();
      props.nextStep();
    }
    setLoading(false);

    // props.userCallback(info1);
    // }
  };

  // const changeAddressForm = (e: any) => {
  //   console.log(e.target.name);
  //   setShippingAddress((address) => ({
  //     [e?.target?.name]: e.target?.value,
  //     ...address,
  //   }));
  // };

  return (
    <div>
      <div className="mt-2 md:mt-0 mb-8 archivo-font min-h-[25rem]">
        <Typography
          children="Personal Details"
          className="text-white text-[18px] font-semibold"
        />

        <div className="flex flex-col sm:flex-row gap-3">
          <div>
            <div className="flex justify-start gap-4 items-end">
              <Typography
                children="Firstname"
                className="text-md text-white/70 mt-5"
              />
              <p className="text-[#E46060] text-sm">{formError.firstName}</p>
            </div>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
              name="firstName"
              className={`w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider focus:border-white/30 focus:text-white ${
            formError.firstName ? "border-[#E46060] border-2" : ""
          }`}
              placeholder="John"
            ></input>
          </div>
          <div>
            <div className="flex justify-start gap-4 items-end">
              <Typography
                children="Lastname"
                className="text-md text-white/70 mt-5"
              />
              <p className="text-[#E46060] text-sm">{formError.lastName}</p>
            </div>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              name="lastName"
              className={`w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider focus:border-white/30 focus:text-white ${
            formError.lastName ? "border-[#E46060] border-2" : ""
          }`}
              placeholder="David"
              required
            ></input>
          </div>
        </div>
        <div>
          <div className="flex justify-start gap-4 items-end">
            <Typography
              children="Email Address"
              className="text-md text-white/70 mt-5"
            />
            <p className="text-[#E46060] text-sm">{formError.email}</p>
          </div>

          <input
            type="email"
            name="email"
            onChange={(e) => {
              setMail(e.target.value);
            }}
            className={`w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider focus:border-white/30 focus:text-white ${
            formError.email ? "border-[#E46060] border-2" : ""
          }`}
            placeholder="John@example.com"
            required
          ></input>
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
