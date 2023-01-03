import React, { useState, useCallback } from "react";
import Typography from "components/Typography";
import StepperActionButtons from "components/StepperActionButtons";
import InputMask from "react-input-mask";
import { useAppSelector } from "redux/hooks/redux-hooks";
import { useNavigate } from "react-router-dom";
import shopifyBackendURL from "constants/backendURL";

const ThirdStep = (props: any) => {
  const [info3, setInfo1] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [cardDetails, setCardDetails] = useState<any>({});
  const checkout = useAppSelector((state) => state.product.checkout);
  const shippingAddress = useAppSelector(
    (state) => state.product.shippingAddress
  );
  const product = useAppSelector((state) => state.product.product);
  const variant = useAppSelector((state) => state.product.variant);
  const account = useAppSelector((state) => state.auth.account);
  const backend = shopifyBackendURL;
  const navigate = useNavigate();

  const inputChange = (e: any) => {
    setCardDetails((detail: any) => ({
      ...detail,
      [e?.target?.name]: e.target?.value,
    }));
    console.log(cardDetails);
  };
  const completeCheckout = async () => {
    let check = await fetch(`${backend}/checkout/complete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: checkout?.id,
        billingAddress: shippingAddress,
        cardDetail: cardDetails,
        wallet: account,
        product: product?.title,
        size: variant?.title,
      }),
    });
  };
  const validate = async () => {
    // if (!info1.name) setError("Name is mandatory field");
    // else {
    setLoading(true);
    setError("");
    props.nextStep();
    await completeCheckout();
    setLoading(false);
    navigate("/inventory");
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
          name="name"
          // value={cardDetails?.name}
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="Firstname Lastname"
          onChange={(e) => inputChange(e)}
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
          onChange={(e) => inputChange(e)}
          maskChar=" "
          name="number"
          className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
          placeholder="0000 0000 0000 0000"
        />
        <div className="flex gap-0 sm:gap-4 flex-col sm:flex-row">
          <div>
            <Typography
              children="Expriation Month"
              className="text-[16px] text-[#A09D9D] mt-5"
            />
            <InputMask
              onChange={(e) => {
                inputChange(e);
              }}
              mask="99/99"
              maskChar=" "
              name="date"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="MM/YY"
            />
          </div>
          {/* <div>
            <Typography
              children="Expriation Year"
              className="text-[16px] text-[#A09D9D] mt-5"
            />
            <InputMask
              mask="99/99"
              maskChar=" "
              name="date"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="00/00"
            />
          </div> */}
          <div className="">
            <Typography
              children="CVV"
              className="text-[16px] text-[#A09D9D] mt-5"
            />
            <InputMask
              mask="999"
              maskChar=" "
              onChange={(e) => inputChange(e)}
              name="cvv"
              className="w-full p-3 rounded-2xl border-[1px] border-white/10 bg-white/[.03]  mt-3 outline-none text-md placeholder:text-white/50 
          text-white leading-6 tracking-wider"
              placeholder="000"
            />
          </div>
        </div>
      </div>
      <div className="">
        <StepperActionButtons
          isLoading={loading}
          {...props}
          nextStep={validate}
        />
      </div>
    </div>
  );
};

export default ThirdStep;
