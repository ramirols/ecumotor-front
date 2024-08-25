import React from "react";

const FormStep = ({ step, setStep, isLastStep, children }) => {
  return (
    <>
      <div class="form-cont">{children}</div>
      {/* <div>
        {step > 1 && (
          <button className="back" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
        {!isLastStep && (
          <button className="next" onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}
        {isLastStep && (
          <button className="submit" type="submit">
            Submit
          </button>
        )}
      </div> */}
    </>
  );
};

export default FormStep;
