import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logoo.png';
// import  ProductList from '../ProductList'


export default class Nav extends Component {
  logout =() => {
    localStorage.clear('Token')
}

  render () {
    const token= localStorage.getItem('Token');

        return (
          <div>
                 <nav className="navbar nab-bar-expand-sm navbar-dark px-sm-5 nav-box">
                    <Link to ='/'>
                        <img src={logo} alt="store" className="navbar-brand"/>
                        </Link>
                        <div className="navbar navbar-expand-sm sjustify-content-center">
                        <Link to ="/">
                        <h1 >Sisaa-Pusaa</h1>
                        </Link>
                        </div>
                        <ul className="topnav-right">
                          <li>
                          {/* <div >{ token ? */}
                            <Link to ="/cart">
                                <button className="btn-nav" >
                                <i className="fa fa-shopping-cart" aria-hidden="true" ></i>Cart </button>
                                </Link>  
                                
                                <Link to ="/product/upload">
                                <button className="btn-nav" >
                                <i className="fa fa-upload" aria-hidden="true" ></i> Upload </button>
                                </Link>  

                                {/* :null }
                                   </div> */}
                                </li>
                                <li>
                                <div className="dropdown">
                                <Link to ="/login" className="ml-auto">
                                    <button className="btn-nav" >
                                    <i className="fa fa-user-circle" aria-hidden="true" ></i> Login </button>
                                    </Link>
                                    {/* <div>
                             <button onClick={this.logout}>Logout </button>
                        </div>  */}
                                    <Link to ="/signup" className="ml-auto">
                                    <button className="btn-nav" >
                                    <i className="fa fa-user-plus"  aria-hidden="true" ></i> Signup </button>
                                        </Link>  
                                        </div>
                                    
                                    </li>
                                    </ul>
                </nav>
                
                </div>
        )
    }
  }


