import React, { useState, useEffect } from "react";
import StepperActionButtons from "components/StepperActionButtons";

import Typography from "components/Typography";
import chevronDown from "assets/svg/chevron-down.svg";
import { useAppDispatch, useAppSelector } from "redux/hooks/redux-hooks";
import { setEmail, setShipping } from "redux/product/reducer";
import shopifyBackendURL from "constants/backendURL";
const FirstStep = (props: any) => {
  const dispatch = useAppDispatch();
  const [mail, setMail] = useState("");
  const [error, setError] = useState("");
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

  const updateCheckout = async () => {
    try {
      const response = await fetch(`${backend}/checkout/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: checkout?.id,
          email: mail,
          address: shippingAddress,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Failed to update checkout email. Server returned: ${response.statusText}`
        );
      }

      const data = await response.json();
      if (data.errors) {
        throw new Error(
          data.errors.map((error: any) => error.message).join(", ")
        );
      }

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  useEffect(() => {
    dispatch(setEmail(mail));
  }, [mail, dispatch]);

  useEffect(() => {
    dispatch(setShipping(shippingAddress));
  }, [shippingAddress, dispatch]);

  const validate = async () => {
    setFormError({
      firstName: "",
      lastName: "",
      email: "",
    });

    if (firstName === "") {
      setFormError((e) => ({ ...e, firstName: "Invalid Name" }));
    }
    if (lastName === "") {
      setFormError((e) => ({ ...e, lastName: "Invalid Name" }));
    }
    if (!mail.includes("@")) {
      setFormError((e) => ({ ...e, email: "Invalid email" }));
    }

    if (firstName !== "" && lastName !== "" && mail.includes("@")) {
      setLoading(true);
      let result = await updateCheckout();
      console.log(result);
      if (result) {
        props.nextStep();
      } else {
        setError("Something went wrong");
      }
      setLoading(false);
      console.log(mail, firstName, lastName);
    }
  };

  // const changeAddressForm = (e: any) => {
  //   console.log(e.target.name);
  //   setShippingAddress((address) => ({
  //     [e?.target?.name]: e.target?.value,
  //     ...address,
  //   }));
  // };

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
    setShippingAddress((address) => ({
      ...address,
      firstName: e.target.value,
    }));
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
    setShippingAddress((address) => ({
      ...address,
      lastName: e.target.value,
    }));
  };

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
              onChange={(e) => handleFirstNameChange(e)}
              value={firstName}
              tabIndex={1}
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
              onChange={(e) => handleLastNameChange(e)}
              value={lastName}
              tabIndex={2}
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
            tabIndex={3}
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
        {error && (
          <Typography
            children={error}
            className="text-[#E46060] text-sm font-semibold"
          />
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

export default FirstStep;
