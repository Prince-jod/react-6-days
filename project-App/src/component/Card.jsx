//  import {Bookmark} from "lucide-react"
function Card(props){
  
   return (
    
  <div className="parent">
 <div className="card">
   <div className="top">
    <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" alt ="amazon"/>
    
   </div>
     <div className="centers">
  <h3>FreeLancing</h3>
  <p>i will build your app or website{}</p>
     </div>
    <div className="bottom">
      <span>
        <p>Buy now{props.price}</p>
      </span>
      <br></br>
<button >save </button>
    </div>
  </div>
</div>
 )
 }

 export default Card;