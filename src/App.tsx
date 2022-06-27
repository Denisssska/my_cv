import React from 'react';
import {Header} from "./header/Header";
import c from './App.module.css'
import {Section} from "./header/sectionOne/Section";
import {SectionTwo} from "./header/sectionTwo/SectionTwo";
import {SectionThree} from "./header/sectionThree/SectionThree";
import {SectionFour} from "./header/sectionFour/SectionFour";
import {SectionFive} from "./header/sectionFive/SectionFive";
import {Footer} from "./header/footer/Footer";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import {Pagination} from "swiper";

function App() {

    return (
        // <Swiper direction={"horizontal"}
        //         pagination={{
        //             clickable: true,
        //         }}
        //         modules={[Pagination]}
        //         className="mySwiper">
        //     <SwiperSlide>1</SwiperSlide>
        //     <SwiperSlide>2</SwiperSlide>
        //     <SwiperSlide>3</SwiperSlide>
        //     <SwiperSlide>4</SwiperSlide>
        //     <SwiperSlide>5</SwiperSlide>
        //     <SwiperSlide>6</SwiperSlide>
        //     <SwiperSlide>7</SwiperSlide>
        // </Swiper>

        <div className={c.app}>
            {/*<Header/>*/}
            <Section/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <Footer/>
        </div>
    );
}

export default App;
