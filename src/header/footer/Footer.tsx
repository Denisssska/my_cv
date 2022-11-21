import React from 'react';
import c from './footer.module.css';


export const Footer = () => {
    return (

        <div className={c.border}>
            <div className={c.intro}>
                <h1>contact</h1>
                <p>Call me,maybe</p>
            </div>
            <div className={c.text}>
                <div className={c.RightContainer}>

                    <div className={c.navigation}>
                        <div className={c.contacts}>
                            <div className={c.location}>
                                <h4>Location</h4>
                                <address>Minsk, BLR</address>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>+375 29 574-39-21</p></div>
                        </div>
                        <div className={c.contacts}>
                            <div className={c.location}>
                                <h4>Web</h4>
                                <a href="#">

                                    <p>empty</p>
                                </a>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <a href="#">
                                    <p>yarmoshkoden18m@gmail.com</p>
                                </a>
                            </div>

                        </div>
                    </div>
                    <hr className={c.hr}/>
                    <div className={c.personContainer}>
                        <div className={c.personName}>
                            <h1 className={c.name}>Denis</h1>
                            <h1 className={c.surname}>YARMOSHKO</h1>
                        </div>
                        <div className={c.soc}>
                            <a target="_blank" href="https://www.linkedin.com/in/denis-yarmoshko-9b9495244/"
                               title='linkedIn'>
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px"
                                     height="50px">
                                    <path
                                        d="M25,2C12.3,2,2,12.3,2,25s10.3,23,23,23s23-10.3,23-23S37.7,2,25,2z M19,35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20	c0-0.5,0.5-1,1-1h4c0.5,0,1,0.5,1,1V35z M16,18c-1.6,0-3-1.4-3-3s1.4-3,3-3s3,1.4,3,3S17.6,18,16,18z M38,35c0,0.5-0.5,1-1,1h-4	c-0.5,0-1-0.5-1-1v-7.5c0-1.4-1.1-2.5-2.5-2.5S27,26.1,27,27.5V35c0,0.5-0.5,1-1,1h-4c-0.5,0-1-0.5-1-1V20c0-0.5,0.5-1,1-1h4	c0.5,0,1,0.4,1,1c1.1-0.6,2.2-1,3.5-1c4.1,0,7.5,3.4,7.5,7.5V35z"
                                        fill="#C4C4C4"/>
                                </svg>
                            </a>
                            <a title="instagram" target="_blank" href="#">
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px"
                                     height="50px">
                                    <path fill="#C4C4C4"
                                          d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
                                </svg>
                            </a>
                            <a title="telegram" target="_blank" href="https://t.me/bibur13">
                                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px"
                                     height="50px">
                                    <path fill="#C4C4C4"
                                          d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"/>
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

