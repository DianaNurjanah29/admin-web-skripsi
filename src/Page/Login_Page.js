import React, { Component } from "react";
import { FormControl, FormLabel, Button, Col, Row } from "react-bootstrap";
import "../Css/Login.css";
import Logo from "../Assets/img/key.png";
import { Navigate } from "react-router-dom";
import SweetAlert from '../Utils/SweetAlert'
import Services from '../Services/services'

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };
    this.Login = this.Login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Validate = this.Validate.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate() {
    // console.log('coba')
    var email = this.state.email;
    var password = this.state.password;
    var data={email:email, password:password}
    if(email===""){
      // console.log('email kosong')
      SweetAlert.Error('Email Tidak Boleh Kosong')
    } else if(password===""){
      // console.log('password kosong');
      SweetAlert.Error('Password Tidak Boleh Kosong')
    } else{
      // console.log('Lengkap');
      this.Login(data)
    }
  }
  Login(data){
    // console.log(data)
    Services.Login(data).then((res)=>{
      if(res.data.status){
        SweetAlert.Succes(res.data.message)
        this.setState({redirectToReferrer:true})
        localStorage.setItem("isLogin",true)
        localStorage.setItem("user",res.data.user)
      }else{
        SweetAlert.Error(res.data.message)
      }
    }).catch((e)=>{
      console.log(e)
    })
  }

  render() {
    var email=this.state.email;
    var password=this.state.password;
    if (this.state.redirectToReferrer) {
      return <Navigate to={"/"} />;
    }
    return (
      <div className="Login">
        <Row>
          <Col className="left-side">
            <h2>Masuk ke Akun Anda</h2>
            <FormLabel>Email</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            <FormLabel>Password</FormLabel>
            <FormControl
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            <Button variant="success" className="button" onClick={(e)=>this.Validate()}>
              Masuk
            </Button>
            <p>
              Belum Punya Akun?
              <Button variant="link" className="" href="register">
                Daftar
              </Button>
            </p>
          </Col>
          <Col className="right-side">
            <div>
              <center>
                <img className="login-img" src={Logo} />
              </center>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
