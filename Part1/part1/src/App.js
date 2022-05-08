const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 }
    ]
  };

  const Header = () =>
    <h1>
      {course.name}
    </h1>;

  const Part = props =>
    <p>
      {props.part} {props.exercises}
    </p>;

  const Content = () => {
    return (
      <div>
        {course.parts.map(p => <Part part={p.name} exercises={p.exercises} />)}
      </div>
    );
  };

  const Total = () =>
    <p>
      Number of exercises{" "}
      {course.parts[0].exercises +
        course.parts[1].exercises +
        course.parts[2].exercises}
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
