import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

  const Label = ({ statistic, text }) => <p> {text} {statistic} </p>;

  return <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"}/>
      <Button handleClick={() => setGood(good + 1)} text={"Good"}/>
      <h1>statistics</h1>
      <Label text={"Good: "} statistic={good} />
      <Label text={"Neutral: "} statistic={neutral} />
      <Label text={"Bad: "} statistic={bad} />
    </div>;
};

export default App;
