const App = () => {
  const course = "Half Stack application development";

  const part1 = { name: "Fundamentals of React", exercises: 10 };

  const part2 = { name: "Using props to pass data", exercises: 7 };

  const part3 = { name: "State of a component", exercises: 14 };

  const Header = props => {
    <h1>
      {props.course}
    </h1>;
  };

  const Part = props =>
    <p>
      {props.part} {props.exercises}
    </p>;

  const Content = () => {
    return (
      <div>
        <Part part={part1.name} exercises={part1.exercises} />
        <Part part={part2.name} exercises={part2.exercises} />
        <Part part={part3.name} exercises={part3.exercises} />
      </div>
    );
  };

  const Total = () =>
    <p>
      Number of exercises {exercises1 + exercises2 + exercises3}
    </p>;

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
};

export default App;
