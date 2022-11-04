import React, { Component } from 'react'
import { HomePage, Header, Dashboard_Page, HeaderAdmin, Banner } from '../Page'

export default class SettingHomePage extends Component {
    render() {
        const isLogin = localStorage.getItem('isLogin')
        // console.log(isLogin)
        if (isLogin === "true") {
            return (
                <div>
                    <HeaderAdmin />
                    <Dashboard_Page />
                    <Banner/>
                </div>
            )
        } else {
            return (
                <div>
                    <Header />
                    <Banner/>
                    {/* <HomePage /> */}
                </div>
            )
        }

    }
}
