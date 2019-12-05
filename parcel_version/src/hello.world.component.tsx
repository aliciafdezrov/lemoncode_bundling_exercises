import React from 'react';
import './styles/hello.world.component.scss';

//@ts-ignore
const getEnvironmentVariableInUpperCase = () => process.env.ENVIRONMENT.toUpperCase();

export const HelloWorldComponent = () => {
    return (
        <div className="flex-container-component">
            <h1>HELLO WORLD FROM REACT!</h1>
            <h3>THIS IS {getEnvironmentVariableInUpperCase()}</h3>
        </div>
    );
};