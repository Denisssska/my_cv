import React from 'react';
import c from './sectionForProject.module.css';

export const SectionForProject = () => {
    return (
        <div className={c.container}>
            <div className={c.border}>
                <div className={c.intro}>
                    <h1>My Projects</h1>
                    <p>Production</p>
                    <p>My education )</p>
                </div>
                <div className={c.text}>
                    <div className={c.RightContainer}>
                        <div className={c.left}>
                            <div className={c.box}>
                                <div className={c.textInBox}>
                                    <h1>foodshare (prod)</h1>
                                    <a target={"_blank"} href={'https://foodshare.club/'}>View
                                        project</a>
                                </div>
                            </div>
                            <div className={c.box}>
                                <div className={c.textInBox}><h1>Blog</h1>
                                    <a target={"_blank"} href={'https://front-posts.vercel.app/'}>View
                                        project</a>
                                </div>
                            </div>
                        </div>
                        <div className={c.right}>
                            <div className={c.box}>
                                <div className={c.textInBox}>
                                    <h1>Cards</h1>
                                    <a target={"_blank"} href={'https://Denisssska.github.io/friday_project'}>View
                                        project</a>
                                </div>
                            </div>
                            <div className={c.box}>
                                <div className={c.textInBox}><h1>Next-app</h1>
                                    <a target={"_blank"} href={'https://next-js-app-smoky-six.vercel.app/'}>View
                                        project</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </div>


    );
};

