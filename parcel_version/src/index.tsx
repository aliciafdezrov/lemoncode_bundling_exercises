import React from "react";
import ReactDOM from "react-dom";
import {HelloWorldComponent} from "./hello.world.component";
import './styles/index.scss';
const image = require("./content/react-icon.png");

ReactDOM.render(
    <div className="flex-container">
        <img src={image} className="logo-img"/>
        <HelloWorldComponent/>
    </div>,
    document.getElementById('react')
);