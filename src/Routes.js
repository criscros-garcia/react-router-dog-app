import { Component } from "react";
import DogList from "./DogList";
import { Redirect, Route, Switch } from "react-router";
import DogDetails from "./DogDetails";

class Routes extends Component{
  render(){
    const getDog = props => {
      let name= props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />
    }
    return(
      <Switch>
        <Route exact path='/dogs' render={() => <DogList dogs={this.props.dogs}/> }/>
        <Route exact path='/dogs/:name' render={getDog}/>
        <Redirect to='/dogs'/>
      </Switch>
    );
  }
}

export default Routes;