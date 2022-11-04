import React, { Component } from 'react'
import {HeaderAdmin,AddStudentPage,Header,LoginPage} from "../Page"

export default class SettingStudentAdd extends Component {
  render() {
    const isLogin=localStorage.getItem('isLogin')
    if(isLogin==="true"){
      return (
        <div>
          <HeaderAdmin/>
          <AddStudentPage/>
        </div>
      )
    }else{
      return(
        <div>
          <Header/>
          <LoginPage/>
        </div>
      )
    }
  
  }
}
