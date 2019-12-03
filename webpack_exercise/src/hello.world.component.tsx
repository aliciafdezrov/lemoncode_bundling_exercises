import * as React from 'react';
const classes = require('./styles/hello.world.component.scss');
//Aquí hay un comentario en código que en producción no aparecerá gracias a html-webpack-plugin

const getEnvironment = () => process.env.production ? "PRODUCCIÓN" : "DESARROLLO";

export const HelloWorldComponent = () => {
    return (
        <div className={classes.flexContainer}>
            <h1>HELLO WORLD FROM REACT!</h1>
            <h3>ESTAMOS EN: {getEnvironment()}</h3>
        </div>
    );
};