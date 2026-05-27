function Card(props){
  console.log(props);
  return (
    
    <div className="card">
    <h1>my name is {props.user}</h1>
    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit </p>
    </div>
  )
}

export default Card;