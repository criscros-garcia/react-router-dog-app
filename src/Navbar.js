import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component{
  render(){
    return(
      <nav>
        <ul>
        {this.props.dogs.map(d =>(
        <li>
          <Link to={`/dogs/${d.name}`}>
            {d.name}
          </Link>
        </li>
        ))}
        </ul>
      </nav>
    );
  }
}

export default Navbar;