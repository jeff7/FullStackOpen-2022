const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {

  const initialValue = 0;
  const sumWithInitial = sum.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises,
    initialValue
  );

  console.log(sumWithInitial);
  return <p>Number of exercises {sumWithInitial}</p>
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
  {
    parts.map(
      (part) => <Part key={part.id} part={part} />
    )
  }     
  </>

const Course = ({ course }) => 
  <>
    <Header course={course.name}/> 
    <Content parts={course.parts} /> 
    <Total sum={course.parts} />
  </>

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <Course course={course}/>
  )
}

export default App