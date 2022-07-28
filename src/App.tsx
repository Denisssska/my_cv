import React from 'react';
import c from './App.module.css'
import {Section} from "./header/sectionOne/Section";
import {SectionDwa} from "./header/sectionTwo/SectionDwa";
import {SectionThree} from "./header/sectionThree/SectionThree";
import {SectionFour} from "./header/sectionFour/SectionFour";
import {SectionFive} from "./header/sectionFive/SectionFive";
import {Footer} from "./header/footer/Footer";

function App() {
    return (
        <div className={c.app}>
            <Section/>
            <SectionDwa/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <Footer/>
        </div>

    );
}

export default App;
