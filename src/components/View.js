import React,{useEffect,useState} from 'react'
import { Link,useParams,useNavigate  } from 'react-router-dom';
import axios from 'axios';
import "./View.css"
import { Button } from 'react-bootstrap';

function View() {
  const [id,setId] = useState('')
  const [mobName,setName] = useState('')
  const [mobimage,setimage] = useState('')
  const [mobprice,setprice] = useState(0)
  const [mobwaranty,setwaranty] = useState('')
  const [mobcharger,setcharger] = useState('')
  const [mobmemory,setmemory] = useState('')
  const [mobram,setram] = useState('')




  let location = useNavigate()

  const params = useParams()
  console.log(params.id);

// api call to get details of a particular employye
const fetchmobile=async ()=>{
  const result =await axios.get('http://localhost:8000/get-a-mobiles/'+params.id)
  console.log(result);
setId(result.data.mobile.id);
setName(result.data.mobile.name);
setimage(result.data.mobile.image);
setprice(result.data.mobile.price);
setwaranty(result.data.mobile.waranty);
setcharger(result.data.mobile.Charger);
setmemory(result.data.mobile.memory);
setram(result.data.mobile.ram);

}
    console.log(id);
    useEffect(()=>{
      fetchmobile()
      },[])
  return (
    <div>


      
      <div id="container">  
  
  <div class="product-details">
    
  <h1>{mobName}</h1>
  <span class="hint-star star">
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
  </span>
    
      <p class="information">" My cell phone is my best friend. It's my lifeline to the outside world</p>

   Waranty: {mobwaranty}<br></br>
Memoery:{mobmemory}<br></br>
Charger:{mobcharger}<br></br>
Ram:{mobram}<br></br>
Price:{mobprice}
<div class="text-center">
<Link to={'/'}>

<Button>
        Close
      </Button>
</Link>
</div>
    
<div class="control">
  
  {/* <button class="btn">
   <span class="price">{mobprice}</span>
   <span class="shopping-cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span>
   <span class="buy">Get now</span>
 </button> */}
  
</div>
      
</div>
  
<div class="product-image">
  
  {/* <img src={mobImage} alt=""> */}
<img src={mobimage}></img>
  

<div class="info">
  <h2> Description</h2>
  <ul>
    <li><strong>Owner : </strong>Senod </li>
    <li><strong>Type : </strong>Used</li>
    <li><strong>Condition: </strong>Good</li>
    <li><strong>Gurantee: </strong>No</li>
  </ul>
  
</div>

</div>

</div>

    </div>

  )
}

export default View