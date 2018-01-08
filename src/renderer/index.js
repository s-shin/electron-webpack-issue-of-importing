// import * as cm from "codemirror";
// import "codemirror/mode/javascript/javascript";
// or
const cm = require("codemirror");
require("codemirror/mode/javascript/javascript");

const pre = document.createElement("pre");
pre.textContent = JSON.stringify(Object.keys(cm.modes));
document.body.appendChild(pre);
