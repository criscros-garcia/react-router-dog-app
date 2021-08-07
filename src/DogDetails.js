import { Component } from "react";

class DogDetails extends Component{
  render(){
    return(
      <div className='DogDetails'>
        <h1>{this.props.dog.name} Details</h1>
      </div>
    );
  }
}

export default DogDetails;