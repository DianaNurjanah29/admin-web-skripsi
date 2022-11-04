import React, { Component } from "react";
import { Navbar, Container, Nav } from 'react-bootstrap'
import SweetAlert from "sweetalert";
import { Navigate } from "react-router-dom";
export default class HeaderAdmin extends Component {
    constructor(){
        super()
        this.state={
            redirectToReferrer: false,
        }
    }

    Logout() {
        SweetAlert({
            title:"Apakah anda yakin?",
            text:"Ingin Logout",
            icon:"warning",
            dangerMode:true
        }).then(yes=>{
            if(yes){
                localStorage.clear()
                this.setState({redirectToReferrer:true})
                window.location.reload(true)
            }
        })


    }

    render() {
        if (this.state.redirectToReferrer) {
            return <Navigate to={"/"} />;
          }
        return (
            <div >
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Admin</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/add">Add Soal</Nav.Link>
                            <Nav.Link href="/view">Data Soal</Nav.Link>
                            <Nav.Link  onClick={(e)=>this.Logout()}>Logout</Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}
