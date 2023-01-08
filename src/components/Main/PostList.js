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
var react_1 = require("@emotion/react");
var styled_1 = __importDefault(require("@emotion/styled"));
var PostItem_1 = __importDefault(require("components/Main/PostItem"));
var useInfiniteScroll_1 = __importDefault(require("hooks/useInfiniteScroll"));
var PostListWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  width: 768px;\n  margin: 0 auto;\n  padding: 50px 0 100px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    grid-template-columns: 1fr;\n    padding: 50px 20px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  width: 768px;\n  margin: 0 auto;\n  padding: 50px 0 100px;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    grid-template-columns: 1fr;\n    padding: 50px 20px;\n  }\n"])));
var PostList = function (_a) {
    var selectedCategory = _a.selectedCategory, posts = _a.posts;
    var _b = (0, useInfiniteScroll_1.default)(selectedCategory, posts), containerRef = _b.containerRef, postList = _b.postList;
    return ((0, jsx_runtime_1.jsx)(PostListWrapper, __assign({ ref: containerRef }, { children: postList.map(function (_a) {
            var _b = _a.node, id = _b.id, slug = _b.fields.slug, frontmatter = _b.frontmatter;
            return ((0, react_1.createElement)(PostItem_1.default, __assign({}, frontmatter, { link: slug, key: id })));
        }) })));
};
exports.default = PostList;
var templateObject_1;
