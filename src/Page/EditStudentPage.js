import React, { Component } from 'react'
import {
  FormControl,
  FormLabel,
  Button,
  Col,
  Row,
  Form,
  Nav,
} from "react-bootstrap";
import "../Css/Login.css";
import Logo from "../Assets/img/key.png";
import SweetAlert from '../Utils/SweetAlert';
import services from '../Services/services';
import { Navigate } from 'react-router-dom';

export default class EditStudentPage extends Component {
  constructor() {
    super()
    this.state = {
      soal: "",
      nomorlevel: "",
      pilihanA: "",
      pilihanB: "",
      pilihanC: "",
      pilihanD: "",
      jenissoal: "",
      jawabanbenar: "",
      redirecTo: false
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.validasi = this.validasi.bind(this)
    this.editstudent = this.editstudent.bind(this)

  }
  componentDidMount() {
    var student = localStorage.getItem('student')
    var data = JSON.parse(student)
    this.setState({ soal: data.soal })
    this.setState({ pilihanA: data.pilihanA })
    this.setState({ pilihanB: data.pilihanB })
    this.setState({ pilihanC: data.pilihanC })
    this.setState({ pilihanD: data.pilihanD })
    this.setState({ jawabanbenar: data.jawabanbenar })
    this.setState({ nomorlevel: data.nomorlevel })
    this.setState({ jenissoal: data.jenissoal })
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  validasi() {
    var data = {
      soal: this.state.soal,
      nomorlevel: this.state.nomorlevel,
      pilihanA: this.state.pilihanA,
      pilihanB: this.state.pilihanB,
      pilihanC: this.state.pilihanC,
      pilihanD: this.state.pilihanD,
      jenissoal: this.state.jenissoal,
      jawabanbenar: this.state.jawabanbenar,
    }
    if (this.state.soal === "") {
      SweetAlert.Error("Kolom Nama Tidak boleh Kosong")
    } else if (this.state.nomorlevel === "") {
      SweetAlert.Error("Kolom nomor level Tidak boleh Kosong")
    } else if (this.state.pilihanB === "") {
      SweetAlert.Error("Kolom pilihan B Tidak boleh Kosong")
    } else if (this.state.pilihanC === "") {
      SweetAlert.Error("Kolom pilihan C Tidak boleh Kosong")
    } else if (this.state.pilihanD === "") {
      SweetAlert.Error("Kolom pilihan D Tidak Boleh Kosong Tidak boleh Kosong")
    } else if (this.state.jawabanbenar === "") {
      SweetAlert.Error("Kolom Jawaban Benar Tidak boleh Kosong")
    } else {
      this.editstudent(data)
    }

  }
  editstudent(datasoal) {
    console.log(datasoal)
    var datasoalasli = localStorage.getItem('student')
    var data = JSON.parse(datasoalasli)
    var guid = data.guid

    services.Updatestudent(guid, datasoal).then((res) => {
      if (res.data.status) {
        SweetAlert.Succes(res.data.message)
        this.setState({ redirecTo: true })
      } else {
        SweetAlert.Error(res.data.message)
      }
    }).catch((e) => {
      console.log(e)
    })
  }

  render() {
    if (this.state.redirecTo) {
      return <Navigate to={"/view"} />
    }
    return (
      <div className="Login">
        <Row>
          <Col className="left-side">
            <h2>Edit Data Soal</h2>
            <FormLabel>Soal</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Masukan Soal"
              name="soal"
              value={this.state.soal}
              onChange={this.handleInputChange}
            />
            <FormLabel>Pilihan A</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Masukan Pilihan A"
              value={this.state.pilihanA}
              name="pilihanA"
              onChange={this.handleInputChange}
            />
            <FormLabel>Pilihan B</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Masukan Pilihan B"
              value={this.state.pilihanB}
              name="pilihanB"
              onChange={this.handleInputChange}
            />
            <FormLabel>Pilihan C</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Pilihan C"
              value={this.state.pilihanC}
              name="pilihanC"
              onChange={this.handleInputChange}
            />
            <FormLabel>Pilihan D</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Pilihan D"
              value={this.state.pilihanD}
              name="pilihanD"
              onChange={this.handleInputChange}
            />
            <FormLabel>Jawaban</FormLabel>
            <FormControl
              type="text"
              className="input"
              placeholder="Jawaban"
              value={this.state.jawabanbenar}
              name="jawabanbenar"
              onChange={this.handleInputChange}
            />
            <FormLabel>Nomor Level</FormLabel>
            <Form.Select
              aria-label="Nomor Level"
              className="input"
              value={this.state.nomorlevel}
              name="nomorlevel"
              onChange={this.handleInputChange}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </Form.Select>

            <FormLabel>Pilih Jenis Soal</FormLabel>
            <Form.Select
              aria-label="Pilih Jenis Soal"
              className="input"
              value={this.state.jenissoal}
              name="jenissoal"
              onChange={this.handleInputChange}
            >
              <option value="">Pilih</option>
              <option value="Pihan Ganda">Pilihan Ganda</option>
              <option value="Esay">Esay</option>
            </Form.Select>

            <Button variant="outline-info" className="button" onClick={(e) => this.validasi()}>
              Edit Data
            </Button>
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
    )
  }
}
