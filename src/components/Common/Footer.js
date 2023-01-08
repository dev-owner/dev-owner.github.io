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
var FooterWrapper = styled_1.default.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  place-items: center;\n  margin-top: auto;\n  padding: 50px 0;\n  font-size: 15px;\n  text-align: center;\n  line-height: 1.5;\n\n  @media (max-width: 768px) {\n    font-size: 13px;\n  }\n"], ["\n  display: grid;\n  place-items: center;\n  margin-top: auto;\n  padding: 50px 0;\n  font-size: 15px;\n  text-align: center;\n  line-height: 1.5;\n\n  @media (max-width: 768px) {\n    font-size: 13px;\n  }\n"])));
var Footer = function () {
    return ((0, jsx_runtime_1.jsxs)(FooterWrapper, { children: ["Thank you for visiting my blog, Have a good day :)", (0, jsx_runtime_1.jsx)("br", {}), "\u00A9 2022 Developer dev-0wner, Powered By Gatsby."] }));
};
exports.default = Footer;
var templateObject_1;
