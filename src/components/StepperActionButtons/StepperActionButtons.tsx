import React from "react";
import Button from "components/Button";

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
    <div className="flex justify-between">
      {props.currentStep > 1 && <Button text="Back" onClick={handleBack} />}

      {props.currentStep < props.totalSteps && (
        <Button onClick={handleNext} text="Next" className="ml-5" />
      )}
      {props.currentStep === props.totalSteps && (
        <Button onClick={handleFinish} text="finish" className="ml-5" />
      )}
    </div>
  );
};

export default StepperActionsButtons;
