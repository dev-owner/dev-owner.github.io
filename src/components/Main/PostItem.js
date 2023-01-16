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
var styled_1 = __importDefault(require("@emotion/styled"));
var gatsby_1 = require("gatsby");
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var PostItemWrapper = (0, styled_1.default)(gatsby_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);\n  transition: 0.3s box-shadow;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);\n  transition: 0.3s box-shadow;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  }\n"])));
var ThumbnailImage = (0, styled_1.default)(gatsby_plugin_image_1.GatsbyImage)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0 0;\n"], ["\n  width: 100%;\n  height: 200px;\n  border-radius: 10px 10px 0 0;\n"])));
var PostItemContent = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 15px;\n"])));
var Title = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: -webkit-box;\n  overflow: hidden;\n  margin-bottom: 3px;\n  text-overflow: ellipsis;\n  white-space: normal;\n  overflow-wrap: break-word;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 20px;\n  font-weight: 700;\n"], ["\n  display: -webkit-box;\n  overflow: hidden;\n  margin-bottom: 3px;\n  text-overflow: ellipsis;\n  white-space: normal;\n  overflow-wrap: break-word;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 20px;\n  font-weight: 700;\n"])));
var Date = styled_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: 14px;\n  font-weight: 400;\n  opacity: 0.7;\n"], ["\n  font-size: 14px;\n  font-weight: 400;\n  opacity: 0.7;\n"])));
var Category = styled_1.default.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  margin: 10px -5px;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 10px;\n  margin: 10px -5px;\n"])));
var CategoryItem = styled_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin: 2.5px 5px;\n  padding: 3px 5px;\n  border-radius: 3px;\n  background: black;\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n"], ["\n  margin: 2.5px 5px;\n  padding: 3px 5px;\n  border-radius: 3px;\n  background: black;\n  font-size: 14px;\n  font-weight: 700;\n  color: white;\n"])));
var Summary = styled_1.default.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: -webkit-box;\n  overflow: hidden;\n  margin-top: auto;\n  text-overflow: ellipsis;\n  white-space: normal;\n  overflow-wrap: break-word;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 16px;\n  opacity: 0.8;\n"], ["\n  display: -webkit-box;\n  overflow: hidden;\n  margin-top: auto;\n  text-overflow: ellipsis;\n  white-space: normal;\n  overflow-wrap: break-word;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 16px;\n  opacity: 0.8;\n"])));
var PostItem = function (_a) {
    var title = _a.title, date = _a.date, categories = _a.categories, summary = _a.summary, gatsbyImageData = _a.thumbnail.childImageSharp.gatsbyImageData, link = _a.link;
    return ((0, jsx_runtime_1.jsxs)(PostItemWrapper, __assign({ to: link }, { children: [(0, jsx_runtime_1.jsx)(ThumbnailImage, { image: gatsbyImageData, alt: "Post Item Image" }), (0, jsx_runtime_1.jsxs)(PostItemContent, { children: [(0, jsx_runtime_1.jsx)(Title, { children: title }), (0, jsx_runtime_1.jsx)(Date, { children: date }), (0, jsx_runtime_1.jsx)(Category, { children: categories.map(function (category) { return ((0, jsx_runtime_1.jsx)(CategoryItem, { children: category })); }) }), (0, jsx_runtime_1.jsx)(Summary, { children: summary })] })] })));
};
exports.default = PostItem;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
