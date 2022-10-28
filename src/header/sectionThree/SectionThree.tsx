import React from 'react';
import c from './sectionThree.module.css'

export const SectionThree = () => {
    return (
        <div className={c.container}>
            <div className={c.border}>
                <div className={c.intro}>
                    <h1>EXPERTISE</h1>
                    <p>Batman would be jealous.</p>
                </div>
                <div className={c.text}>
                    <div className={c.RightContainer}>
                        <div className={c.left}>
                            <div className={c.box}>
                                <div className={c.number}>01</div>
                                <div className={c.textInBox}>
                                    <h1>react</h1><p>React makes it painless to create interactive UIs. Design simple
                                    views for each state in your application, and React will efficiently update and
                                    render just the right components when your data changes.</p>
                                </div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>02</div>
                                <div className={c.textInBox}><h1>redux/redux-toolkit</h1><p>A Predictable State
                                    Container for JS Apps.Redux helps you write applications that behave consistently,
                                    run in different environments (client, server, and native), and are easy to
                                    test.</p></div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>03</div>
                                <div className={c.textInBox}><h1>js</h1><p>JavaScript is a scripting language that
                                    enables you to create dynamically updating content, control multimedia, animate
                                    images, and pretty much everything else. (Okay, not everything, but it is amazing
                                    what you can achieve with a few lines of JavaScript code.)</p></div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>04</div>
                                <div className={c.textInBox}><h1>typescript</h1><p>TypeScript code converts to
                                    JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno
                                    and in your apps.</p></div>
                            </div>
                        </div>
                        <div className={c.right}>

                            <div className={c.box}>
                                <div className={c.number}>05</div>
                                <div className={c.textInBox}><h1>mobx</h1><p>MobX is a battle tested library that makes
                                    state management simple and scalable by transparently applying functional reactive
                                    programming (TFRP).(Straightforward, Effortless optimal rendering)</p></div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>06</div>
                                <div className={c.textInBox}><h1>postgresql</h1><p>PostgreSQL is a powerful, open source
                                    object-relational database system with over 35 years of active development that has
                                    earned it a strong reputation for reliability, feature robustness, and
                                    performance.</p></div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>07</div>
                                <div className={c.textInBox}><h1>mongodb</h1><p>MongoDB is a non-relational document
                                    database that provides support for JSON-like storage. The MongoDB database has a
                                    flexible data model that enables you to store unstructured data, and it provides
                                    full indexing support, and replication with rich and intuitive APIs.
                                </p></div>
                            </div>
                            <div className={c.box}>
                                <div className={c.number}>08</div>
                                <div className={c.textInBox}><h1>firebase</h1><p>Firebase is a Backend-as-a-Service
                                    (Baas). It provides developers with a variety of tools and services to help them
                                    develop quality apps, grow their user base, and earn profit. It is built on Google's
                                    infrastructure. Firebase is categorized as a NoSQL database program, which stores
                                    data in JSON-like documents.</p></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>


    );
};

