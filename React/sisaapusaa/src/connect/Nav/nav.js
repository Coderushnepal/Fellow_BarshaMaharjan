import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logoo.png';
// import  ProductList from '../ProductList'


export default class Nav extends Component {

  render () {
        return (
          <div>
                 <nav className="navbar nab-bar-expand-sm navbar-dark px-sm-5 nav-box">
                    <Link to ='/'>
                        <img src={logo} alt="store" className="navbar-brand"/>
                        </Link>
                        <div>
                        <Link to ="/">
                        <h1 style={{paddingLeft:"400px"}}>Sisaa-Pusaa</h1>
                        </Link>
                        </div>
                            <Link to ="/cart" className="ml-auto">
                                <button className="btn-nav" >
                                <i className="fa fa-shopping-cart" aria-hidden="true" ></i> My Cart </button>
                                </Link>
                </nav>
                
                </div>
        )
    }
  }


