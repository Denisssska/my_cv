import React from 'react';
import c from './sectionFour.module.css';

export const SectionFour = () => {
    return (
        <div className={c.container}>
            <div className={c.skills}>
                <h1>Skills</h1>
            </div>
            <div className={c.skillsParams}>
                <div className={c.left}>
                    <div className={c.box}>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>CSS</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}>123</div>
                        </div>
                    </div>
                    <div className={c.box}>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>Git</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}></div>
                        </div>
                    </div>
                    <div className={c.box}>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>React</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}></div>
                        </div>
                    </div>
                    <div>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>JS</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}></div>
                        </div>
                    </div>
                </div>


                <div className={c.right}>
                    <div className={c.box}>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>some text</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}></div>
                        </div>
                    </div>
                    <div className={c.box}>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>some text</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}></div>
                        </div>
                    </div>
                    <div className={c.box}>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>some text</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}></div>
                        </div>
                    </div>
                    <div>
                        <span className={c.media}>80<small>%</small></span>
                        <span className={c.mediaText}>some text</span>
                        <div className={c.progressBar}>
                            <div className={c.filler}></div>
                        </div>
                    </div>
                </div>


            </div>

        </div>

    );
};

