import React from 'react';
import c from './sectionForProject.module.css';
import {NavLink} from "react-router-dom";

export const SectionForProject = () => {
    return (
        <div className={c.container}>
            <div className={c.border}>
                <div className={c.intro}>
                    <h1>My Projects</h1>
                    <p>My education )</p>
                </div>
                <div className={c.text}>
                    <div className={c.RightContainer}>
                        <div className={c.left}>
                            <div className={c.box}>
                                <div className={c.number}>01</div>
                                <a target={"_blank"} href={'https://todolist000incubator.herokuapp.com/'}>View
                                    project</a>
                                <div className={c.textInBox}>

                                    <h1>todolist</h1>
                                </div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>02</div>
                                <a target={"_blank"} href={'https://front-posts-denisssska.vercel.app/'}>View
                                    project</a>
                                <div className={c.textInBox}><h1>Blog</h1></div>
                            </div>
                        </div>
                        <div className={c.right}>

                            <div className={c.box}>
                                <div className={c.number}>03</div>
                                <a target={"_blank"} href={'https://Denisssska.github.io/friday_project'}>View
                                    project</a>
                                <div className={c.textInBox}><h1>Cards</h1></div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>04</div>
                                <div className={c.textInBox}><h1>Shop</h1><p>Shop</p></div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>


    );
};

