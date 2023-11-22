export default function SayHi(props) {
  console.log(props);
  return <h1>Welcome {props.name},your job is {props.job} ,{props.age} years old</h1>;
  
}
