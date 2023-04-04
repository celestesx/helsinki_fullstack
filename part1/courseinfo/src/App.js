const Header = (props) => {
  return (
    <h1>{props.course}</h1>
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
      <Part part = {props.exercises[0].name} exercises = {props.exercises[0].num} />
      <Part part = {props.exercises[1].name} exercises = {props.exercises[1].num} />
      <Part part = {props.exercises[2].name} exercises = {props.exercises[2].num} />
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
  const course = 'Half Stack application development';
  const exercises = [
    {name: 'Fundamentals of React', num: 10},
    {name: 'Using props to pass data', num: 7},
    {name: 'State of a component', num: 14}
  ] 
  
  return (
    <div>
      <Header course = {course} />
      <Content exercises = {exercises}/>
      <Total exercises = {exercises} />
    </div>
  )
}

export default App;