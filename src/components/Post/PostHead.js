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
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var styled_1 = __importDefault(require("@emotion/styled"));
var PostHeadInfo_1 = __importDefault(require("components/Post/PostHeadInfo"));
var PostHeadWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  height: 400px;\n"], ["\n  position: relative;\n  width: 100%;\n  height: 400px;\n"])));
var BackgroundImage = (0, styled_1.default)(function (props) { return ((0, jsx_runtime_1.jsx)(gatsby_plugin_image_1.GatsbyImage, __assign({}, props, { style: { position: 'absolute' } }))); })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: -1;\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  filter: brightness(0.25);\n"], ["\n  z-index: -1;\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n  filter: brightness(0.25);\n"])));
var PostHead = function (_a) {
    var title = _a.title, date = _a.date, categories = _a.categories, thumbnail = _a.thumbnail;
    return ((0, jsx_runtime_1.jsxs)(PostHeadWrapper, { children: [(0, jsx_runtime_1.jsx)(BackgroundImage, { image: thumbnail, alt: "thumbnail" }), (0, jsx_runtime_1.jsx)(PostHeadInfo_1.default, { title: title, date: date, categories: categories })] }));
};
exports.default = PostHead;
var templateObject_1, templateObject_2;
