"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadataQuery = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var gatsby_1 = require("gatsby");
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var globalStyle = (0, react_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 50px;\n  }\n"], ["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 50px;\n  }\n"])));
var textStyle = (0, react_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 17px;\n  font-weight: 700;\n  color: gray;\n"], ["\n  font-size: 17px;\n  font-weight: 700;\n  color: gray;\n"
    // Kebab Case
])));
// Kebab Case
var Text1 = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: 700;\n  text-decoration: ", ";\n"], ["\n  font-size: 20px;\n  font-weight: 700;\n  text-decoration: ", ";\n"
    // Camel case - 객체를 통한 Styled Component
])), function (_a) {
    var disable = _a.disable;
    return (disable ? 'line-through' : 'none');
});
// Camel case - 객체를 통한 Styled Component
var Text2 = (0, styled_1.default)('div')(function (disable) { return ({
    fontSize: '15px',
    color: 'blue',
    textDecoration: disable ? 'line-through' : 'none',
}); });
var InfoPage = function (_a) {
    var _b = _a.data.site.siteMetadata, title = _b.title, description = _b.description, author = _b.author;
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_1.Global, { styles: globalStyle }), (0, jsx_runtime_1.jsx)("div", __assign({ css: textStyle }, { children: title })), (0, jsx_runtime_1.jsx)(Text1, __assign({ disable: true }, { children: description })), (0, jsx_runtime_1.jsx)(Text2, __assign({ disable: true }, { children: author })), (0, jsx_runtime_1.jsx)(gatsby_1.Link, __assign({ to: "/" }, { children: "To main" }))] }));
};
exports.default = InfoPage;
exports.metadataQuery = (0, gatsby_1.graphql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  {\n    site {\n      siteMetadata {\n        title\n        description\n        author\n      }\n    }\n  }\n"], ["\n  {\n    site {\n      siteMetadata {\n        title\n        description\n        author\n      }\n    }\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
