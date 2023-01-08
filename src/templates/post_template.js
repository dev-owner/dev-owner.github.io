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
exports.queryMarkdownDataBySlug = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var gatsby_1 = require("gatsby");
var Template_1 = __importDefault(require("components/Common/Template"));
var PostHead_1 = __importDefault(require("components/Post/PostHead"));
var PostContent_1 = __importDefault(require("components/Post/PostContent"));
var CommentWidget_1 = __importDefault(require("components/Post/CommentWidget"));
var PostTemplate = function (_a) {
    var edges = _a.data.allMarkdownRemark.edges, href = _a.location.href;
    var _b = edges[0].node, html = _b.html, _c = _b.frontmatter, title = _c.title, summary = _c.summary, date = _c.date, categories = _c.categories, _d = _c.thumbnail, gatsbyImageData = _d.childImageSharp.gatsbyImageData, publicURL = _d.publicURL;
    return ((0, jsx_runtime_1.jsxs)(Template_1.default, __assign({ title: title, description: summary, url: href, image: publicURL }, { children: [(0, jsx_runtime_1.jsx)(PostHead_1.default, { title: title, date: date, categories: categories, thumbnail: gatsbyImageData }), (0, jsx_runtime_1.jsx)(PostContent_1.default, { html: html }), (0, jsx_runtime_1.jsx)(CommentWidget_1.default, {})] })));
};
exports.default = PostTemplate;
exports.queryMarkdownDataBySlug = (0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query queryMarkdownDataBySlug($slug: String) {\n    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {\n      edges {\n        node {\n          html\n          frontmatter {\n            title\n            summary\n            date(formatString: \"YYYY.MM.DD.\")\n            categories\n            thumbnail {\n              childImageSharp {\n                gatsbyImageData\n              }\n              publicURL\n            }\n          }\n        }\n      }\n    }\n  }\n"], ["\n  query queryMarkdownDataBySlug($slug: String) {\n    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {\n      edges {\n        node {\n          html\n          frontmatter {\n            title\n            summary\n            date(formatString: \"YYYY.MM.DD.\")\n            categories\n            thumbnail {\n              childImageSharp {\n                gatsbyImageData\n              }\n              publicURL\n            }\n          }\n        }\n      }\n    }\n  }\n"])));
var templateObject_1;
