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
    <div className="flex justify-between gap-4 ">
      {props.currentStep > 1 && (
        <Button text="Back" imgSrc={leftArrow} onClick={handleBack} />
      )}

      {props.currentStep < props.totalSteps && (
        <>
          {props.currentStep === 1 && (
            <Button
              isLoading={props.isLoading}
              onClick={handleNext}
              text="Payment Details"
              rightImgSrc={RightArrow}
              className="shadow-[inset_1px_1px_4px_rgba(255,255,255,0.30)] bg-white/5 border-white/20"
            />
          )}
          {props.currentStep === 2 && (
            <Button
              isLoading={props.isLoading}
              onClick={handleNext}
              text="Validate"
              rightImgSrc={RightArrow}
              className="shadow-[inset_1px_1px_4px_rgba(255,255,255,0.30)] bg-white/5 border-white/20"
            />
          )}
        </>
      )}
      {props.currentStep === props.totalSteps && (
        <Button
          isLoading={props.isLoading}
          onClick={handleNext}
          text="Shop now"
          rightImgSrc={RightArrow}
          className="shadow-[inset_1px_1px_4px_rgba(255,255,255,0.30)] bg-white/5 border-white/20"
        />
      )}
    </div>
  );
};

export default StepperActionsButtons;
