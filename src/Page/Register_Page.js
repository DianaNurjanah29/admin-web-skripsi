import React, { Component } from "react";
import {
  FormControl,
  FormLabel,
  Button,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import "../Css/Login.css";
import Logo from "../Assets/img/key.png";
import { Navigate } from "react-router-dom";
import SweetAlert from "../Utils/SweetAlert";
import services from "../Services/services";

export default class RegisterPage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      nama: "",
      telp: "",
      jeniskelamin: "",
      redirectToReferrer: false,
    };
    this.Register = this.Register.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.Validate = this.Validate.bind(this);
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  Validate() {
    var email = this.state.email;
    var password = this.state.password;
    var nama = this.state.nama;
    var telp = this.state.telp;
    var jeniskelamin = this.state.jeniskelamin;
    var data = {
      email: email,
      password: password,
      name: nama,
      telp: telp,
      jeniskelamin: jeniskelamin,
    };
    if (email === "") {
      SweetAlert.Error("Email tidak Boleh Kosong");
    } else if (password === "") {
      SweetAlert.Error("Password tidak Boleh Kosong");
    } else if (nama === "") {
      SweetAlert.Error("Nama tidak Boleh Kosong");
    }else if(telp === ""){
      SweetAlert.Error("Telp tidak Boleh Kosong");
    }else if(jeniskelamin === ""){
      SweetAlert.Error("Jenis Kelamin tidak Boleh Kosong")
    }else{
      this.Register(data)
    }
  }
  Register(data) {
    // SweetAlert.Succes("Berhasil Daftar Akun")
    // console.log(data)
    services.Register(data).then((res)=>{
      // console.log(res.data)
      if(res.data.status){
        SweetAlert.Succes(res.data.message)
        this.setState({redirectToReferrer:true})
      }else{
        SweetAlert.Error(res.data.message)
      }

    }).catch((e)=>{
      console.log(e)
    })
  }

  render() {
    var email = this.state.email;
    var password = this.state.password;
    var nama = this.state.nama;
    var telp = this.state.telp;
    var jeniskelamin = this.state.jeniskelamin;


    if (this.state.redirectToReferrer) {
      return <Navigate to={"/login"} />;
    }
    return (
      <div className="Login">
        <Row>
          <Col className="left-side">
            <h2>Daftar Akun</h2>
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
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
            <FormLabel>Nama</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Nama"
              name="nama"
              value={nama}
              onChange={this.handleInputChange}
            />
            <FormLabel>Nomor Telpon</FormLabel>
            <FormControl
              type="number"
              className="input"
              placeholder="Nomor Telpon"
              name="telp"
              value={telp}
              onChange={this.handleInputChange}
            />
            <FormLabel>Jenis Kelamin</FormLabel>
            <Form.Select
              aria-label="Jenis Kelamin"
              className="input"
              name="jeniskelamin"
              value={jeniskelamin}
              onChange={this.handleInputChange}
            >
              <option value="">Jenis Kelamin</option>
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </Form.Select>
            <Button variant="success" className="button" onClick={(e)=>this.Validate()}>
              Daftar
            </Button>
            <p>
              Sudah Punya Akun?
              <Button variant="link" className="" href="login">
                Masuk
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
