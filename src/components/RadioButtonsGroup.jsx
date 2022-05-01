import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { test } from "../test";
import ShowResult from "./ShowResult";

export default function RadioButtonsGroup(props) {
  const [value, setValue] = React.useState("");
  const [step, setStep] = React.useState(0);
  const [selectedAnswers, setSelectedAnswers] = React.useState([]);
  const [finishFlag, setFinishFlag] = React.useState(false);

  const nextStep = () => {
    setStep(step + 1);
    pushAnswers();
  };

  const pushAnswers = () => {
    setSelectedAnswers((arr) => [...arr, value]);
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleFinish = () => {
    pushAnswers();
    setFinishFlag(true);
  };

  console.log(selectedAnswers);

  console.log(value);

  const question = test[step];

  const answers = question.q_a.map((a) => (
    <FormControlLabel key={a} value={a} control={<Radio />} label={a} />
  ));

  return (
    <>
      {finishFlag ? (
        <ShowResult response={selectedAnswers}/>
      ) : (
        <>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {question.q_text}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {answers}
            </RadioGroup>
          </FormControl>
          <br />
          {step < test.length - 1 ? (
            <Button
              onClick={nextStep}
              variant="contained"
              disabled={value === "" ? true : false}
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleFinish}
              variant="contained"
              disabled={value === "" ? true : false}
            >
              Finish
            </Button>
          )}
        </>
      )}
    </>
  );
}
