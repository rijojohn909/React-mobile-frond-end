import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,useParams,useNavigate  } from 'react-router-dom';
import axios from 'axios';

function Edit() {

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
  

    const handleUpdate =async (e) =>{
      e.preventDefault()
  const body = {
      id,
      mobName,
      mobimage,
      mobprice,
      mobwaranty,
      mobcharger,
      mobmemory,
      mobram
      
  }
  
  // api call
   const result = await axios.post('http://localhost:8000/update-mobile',body)
   console.log(result);
      alert(result.data.message);
    //   redirect to admin page
     location('/')
  }


useEffect(()=>{
fetchmobile()
},[])

  return (
    <div>
  <div className='container-fluid mt-5'>
    <h1><i className="fa-solid fa-user-pen me-3"></i>Update mobile Details
                    </h1>
                    <p style={{ textAlign: 'justify' }}>
                        This is dummy data :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
    
        </div>
      
{/* update form design */}

<div className=' container mt-3 mb-3  p-5 border rounded'>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>mobile Name</Form.Label>

        <Form.Control type="text" placeholder="Enter mobile Name" value={mobName}
         onChange={(e)=>setName(e.target.value)}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formimage">
      <Form.Label>mobile image</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile image" value={mobimage}
             onChange={(e)=>setimage(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formprice">
      <Form.Label>mobile price</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile price" value={mobprice}
             onChange={(e)=>setprice(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formwaranty">
      <Form.Label>mobile waranty</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile waranty" value={mobwaranty}
             onChange={(e)=>setwaranty(e.target.value)}
            />
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formcharger">
      <Form.Label>mobile charger</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile charger" value={mobcharger}
             onChange={(e)=>setcharger(e.target.value)}
            />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formmemory">
      <Form.Label>mobile memory</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile memory" value={mobmemory}
             onChange={(e)=>setmemory(e.target.value)}
            />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formram">
      <Form.Label>mobile ram</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile ram" value={mobram}
             onChange={(e)=>setram(e.target.value)}
            />
            </Form.Group>
    
    
      <Button onClick={(e)=>handleUpdate(e)} variant="success" type="submit">
        Update
      </Button>
<Link to={'/'}>

<Button className='ms-2' variant="warning" type="submit">
        Close
      </Button>
</Link>


    </Form>
    </div>
    </div>
     )
    }
    
    export default Edit