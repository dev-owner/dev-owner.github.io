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
var gatsby_plugin_image_1 = require("gatsby-plugin-image");
var ProfileImageWrapper = (0, styled_1.default)(gatsby_plugin_image_1.GatsbyImage)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 120px;\n  height: 120px;\n  margin-bottom: 30px;\n  border-radius: 50%;\n\n  @media (max-width: 768px) {\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  width: 120px;\n  height: 120px;\n  margin-bottom: 30px;\n  border-radius: 50%;\n\n  @media (max-width: 768px) {\n    width: 80px;\n    height: 80px;\n  }\n"])));
var ProfileImage = function (_a) {
    var profileImage = _a.profileImage;
    return (0, jsx_runtime_1.jsx)(ProfileImageWrapper, { image: profileImage, alt: "Profile Image" });
};
exports.default = ProfileImage;
var templateObject_1;
