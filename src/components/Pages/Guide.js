import Container from "react-bootstrap/Container";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import guideData from "../../data/guideData";
import CustomButton from "../ CustomButton/CustomButton";

const Guide = (props) => {
  let params = useParams();
  const [step, setStep] = useState(0);

  let guide = guideData.filter((obj) => {
    return obj.id === parseInt(params.id);
  })[0];

  const getStepParams = () => {
    return guide.steps[step];
  };

  const getPath = () => {
    const paths = [
      { url: "/SEG3125-Project2-Step3/#/guides", name: "Guides" },
      { url: null, name: "Guide" },
    ];

    return paths;
  };

  function increaseStep() {
    if (step + 1 < guide.numSteps) {
      setStep(step + 1);
    }
  }

  function decreaseStep() {
    if (step - 1 >= 0) {
      setStep(step - 1);
    }
  }

  return (
    <div>
      <Container>
        <Breadcrumbs paths={getPath()} />
        <div className="d-flex">
          <div className="p-4 flex-fill">
            <h4 className="flex-item">{guide.title}</h4>

            <h5 className="flex-item">{guide.steps[step].title}</h5>

            <div className="flex-item">{guide.steps[step].description}</div>
          </div>

          <img
            src={guide.steps[step].image}
            width="500"
            height="400"
            className="flex-item align-right"
            alt="Guide Image"
          />
        </div>

        <div className="d-flex py-4">
          <div className="flex-fill align-left" onClick={decreaseStep}>
            {step == 0 || <CustomButton title="Previous Step" />}
          </div>
          <div className="flex-fill align-center">
            Step {step + 1} of {guide.numSteps}
          </div>

          <div className="flex-item align-right" onClick={increaseStep}>
            {step == guide.numSteps - 1 || <CustomButton title="Next Step" />}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Guide;
