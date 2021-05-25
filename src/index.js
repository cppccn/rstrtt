"use strict"

import React, { useState } from "react";
import ReactDOM from "react-dom";
import ProgressBar from "./ProgressBar"; 

function ProgressBarSample() {
    var [prcnt, setPrcnt] = useState(0);
    setTimeout(function increment() {
        if (prcnt < 100) {
            setPrcnt(prcnt+=10);
            setTimeout(increment, 1000);
        }
    }, 1000)
    return (<ProgressBar percent={prcnt}/>)
}

function ProgressBarSample_WithPercents() {
    var [prcnt, setPrcnt] = useState(0);
    setTimeout(function increment() {
        if (prcnt < 100) {
            setPrcnt(prcnt+=10);
            setTimeout(increment, 1000);
        }
    }, 1000)
    return (<ProgressBar percent={prcnt} show="True"/>)
}

function ProgressBarSample_success() {
    var [prcnt, setPrcnt] = useState(0);
    setTimeout(function increment() {
        if (prcnt < 100) {
            setPrcnt(prcnt+=10);
            setTimeout(increment, 1000);
        }
    }, 1000)
    return (<ProgressBar percent={prcnt} show="True" success={prcnt==100 || undefined}/>)
}

function ProgressBarSample_error() {
    var [prcnt, setPrcnt] = useState(0);
    setTimeout(function increment() {
        if (prcnt < 100) {
            setPrcnt(prcnt+=10);
            setTimeout(increment, 1000);
        }
    }, 1000)
    let sccss = undefined;
    if (prcnt==100) sccss = false;
    return (<ProgressBar percent={prcnt} show="True" success={sccss}/>)
}

var mountNode = document.getElementById("app");
ReactDOM.render(
    <div>
        <ProgressBarSample/><br/>
        <ProgressBarSample_WithPercents/><br/>
        <ProgressBarSample_success/><br/>
        <ProgressBarSample_error/><br/>
    </div>, mountNode);
