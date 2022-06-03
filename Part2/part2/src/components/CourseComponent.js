const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => {

  const initialValue = 0;
  const sumWithInitial = sum.reduce(
    (previousValue, currentValue) => previousValue + currentValue.exercises,
    initialValue
  );

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

export default Course