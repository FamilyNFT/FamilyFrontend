import React, { useState } from "react";
import Button from "components/Button";
import RightArrow from "assets/img/symbols/rightArrow.png";

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
    <div className="flex justify-between ">
      {props.currentStep > 1 && <Button text="Back" onClick={handleBack} />}

      {props.currentStep < props.totalSteps && (
        <>
          {props.currentStep === 1 && (
            <Button
              isLoading={props.isLoading}
              onClick={handleNext}
              text="Payment Details"
              rightImgSrc={RightArrow}
            />
          )}
          {props.currentStep === 2 && (
            <Button
              isLoading={props.isLoading}
              onClick={handleNext}
              text="Validate"
              rightImgSrc={RightArrow}
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
        />
      )}
    </div>
  );
};

export default StepperActionsButtons;
