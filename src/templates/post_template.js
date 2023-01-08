"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryMarkdownDataBySlug = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var gatsby_1 = require("gatsby");
var Template_1 = __importDefault(require("components/Common/Template"));
var PostHead_1 = __importDefault(require("components/Post/PostHead"));
var PostContent_1 = __importDefault(require("components/Post/PostContent"));
var PostTemplate = function (_a) {
    var edges = _a.data.allMarkdownRemark.edges;
    var _b = edges[0].node, html = _b.html, _c = _b.frontmatter, title = _c.title, summary = _c.summary, date = _c.date, categories = _c.categories, gatsbyImageData = _c.thumbnail.childImageSharp.gatsbyImageData;
    return ((0, jsx_runtime_1.jsxs)(Template_1.default, { children: [(0, jsx_runtime_1.jsx)(PostHead_1.default, { title: title, date: date, categories: categories, thumbnail: gatsbyImageData }), (0, jsx_runtime_1.jsx)(PostContent_1.default, { html: html })] }));
};
exports.default = PostTemplate;
exports.queryMarkdownDataBySlug = (0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query queryMarkdownDataBySlug($slug: String) {\n    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {\n      edges {\n        node {\n          html\n          frontmatter {\n            title\n            summary\n            date(formatString: \"YYYY.MM.DD.\")\n            categories\n            thumbnail {\n              childImageSharp {\n                gatsbyImageData\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query queryMarkdownDataBySlug($slug: String) {\n    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {\n      edges {\n        node {\n          html\n          frontmatter {\n            title\n            summary\n            date(formatString: \"YYYY.MM.DD.\")\n            categories\n            thumbnail {\n              childImageSharp {\n                gatsbyImageData\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
