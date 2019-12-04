import * as React from "react";
import * as ReactDOM from "react-dom";
import {HelloWorldComponent} from "./hello.world.component";
const classes = require('./styles/index.scss');
const logoImg = require("./content/react-icon.png");

ReactDOM.render(
    <div className={classes.flexContainer}>
        <img src={logoImg} className={classes.logoImg}/>
        <HelloWorldComponent/>
    </div>,
    document.getElementById('react')
);