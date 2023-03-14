import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';


function Add() {

    const [id,setId] = useState('')
    const [mobName,setName] = useState('')
    const [mobimage,setimage] = useState('')
    const [mobprice,setprice] = useState(0)
    const [mobwaranty,setwaranty] = useState('')
    const [mobcharger,setcharger] = useState('')
    const [mobmemory,setmemory] = useState('')
    const [mobram,setram] = useState('')




let location = useNavigate()

   


    const handleAddMobile =async (e) =>{
    e.preventDefault()
// generate unique Id

   
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
console.log(body);

// api call
const result = await axios.post('http://localhost:8000/add-mobiles',body)
   alert(result.data.message);
  //  redirect to admin page
  location('/')
}
   
  return (
    <div>
        <div className='container-fluid mt-5'>
    <h1><i className="fa-solid fa-user-plus me-3"></i>New mobile Registration Form
                    </h1>
                    <p style={{ textAlign: 'justify' }}>
                        This is dummy data :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
    
        </div>

    <div className=' container mt-3 mb-3  p-5 border rounded'>
    <Form>
    <Form.Group className="mb-3" controlId="formid">
      <Form.Label>mobile id</Form.Label>

        <Form.Control type="text" placeholder="Enter mobile id" 
         onChange={(e)=>setId(e.target.value)}
        />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>mobile Name</Form.Label>

        <Form.Control type="text" placeholder="Enter mobile Name" 
         onChange={(e)=>setName(e.target.value)}
        />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formimage">
      <Form.Label>mobile image</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile image" 
             onChange={(e)=>setimage(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formprice">
      <Form.Label>mobile price</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile price" 
             onChange={(e)=>setprice(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formwaranty">
      <Form.Label>mobile waranty</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile waranty" 
             onChange={(e)=>setwaranty(e.target.value)}
            />
            </Form.Group>

            
            <Form.Group className="mb-3" controlId="formcharger">
      <Form.Label>mobile charger</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile charger" 
             onChange={(e)=>setcharger(e.target.value)}
            />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formmemory">
      <Form.Label>mobile memory</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile memory" 
             onChange={(e)=>setmemory(e.target.value)}
            />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formram">
      <Form.Label>mobile ram</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile ram" 
             onChange={(e)=>setram(e.target.value)}
            />
            </Form.Group>
    
      <Button onClick={(e)=>handleAddMobile(e)} variant="success" type="submit">
        Add
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

export default Add