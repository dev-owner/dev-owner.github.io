"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var MarkdownRenderer = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Renderer Style\n  display: flex;\n  flex-direction: column;\n  width: 768px;\n  margin: 0 auto;\n  padding: 100px 0;\n  word-break: break-all;\n\n  // Markdown Style\n  line-height: 1.8;\n  font-size: 16px;\n  font-weight: 400;\n\n  // Apply padding attribute to all elements\n  p {\n    padding: 3px 0;\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-weight: 800;\n    margin-bottom: 30px;\n  }\n\n  * + h1,\n  * + h2,\n  * + h3 {\n    margin-top: 80px;\n  }\n\n  hr + h1,\n  hr + h2,\n  hr + h3 {\n    margin-top: 0;\n  }\n\n  h1 {\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 25px;\n  }\n\n  h3 {\n    font-size: 20px;\n  }\n\n  blockquote {\n    margin: 30px 0;\n    padding: 5px 15px;\n    border-left: 2px solid #000000;\n    font-weight: 800;\n  }\n\n  ol,\n  ul {\n    margin-left: 20px;\n    padding: 30px 0;\n  }\n\n  hr {\n    border: 1px solid #000000;\n    margin: 100px 0;\n  }\n\n  a {\n    color: #4263eb;\n    text-decoration: underline;\n  }\n\n  pre[class*='language-'] {\n    margin: 30px 0;\n    padding: 15px;\n    font-size: 15px;\n\n    ::-webkit-scrollbar-thumb {\n      background: rgba(255, 255, 255, 0.5);\n      border-radius: 3px;\n    }\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    tab-size: 2;\n  }\n"], ["\n  // Renderer Style\n  display: flex;\n  flex-direction: column;\n  width: 768px;\n  margin: 0 auto;\n  padding: 100px 0;\n  word-break: break-all;\n\n  // Markdown Style\n  line-height: 1.8;\n  font-size: 16px;\n  font-weight: 400;\n\n  // Apply padding attribute to all elements\n  p {\n    padding: 3px 0;\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-weight: 800;\n    margin-bottom: 30px;\n  }\n\n  * + h1,\n  * + h2,\n  * + h3 {\n    margin-top: 80px;\n  }\n\n  hr + h1,\n  hr + h2,\n  hr + h3 {\n    margin-top: 0;\n  }\n\n  h1 {\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 25px;\n  }\n\n  h3 {\n    font-size: 20px;\n  }\n\n  blockquote {\n    margin: 30px 0;\n    padding: 5px 15px;\n    border-left: 2px solid #000000;\n    font-weight: 800;\n  }\n\n  ol,\n  ul {\n    margin-left: 20px;\n    padding: 30px 0;\n  }\n\n  hr {\n    border: 1px solid #000000;\n    margin: 100px 0;\n  }\n\n  a {\n    color: #4263eb;\n    text-decoration: underline;\n  }\n\n  pre[class*='language-'] {\n    margin: 30px 0;\n    padding: 15px;\n    font-size: 15px;\n\n    ::-webkit-scrollbar-thumb {\n      background: rgba(255, 255, 255, 0.5);\n      border-radius: 3px;\n    }\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    tab-size: 2;\n  }\n"])));
var PostContent = function (_a) {
    var html = _a.html;
    return (0, jsx_runtime_1.jsx)(MarkdownRenderer, { dangerouslySetInnerHTML: { __html: html } });
};
exports.default = PostContent;
var templateObject_1;
