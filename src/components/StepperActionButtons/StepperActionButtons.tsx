import React, { useState } from "react";
import Button from "components/Button";
import leftArrow from "assets/svg/left-arrow.svg";
import RightArrow from "assets/svg/right-arrow.svg";

const StepperActionsButtons = (props: any) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div className="flex justify-between gap-4  ">
      {props.currentStep > 1 && (
        <Button
          text="Back"
          imgSrc={leftArrow}
          onClick={handleBack}
          className="shadow-[inset_1px_1px_4px_rgba(255,255,255,0.30)] bg-gradient-to-r from-[#2B2B2B]/80  to-[#2B2B2B]/100 border-white/20"
          {...(props.isLoading && { disabled: props.isLoading })}
        />
      )}

      {props.currentStep < props.totalSteps && (
        <div>
          {props.currentStep === 1 && (
            <Button
              isLoading={props.isLoading}
              onClick={handleNext}
              text="Shipping Details"
              rightImgSrc={RightArrow}
              className="shadow-[inset_1px_1px_4px_rgba(255,255,255,0.30)] bg-gradient-to-r from-[#2B2B2B]/80  to-[#2B2B2B]/100 border-white/20"
              {...(props.isLoading && { disabled: props.isLoading })}
            />
          )}
          {props.currentStep === 2 && (
            <Button
              isLoading={props.isLoading}
              onClick={handleNext}
              text="Payment Details"
              rightImgSrc={RightArrow}
              className="shadow-[inset_1px_1px_4px_rgba(255,255,255,0.30)] bg-gradient-to-r from-[#2B2B2B]/80  to-[#2B2B2B]/100 border-white/20"
              {...(props.isLoading && { disabled: props.isLoading })}
            />
          )}
          {props.currentStep === 3 && (
            <Button
              isLoading={props.isLoading}
              onClick={handleNext}
              text="Validate"
              rightImgSrc={RightArrow}
              className="shadow-[inset_1px_1px_4px_rgba(255,255,255,0.30)] bg-gradient-to-r from-[#2B2B2B]/80  to-[#2B2B2B]/100 border-white/20"
              {...(props.isLoading && { disabled: props.isLoading })}
            />
          )}
        </div>
      )}
      {props.currentStep === props.totalSteps && (
        <Button
          isLoading={props.isLoading}
          onClick={handleNext}
          text="Shop now"
          rightImgSrc={RightArrow}
          className="shadow-[inset_1px_1px_2px_rgba(255,255,255,0.45)] bg-gradient-to-r from-[#2B2B2B]/80  to-[#2B2B2B]/100 border-white/20"
          {...(props.isLoading && { disabled: props.isLoading })}
        />
      )}
    </div>
  );
};

export default StepperActionsButtons;
