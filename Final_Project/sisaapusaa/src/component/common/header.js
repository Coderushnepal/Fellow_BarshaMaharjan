import React, { Component } from  'react';


export class Header extends  Component {
    constructor(props) {
        super(props)
    
        this.state={
            searchText: "",
        };
    }
    handleTextChange = (event) => {
        this.setState({
            searchText:event.target.value,
        });
    };
   
    
    search = (event) => {
        event.preventDefault();
        this.props.setSearchText(this.state.searchText);
    };
    render(){
        return(

        <header className="header">
            <div className="container">
              <div className="header__bottom">
                <span>Find your favourite vegetable here</span>
                <form  onSubmit={this.search} className="search-bar">
                            <input type="search"
                             placeholder="Search here"
                             value={this.state.searchText} 
                             onChange={this.handleTextChange} 
                             />   
                        </form>
              </div>
            </div>
            </header> 
            )
    }
        
 }
    export default Header;

