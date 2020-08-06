import React, { Component }from 'react'

const withRedbull = (WrappedComponent) => {
    class Person extends Component {
        constructor (props) {
            super(props);
            this.state ={
              wing:0
            };
        }
        
        flyAway = () => {
            this.setState({ 
                wing:this.state.wing + 1
            })
          }
        render () {
           return( <WrappedComponent wing={this.state.wing} flyAway={this.flyAway}{...this.props}/>
           )
        }
       }
    
    return Person;
}
export default withRedbull;