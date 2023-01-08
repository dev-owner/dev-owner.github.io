"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("@emotion/react");
var defaultStyle = (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');\n\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Nanum Myeongjo', serif;\n  }\n\n  html,\n  body,\n  #___gatsby {\n    height: 100%;\n  }\n\n  a,\n  a:hover {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n  }\n"], ["\n  @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');\n\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Nanum Myeongjo', serif;\n  }\n\n  html,\n  body,\n  #___gatsby {\n    height: 100%;\n  }\n\n  a,\n  a:hover {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n  }\n"])));
var GlobalStyle = function () {
    return (0, jsx_runtime_1.jsx)(react_1.Global, { styles: defaultStyle });
};
exports.default = GlobalStyle;
var templateObject_1;
