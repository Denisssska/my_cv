import React from 'react';
import c from './App.module.css'
import {Section} from "./header/sectionOne/Section";
import {SectionDwa} from "./header/sectionTwo/SectionDwa";
import {SectionThree} from "./header/sectionThree/SectionThree";

function App() {
    return (
        <div className={c.app}>

            {/*<Header/>*/}
            <Section/>
            <SectionDwa/>
            <SectionThree/>
            {/*<SectionFour/>*/}
            {/*<SectionFive/>*/}
            {/*<Footer/>*/}
        </div>

    );
}

export default App;
