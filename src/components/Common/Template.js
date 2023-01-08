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
var react_helmet_1 = require("react-helmet");
var Container = styled_1.default.main(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));
var Template = function (_a) {
    var title = _a.title, description = _a.description, url = _a.url, image = _a.image, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(Container, { children: [(0, jsx_runtime_1.jsxs)(react_helmet_1.Helmet, { children: [(0, jsx_runtime_1.jsx)("title", { children: title }), (0, jsx_runtime_1.jsx)("meta", { name: "description", content: description }), (0, jsx_runtime_1.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), (0, jsx_runtime_1.jsx)("meta", { httpEquiv: "Content-Type", content: "text/html;charset=UTF-8" }), (0, jsx_runtime_1.jsx)("meta", { property: "og:type", content: "website" }), (0, jsx_runtime_1.jsx)("meta", { property: "og:title", content: title }), (0, jsx_runtime_1.jsx)("meta", { property: "og:description", content: description }), (0, jsx_runtime_1.jsx)("meta", { property: "og:image", content: image }), (0, jsx_runtime_1.jsx)("meta", { property: "og:url", content: url }), (0, jsx_runtime_1.jsx)("meta", { property: "og:site_name", content: title }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:card", content: "summary" }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:title", content: title }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:description", content: description }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:image", content: image }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:site", content: "@\uC0AC\uC6A9\uC790\uC774\uB984" }), (0, jsx_runtime_1.jsx)("meta", { name: "twitter:creator", content: "@\uC0AC\uC6A9\uC790\uC774\uB984" }), (0, jsx_runtime_1.jsx)("meta", { name: "google-site-verification", content: "3fZBl0qGT1FPNNPKuW8K4zu4I475C4YolT11VHusyTU" }), (0, jsx_runtime_1.jsx)("html", { lang: "ko" })] }), (0, jsx_runtime_1.jsx)(GlobalStyle_1.default, {}), children, (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Template;
var templateObject_1;
