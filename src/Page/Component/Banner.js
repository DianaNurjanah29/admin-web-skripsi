import React, { Component } from 'react'
import AliceCarousel from 'react-alice-carousel'
import gambar1 from "../../Assets/img/1.svg"
import gambar2 from "../../Assets/img/2.svg"
import gambar3 from "../../Assets/img/3.svg"
import "../../Css/Banner.css"
import "react-alice-carousel/lib/alice-carousel.css";

export default class Banner extends Component {
    render() {
        return (
            <div className='banner'>
                <AliceCarousel autoPlay autoPlayInterval="1000">
                    <img
                        src={gambar1}
                        alt=""
                        className='banner'
                    />
                    <img
                        src={gambar2}
                        alt=""
                        className='banner'
                    />
                    <img
                        src={gambar3}
                        alt=""
                        className='banner'
                    />
                </AliceCarousel>
            </div>
        )
    }
}
