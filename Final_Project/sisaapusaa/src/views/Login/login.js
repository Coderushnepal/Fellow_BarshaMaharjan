import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {login} from '../../services/loginServices';
import iziToast from 'izitoast';


    export default class Login extends Component {
        constructor(props) {
          super(props)
          this.state = {
            formData: {
            email : '',
            password: ''
            },
          };
        }
     

        submitData=async() =>{
          try {
            const loginCredentials = await login(this.state.formData.email, this.state.formData.password);
            localStorage.setItem('Token', loginCredentials.token);
            this.props.history.push('/product');
          } catch (err) {
              iziToast.error({
                  ttile:"Login Failed",
                 message:"Invalid credentials" 
              })
          }
        //   this.setState({ loginCredentials});
        }

        handleInputChange = (event) => {
          this.setState({
            formData : {
                ...this.state.formData,
                [event.target.name]:event.target.value
            },
          });
          console.log(this.state.formData)
        };

        handleSubmit = (event) => {
          event.preventDefault();
        }
        render() {
          // const { email, password } = this.state.formData;
          return (
            <div id="overlay"> 
            
            <form className="form-signin"  onSubmit={this.handleSubmit}>
            <h1 style={{color:'white',fontSize:'25px',background:'transparent', textAlign:'center'}}> Login Here! </h1>
            <div className="input-group-login sombreado-input">
              <div className="input-group-prepend-login">
                <span className="input-group-text fondo-icon">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input onChange={this.handleInputChange} 
                type="email"
                className="border-0-login form-control-login input-border-none"
                placeholder="Email"
                value={this.state.email}
                required
              />
            </div>
      
            <br />
            <div className="input-group-login sombreado-input">
              <div className="input-group-prepend-login">
                <span className="input-group-text fondo-icon">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input  onChange={this.handleInputChange} 
                type="password"
                className="border-0-login form-control-login input-border-none"
                placeholder="Password"
                value={this.state.password}
              />
            </div>
      
            <br/>
            <p className="text-center">
              <button 
              className="button-signup fondo-color-login" 
              onClick={this.submitData}>
                <b>LOG IN</b>
              </button>
            </p>
            <p className="text-center">Does not have account? 
            <Link to ="/signup">
            Sign up
            </Link>
            </p>
            <p className="text-center">OR</p>
              <div className="icons-position">
      
                <a href="#" className="icon-social">
                <p className="text-center">
                <i className="fa fa-facebook-f fa-lg" style={{color:'green',padding:'15px'}}></i>
                </p>
              </a>
      
              <a href="#" className="icon-social">
                <p className="text-center">
                <i className="fa fa-twitter" style={{color:'green',padding:'15px'}}></i>
                </p>
              </a>
      
              <a href="#" className="icon-social">
                <p className="text-center">
                  <i className="fa fa-google fa-lg" style={{color:'green',padding:'15px'}}></i>
                </p>
              </a>
              
              </div>
      
          </form>
          </div>

          );
        }
      }
