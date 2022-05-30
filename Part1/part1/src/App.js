import { useState } from "react";

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>;

const Label = ({ statistic, text }) => <p> {text} {statistic} </p>;

const Statistics = ({good, neutral, bad}) => {

  if ( good + neutral + bad > 0)
   return <>
      <Label text={"Good: "} statistic={good} />
      <Label text={"Neutral: "} statistic={neutral} />
      <Label text={"Bad: "} statistic={bad} />
      <Label text={"All: "} statistic={bad + neutral + good} />
      <Label text={"Positive: "} statistic={ good/ (bad + neutral + good)} />
      <Label text={"Average: "} statistic={ (good - bad) / (bad + neutral + good)} />
    
    </>

    return <p>No feedback given</p>
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setBad(bad + 1)} text={"Bad"}/>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"Neutral"}/>
      <Button handleClick={() => setGood(good + 1)} text={"Good"}/>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>;
};

export default App;
