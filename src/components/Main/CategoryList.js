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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var styled_1 = __importDefault(require("@emotion/styled"));
var gatsby_1 = require("gatsby");
var CategoryListWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 768px;\n  margin: 100px auto 0;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 50px;\n    padding: 0 20px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  width: 768px;\n  margin: 100px auto 0;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    margin-top: 50px;\n    padding: 0 20px;\n  }\n"])));
var CategoryList = function (_a) {
    var selectedCategory = _a.selectedCategory, categoryList = _a.categoryList;
    var CategoryItem = (0, styled_1.default)(function (_a) {
        var active = _a.active, props = __rest(_a, ["active"]);
        return ((0, jsx_runtime_1.jsx)(gatsby_1.Link, __assign({}, props)));
    })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin-right: 20px;\n    padding: 5px 0;\n    font-size: 18px;\n    font-weight: ", ";\n    cursor: pointer;\n\n    &:last-of-type {\n      margin-right: 0;\n    }\n\n    @media (max-width: 768px) {\n      font-size: 15px;\n    }\n  "], ["\n    margin-right: 20px;\n    padding: 5px 0;\n    font-size: 18px;\n    font-weight: ", ";\n    cursor: pointer;\n\n    &:last-of-type {\n      margin-right: 0;\n    }\n\n    @media (max-width: 768px) {\n      font-size: 15px;\n    }\n  "])), function (_a) {
        var active = _a.active;
        return (active ? '800' : '400');
    });
    return ((0, jsx_runtime_1.jsx)(CategoryListWrapper, { children: Object.entries(categoryList).map(function (_a) {
            var name = _a[0], count = _a[1];
            return ((0, jsx_runtime_1.jsxs)(CategoryItem, __assign({ to: "/?category=".concat(name), active: name === selectedCategory }, { children: ["#", name, "(", count, ")"] }), name));
        }) }));
};
exports.default = CategoryList;
var templateObject_1, templateObject_2;
