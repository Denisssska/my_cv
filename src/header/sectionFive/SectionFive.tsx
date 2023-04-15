import React from 'react';
import c from './sectionFive.module.css';

export const SectionFive = () => {
    return (
        <div className={c.container}>
            <div className={c.border}>
                <div className={c.intro}>
                    <h1>education</h1>
                    <p>Lazy isn't in my vocabulary</p>
                </div>
                <div className={c.text}>
                    <div className={c.RightContainer}>
                        <div className={c.boxLine}>
                            <div className={c.timePoint}></div>
                            <div className={c.textInBox}>
                                <div className={c.timeWork}>2007-2012</div>
                                <h1 className={c.workPlace}>Belarusian State agrarian University</h1>
                                <h4 className={c.timeWorkTitle}>Mechanical Engineer</h4>
                            </div>
                            <div className={c.about}><p>Technical support of agricultural production processes.</p>
                            </div>
                        </div>
                        <div className={c.boxLine}>
                            <div className={c.timePoint}></div>
                            <div className={c.textInBox}>
                                <div className={c.timeWork}>2007-2015</div>
                                <h1 className={c.workPlace}>IT Incubator</h1>
                                <h4 className={c.timeWorkTitle}>React - developer</h4>
                            </div>
                            <div className={c.about}><p>Creating SPA with React/Redux/TypeScript.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

