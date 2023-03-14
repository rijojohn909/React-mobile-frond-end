import React,{useEffect} from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';

function Mobile() {
  const[allMobiles,setallMobiles]=useState([])

const fetchData = async () => {
        const result = await axios.get('http://localhost:8000/get-all-mobiles')
        // console.log(result.data.mobiles);
        setallMobiles(result.data.mobiles);

    }
    console.log(allMobiles);
    useEffect(() => {
        fetchData()
    }, [])
  return (
<div>
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.reliancedigital.in/medias/Oppo-A78-5G-CLP-Banner-19-01-2023.jpg?context=bWFzdGVyfGltYWdlc3w2ODcwMXxpbWFnZS9qcGVnfGltYWdlcy9oZTgvaGRlLzk5NTA0Nzc1ODIzNjYuanBnfGZlN2ExZmE3YmZjYWQ1ODRjODI0ZDRkYjE4ODljZmU0OTQxMTk1ZTY5Y2MzOTQ0ZGMzY2IxNTYyNjRmMmM1NmI"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Mobile Phones</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.reliancedigital.in/medias/Vivo-V27-Pro-Available-now-CLP-Banner-03-03-2023.jpg?context=bWFzdGVyfGltYWdlc3w4NDg0OHxpbWFnZS9qcGVnfGltYWdlcy9oMmYvaDI3Lzk5NjgwMDgwMDM2MTQuanBnfDNmYzIxNzI2NDJlMTNhMDEwOThlMGU2MTI3ZWM4NjgzNmJkYzVlNTI3ZWNiMzQ3ZDQ4ZDY5ZDM0YmQ4NDZiYTM"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Mobile Phones</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.reliancedigital.in/medias/iPhone-14-Yellow-CLP-Banner-Desktop.jpg?context=bWFzdGVyfGltYWdlc3w5MTk0NHxpbWFnZS9qcGVnfGltYWdlcy9oMzMvaGUzLzk5Njk1NjIwMjYwMTQuanBnfDYzZjBjZmY4ZjVlODFjMDdkNDc4MjE5ZWU4Y2M3OWU5NGM2MTMxNTM5N2QwZmU5NzdiZjgyOTlmMWVmYTdkZjg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Mobile Phones</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> 
    <div className='Container d-flex'>
    

 {
    allMobiles?.map((item)=>(
      <div>
      <Card className='m-3' style={{ width: '13rem' }}>
        <Card.Img variant="top" src={item.image} style={{height:'200px', width:'150px'}} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>Price:
           {item.price}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Memory:{item.memory} </ListGroup.Item>
          <ListGroup.Item>Ram:{item.ram}</ListGroup.Item>
          {/* <ListGroup.Item>{item.waranty}</ListGroup.Item> */}
        </ListGroup>
        <Card.Body>
        <Link to={'view/'+item.id}>
            <button className='btn btn-outline-primary'>View More Details</button>

</Link  >           {/* <Card.Link href="#">Another Link</Card.Link> */}
        </Card.Body>
      </Card>
      </div>
    ))
}
    </div>
    </div>
  )
}

export default Mobile