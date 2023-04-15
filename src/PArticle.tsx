import React from 'react';
import c from './App.module.css';
import {Particles} from "@blackbox-vision/react-particles";


export const PArticle = () => {
    const params = {
        particles: {
            number: {
                value: 50,
            },
            size: {
                value: 3,
            },
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
        },
    }
    return (
        <div className={c.particle}>
            <Particles
                id="simple"
                width="auto"
                height="100vh"
                params={params}
            />
        </div>
    );
};

