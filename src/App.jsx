import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
});

const isInputsValid = userInput.duration >= 1;

function handleInputsChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier] : +newValue
        };
    })
}

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputsChange}/>
      {isInputsValid ? <Result input={userInput} /> : <p className="center"> Please input duration greater than Zero. </p> }
    </>
    
  )
}

export default App
