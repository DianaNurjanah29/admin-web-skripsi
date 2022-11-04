import React, { Component } from 'react'
import { HeaderAdmin, EditStudentPage, Header, LoginPage } from '../Page'

export default class SettingEditPage extends Component {
    render() {
        const isLogin = localStorage.getItem('isLogin')

        if (isLogin === "true") {
            return (
                <div>
                    <HeaderAdmin />
                    <EditStudentPage />
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <LoginPage />
                </div>
            )
        }
    }
}
