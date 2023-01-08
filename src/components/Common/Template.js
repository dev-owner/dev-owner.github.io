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
var GlobalStyle_1 = __importDefault(require("components/Common/GlobalStyle"));
var Footer_1 = __importDefault(require("components/Common/Footer"));
var Container = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));
var Template = function (_a) {
    var children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsx)(GlobalStyle_1.default, {}), children, (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Template;
var templateObject_1;
