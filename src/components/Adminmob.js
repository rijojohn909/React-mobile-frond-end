import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Adminmob() {

    const [allMobiles, setAllMobiles] = useState([])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-mobiles')
        // console.log(result.data.employees);
        setAllMobiles(result.data.mobiles);

    }
    console.log(allMobiles);
    useEffect(() => {
        fetchData()
    }, [])

    // handledelete
    const handleDelete = async (id)=>{
const result = axios.delete('http://localhost:8000/delete-mobiles/'+id)
console.log(result);
alert((await result).data.message);
fetchData()
    }

    return (
        <div>
            <div className='container-fluid mt-5'>
                <h1><i class="fa-solid fa-mobile"></i>Mobile Management App
                    <Link to={'/add'}>
                        <a className='btn btn-success ms-5'><i class="fa-thin fa-mobile"></i>Add mobile</a>
                    </Link>                      
                </h1>
                <p style={{ textAlign: 'justify' }}>
                    This is dummy data :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>


                <div className='container mt-2 mb-2'>
                    <h1 className='text-success'>Mobile Details</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>name</th>
                                <th>image</th>
                                <th>price</th>
                                <th>waranty</th>
                                <th>charger</th>
                                <th>memory</th>
                                <th>ram</th>


                            </tr>
                        </thead>
                        <tbody>
                            {
                                allMobiles?.map((item, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>
                                            <img style={{height:"50px"}} src={item.image} alt="" />
                                        </td>
                                        <td>{item.price}</td>
                                        <td>{item.waranty}</td>
                                        <td>{item.Charger}</td>
                                        <td>{item.memory}</td>
                                        <td>{item.ram}</td>


                                        <td>
<Link to={'/edit/'+item.id}>
            <button className='btn btn-warning me-3'> <i className="fa-solid fa-pen"></i></button>

</Link  >
 <button onClick={()=>handleDelete(item.id)} className='btn btn-danger'> <i className="fa-solid fa-trash"></i></button>
                                        </td>
                                    </tr>
                                ))

                            }

                        </tbody>
                    </Table>
                </div>
            </div>
            <div class="text-center">
<Link to={'/'}>

<Button>
        Close
      </Button>
</Link>
</div>
        </div>
    )
}

export default Adminmob

