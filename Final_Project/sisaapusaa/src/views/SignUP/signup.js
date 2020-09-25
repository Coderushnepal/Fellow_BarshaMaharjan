import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 import {signup} from '../../services/signupServices';
  import iziToast from 'izitoast';
import axios from 'axios';
export default class SignUp extends Component {

  constructor(props){
    super(props);
    this.state = {
        formData: {
            email: "",
            password: "",
        },
      };
   
}

submitData=async() =>{
try {
const loginCredentials = await signup(this.state.formData.email, this.state.formData.password);
localStorage.setItem('Token', loginCredentials.token);
this.props.history.push('/products');
} catch (err) {
  iziToast.error({
      ttile:"Login Failed",
     message:"Invalid credentials" 
  })
}
//   this.setState({ loginCredentials});
}

// fetchData = () => {
//   axios({
//     method: "POST",
//     url: "http://localhost:5000/user/signup",
//     data: {
//       email: this.state.formData.email,
//       password: this.state.formData.password,
//     },
//   })
//     .then((res) => {
//       console.log(res);
//       const token = res.data.data.token;
//       localStorage.setItem("Token", token);
//       this.props.history.push("/product");
//     })
  
//     .catch((err) => {
//       console.log(err);
//     });
// };

handleChange = (event) => {
console.log("reached")
this.setState({
formData : {
    ...this.state.formData,
    [event.target.name]:event.target.value
}
})
console.log(this.state.formData)
}
handleSubmit = (event) => {
event.preventDefault();

}


    render () {
      const { email, password } = this.state.formData;
        return (
            <div id="overlay"> 
            
            <form className="form-signin">
            <h1 style={{color:'white',fontSize:'25px',background:'transparent', textAlign:'center'}}> Sign Up Here! </h1>
            <div className="input-group-login sombreado-input">
              <div className="input-group-prepend-login">
                <span className="input-group-text fondo-icon">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input onChange={this.handleChange} 
                type="email"
                id="email"
                className="border-0-login form-control-login input-border-none"
                placeholder="Email"
                value= {this.state.email} 
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
              <input  onChange={this.handleChange} 
                type="password"
                className="border-0-login form-control-login input-border-none"
                placeholder="Password"
                value={this.state.password}
              />
            </div>
      
            <br/>
            <p className="text-center">
              <button className="button-signup fondo-color-signup " 
              onClick={this.fetchData}>
                <b>SIGNUP</b>
              </button>
            </p>
            <p className="text-center">Alredy have an Account? Sign in</p>
            <p className="text-center">OR</p>
              <div className="icons-position">
      
                <a href="#" class="icon-social">
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