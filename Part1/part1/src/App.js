import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients"
  ];

  const [selected, setSelected] = useState(anecdotes.length - 1);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0]);

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <p>
        Has
        {points[selected]}
        votes
      </p>
      <br />
      <button
        onClick={() => setSelected(getRandomArbitrary(0, anecdotes.length - 1))}
      >
        Next Anecdote
      </button>
      <button onClick={vote}>Vote</button>
      <h1>Anecdote with most votes</h1>
      {anecdotes[points.indexOf(Math.max(...points))]}
      <br />
      <p>
        Has
        {points[points.indexOf(Math.max(...points))]}
        votes
      </p>
      <br />
    </div>
  );
};

export default App;
