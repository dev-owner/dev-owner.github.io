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
var ProfileImage_1 = __importDefault(require("components/Main/ProfileImage"));
var Background = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);\n  color: #ffffff;\n"], ["\n  width: 100%;\n  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);\n  color: #ffffff;\n"])));
var Wrapper = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 768px;\n  height: 400px;\n  margin: 0 auto;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 300px;\n    padding: 0 20px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  width: 768px;\n  height: 400px;\n  margin: 0 auto;\n\n  @media (max-width: 768px) {\n    width: 100%;\n    height: 300px;\n    padding: 0 20px;\n  }\n"])));
var SubTitle = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: 20px;\n  font-weight: 400;\n\n  @media (max-width: 768px) {\n    font-size: 15px;\n  }\n"], ["\n  font-size: 20px;\n  font-weight: 400;\n\n  @media (max-width: 768px) {\n    font-size: 15px;\n  }\n"])));
var Title = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  margin-top: 5px;\n  font-size: 35px;\n  font-weight: 700;\n\n  @media (max-width: 768px) {\n    font-size: 25px;\n  }\n"], ["\n  margin-top: 5px;\n  font-size: 35px;\n  font-weight: 700;\n\n  @media (max-width: 768px) {\n    font-size: 25px;\n  }\n"])));
var Introduction = function (_a) {
    var profileImage = _a.profileImage;
    return ((0, jsx_runtime_1.jsx)(Background, { children: (0, jsx_runtime_1.jsxs)(Wrapper, { children: [(0, jsx_runtime_1.jsx)(ProfileImage_1.default, { profileImage: profileImage }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(SubTitle, { children: "Nice to meet you." }), (0, jsx_runtime_1.jsx)(Title, { children: "I'm senior Data Engineer dev-0wner." })] })] }) }));
};
exports.default = Introduction;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
