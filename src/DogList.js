import { Component } from "react";
import { Link } from "react-router-dom";



class DogList extends Component{
render(){
  return(
    <div>

      {this.props.dogs.map(d => (
        <div>
          <h1 className="display-1">{d.name}</h1>
          <img src={d.src} alt={d.name}/>
          <Link to={`/dogs/${d.name}`} > {d.name} </Link >
        </div>
      ))
      }

    </div>
  );
  }
}

export default DogList;