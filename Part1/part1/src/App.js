const App = () => {
  const course = "Half Stack application development";

  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ];

  const Header = () =>
    <h1>
      {course}
    </h1>;

  const Part = props =>
    <p>
      {props.part} {props.exercises}
    </p>;

  const Content = () => {
    return (
      <div>
        {parts.map(p => <Part part={p.name} exercises={p.exercises} />)}
      </div>
    );
  };

  const Total = () =>
    <p>
      Number of exercises{" "}
      {parts[0].exercises + parts[1].exercises + parts[2].exercises}
    </p>;

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  );
};

export default App;
