import React, { Component} from "react";
import { isVowel } from "./string.js";
import "./counter.css"
class Counter extends Component {
    constructor (props) {
        super(props);
        this.state ={
          count:0
        };
      
    }
    
    increase = () => {
        this.setState({ 
            count:this.state.count + 1
        })
      }
      decrease = () => {
        this.setState({ 
            count:this.state.count - 1
        })
      }  
     
    render () {
        return(
          <div className="box">
        <p className={isVowel(this.props.name[0]) ? "red":"blue"}> {this.props.name} </p>
            <button onClick={this.increase} className="counter">+</button>
            <button onClick={this.decrease} className="counter">-</button>
        <h3> Count: {this.state.count}</h3>
            </div>
        );
    }
}
export default Counter;