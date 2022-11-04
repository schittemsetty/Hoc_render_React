import React, {Component} from "react";
import './App.css'
import ClickCounterTwo from "./Components/ClickCounterTwo";
//import ClickCounter from './Components/ClickCounter';
//import ClickCounterTwo from "./Components/ClickCounterTwo";
//import HoverCounterTwo from "./Components/HoverCounterTwo";
//import User from "./Components/User";
import Counter from "./Components/Counter";
import HoverCounterTwo from "./Components/HoverCounterTwo";
//import HoverCounter from "./Components/HoverCounter";

class App extends Component {
  
   render() {
      return(
         <div className = "App" >
         <Counter render= { (count, incrementCount) => <ClickCounterTwo count = {count} incrementCount ={ incrementCount}/> }/>
         <Counter render={ (count, incrementCount) => <HoverCounterTwo count = {count} incrementCount = {incrementCount} /> }/>
        </div>
      )
   }
}

export default App;