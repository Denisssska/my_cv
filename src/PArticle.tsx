import React, {useCallback} from 'react';
import {Container, Engine, ISourceOptions} from "tsparticles-engine";
import {loadFull} from "tsparticles";
// import {Particles} from "react-tsparticles";
import c from './App.module.css';
import {Particles} from "@blackbox-vision/react-particles";


export const PArticle = () => {
    const optionsOne: ISourceOptions = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {min: 1, max: 5},
            },
        },
        detectRetina: true,
    };
    const snow: ISourceOptions = {preset: "snow"}

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <div className={c.particle}>
            <Particles
                id="simple"
                width="auto"
                height="100vh"
                style={{

                    // backgroundColor: 'blue',
                }}
                params={{
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
                }}
            />
            {/*<Particles id="tsparticles" init={particlesInit}*/}
            {/*           loaded={particlesLoaded} options={snow}/>*/}
        </div>
    );
};

