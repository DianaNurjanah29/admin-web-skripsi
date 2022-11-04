import React, { Component } from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import services from '../Services/services'
import SweetAlert from '../Utils/SweetAlert'


export default class ViewStudentPage extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
    this.hapus = this.hapus.bind(this);
    this.edit = this.edit.bind(this);
  }

  componentDidMount() {
    const data={
      page:1,
      limit:100
    }
    services.Getstudent(data).then((res) => {
      const students = res.data.data
      this.setState({ students })
      console.log(students)
    }).catch((e) => {
      console.log(e)
    })

  }
  hapus(data) {
    // console.log(data)
    const guid = data.guid
    services.Deletestudent(guid).then((res) => {
      if (res.data.status) {
        SweetAlert.Succes(res.data.message)
        window.location.reload(false)
      } else {
        SweetAlert.Error(res.data.message)
      }
    }).catch((e) => {
      console.log(e)
    })


  }

  edit(student) {
    // console.log(student)
    localStorage.setItem("student", JSON.stringify(student))
  }

  renderTable() {
    return this.state.students.map((student, index) => {
      const { _id, guid, nomorlevel, soal, pilihanA, pilihanB, pilihanC, pilihanD, jenissoal, jawabanbenar } = student;
      return (
        <tr key={_id}>
          <td>{index+1}</td>
          <td>{soal}</td>
          <td>{pilihanA}</td>
          <td>{pilihanB}</td>
          <td>{pilihanC}</td>
          <td>{pilihanD}</td>
          <td>{nomorlevel}</td>
          <td>{jenissoal}</td>
          <td>{jawabanbenar}</td>
          <td> <Button variant="success" href='/edit' onClick={(e) => this.edit(student)}>Edit Data</Button></td>
          <td> <Button variant="danger" onClick={(e) => this.hapus(student)}>Hapus Data</Button></td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <Container>
          <h3>Data Soal</h3>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>No</th>
                <th>Soal</th>
                <th>Pilihan A</th>
                <th>Pilihan B</th>
                <th>Pilihan C</th>
                <th>Pilihan D</th>
                <th>Nomor Level</th>
               
                <th>Jenis Soal</th>
                <th>Jawaban Benar</th>
                <th>Edit</th>
                <th>Hapus</th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </Table>
        </Container>
      </div>
    )
  }
}
