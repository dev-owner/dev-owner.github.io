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
exports.getPostList = void 0;
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
// @ts-ignore
var react_1 = require("react");
var Introduction_1 = __importDefault(require("components/Main/Introduction"));
var CategoryList_1 = __importDefault(require("components/Main/CategoryList"));
var PostList_1 = __importDefault(require("components/Main/PostList"));
var gatsby_1 = require("gatsby");
var query_string_1 = __importDefault(require("query-string"));
var Template_1 = __importDefault(require("components/Common/Template"));
var IndexPage = function (_a) {
    var search = _a.location.search, _b = _a.data, _c = _b.site.siteMetadata, title = _c.title, description = _c.description, siteUrl = _c.siteUrl, edges = _b.allMarkdownRemark.edges, _d = _b.file, gatsbyImageData = _d.childImageSharp.gatsbyImageData, publicURL = _d.publicURL;
    var parsed = query_string_1.default.parse(search);
    var selectedCategory = typeof parsed.category !== 'string' || !parsed.category
        ? 'All'
        : parsed.category;
    var categoryList = (0, react_1.useMemo)(function () {
        return edges.reduce(function (list, _a) {
            var categories = _a.node.frontmatter.categories;
            categories.forEach(function (category) {
                if (list[category] === undefined)
                    list[category] = 1;
                else
                    list[category]++;
            });
            list['All']++;
            return list;
        }, { All: 0 });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Template_1.default, __assign({ title: title, description: description, url: siteUrl, image: publicURL }, { children: [(0, jsx_runtime_1.jsx)(Introduction_1.default, { profileImage: gatsbyImageData }), (0, jsx_runtime_1.jsx)(CategoryList_1.default, { selectedCategory: selectedCategory, categoryList: categoryList }), (0, jsx_runtime_1.jsx)(PostList_1.default, { selectedCategory: selectedCategory, posts: edges })] })));
};
exports.default = IndexPage;
exports.getPostList = (0, gatsby_1.graphql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getPostList {\n    site {\n      siteMetadata {\n        title\n        description\n        siteUrl\n      }\n    }\n    allMarkdownRemark(\n      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }\n    ) {\n      edges {\n        node {\n          id\n          fields {\n            slug\n          }\n          frontmatter {\n            title\n            summary\n            date(formatString: \"YYYY.MM.DD.\")\n            categories\n            thumbnail {\n              childImageSharp {\n                gatsbyImageData(width: 768, height: 400)\n              }\n            }\n          }\n        }\n      }\n    }\n    file(name: { eq: \"profile-image\" }) {\n      childImageSharp {\n        gatsbyImageData(width: 120, height: 120)\n      }\n      publicURL\n    }\n  }\n"], ["\n  query getPostList {\n    site {\n      siteMetadata {\n        title\n        description\n        siteUrl\n      }\n    }\n    allMarkdownRemark(\n      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }\n    ) {\n      edges {\n        node {\n          id\n          fields {\n            slug\n          }\n          frontmatter {\n            title\n            summary\n            date(formatString: \"YYYY.MM.DD.\")\n            categories\n            thumbnail {\n              childImageSharp {\n                gatsbyImageData(width: 768, height: 400)\n              }\n            }\n          }\n        }\n      }\n    }\n    file(name: { eq: \"profile-image\" }) {\n      childImageSharp {\n        gatsbyImageData(width: 120, height: 120)\n      }\n      publicURL\n    }\n  }\n"])));
var templateObject_1;
