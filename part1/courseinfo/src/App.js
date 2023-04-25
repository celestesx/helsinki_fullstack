const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part = {props.parts[0].name} exercises = {props.parts[0].num} />
      <Part part = {props.parts[1].name} exercises = {props.parts[1].num} />
      <Part part = {props.parts[2].name} exercises = {props.parts[2].num} />
    </>  
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercises[0].num + props.exercises[1].num + props.exercises[2].num}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {name: 'Fundamentals of React', num: 10},
      {name: 'Using props to pass data', num: 7},
      {name: 'State of a component', num: 14}
    ]
  } 

  return (
    <div>
      <Header course = {course} />
      <Content parts = {course.parts}/>
      <Total exercises = {course.parts} />
    </div>
  )
}

export default App;