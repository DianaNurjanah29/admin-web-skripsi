import React, { Component } from 'react'
import {HeaderAdmin,ViewStudentPage,Header,LoginPage} from "../Page"
export default class SettingStudentView extends Component {
  render() {
    const isLogin=localStorage.getItem('isLogin')
    if(isLogin==="true"){
      return (
        <div>
          <HeaderAdmin/>
          <ViewStudentPage/>
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
