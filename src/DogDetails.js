import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./DogDetails.css";

class DogDetails extends Component{
  render(){
    let { dog } = this.props;
    return(
      <div className='DogDetails row justify-content-center mt-5'>
        <div className='col-11 col-lg-5'>
          <Card className="DogDetails-card">
            
            <Card.Img src={dog.src} className='card-img-top' alt={dog.name}/>
            <Card.Body className='justify-content-center col-11 col-lg-5'>
              <Card.Title>{dog.name}</Card.Title>
              <Card.Subtitle className='text-muted'>Age: {dog.age} years old!</Card.Subtitle>
            </Card.Body>
            
            <ListGroup as='ul' className="list-group-flush">
            <Card.Subtitle className="list-group-item">FACTS!!!</Card.Subtitle>
              {dog.facts.map((fact, i)=>(
                <ListGroup.Item key={i}>{fact}</ListGroup.Item>
                ))}
            </ListGroup>
            <Card.Body>
              <Card.Link className="btn btn-info" href="/dogs">Go Back!</Card.Link>
            </Card.Body>

          </Card>

        </div>

      </div>
    );
  }
}

export default DogDetails;