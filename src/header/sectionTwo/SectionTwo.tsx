import React from 'react';
import c from './sectionTwo.module.css';

export const SectionTwo = () => {
    return (
        <div className={c.container}>
            <div className={c.border}>
                <div className={c.intro}>
                    <h1>INTRO</h1>
                    <p>What i am all about</p>
                </div>
                <div className={c.text}>
                    <p>Hello, I am a Front-End developer. I have experience in creating SPA with React/Redux/TypeScript.
                        Now I am improving my skills in this direction and expanding them with new technologies. I spend
                        my free time with educational books and also improve my English. Open for your suggestions.
                    </p>
                </div>
            </div>
        </div>
    );
};

