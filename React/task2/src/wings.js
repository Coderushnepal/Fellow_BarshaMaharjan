import React, {Component} from "react";
import "./wing.css"
import withRedbull from "./withRedbull"
class User extends Component {
   
     
    render () {
        return(
          <div className="box">
        <p className="nam"> {this.props.name} you got</p>
        
            <label className= "fly" onMouseOver={this.props.flyAway }> {this.props.wing} wings, fly away !!</label>
            </div>
        );
    }
}
export default withRedbull(User);