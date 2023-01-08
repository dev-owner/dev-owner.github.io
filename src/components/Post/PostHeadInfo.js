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
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var PostHeadInfoWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 768px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 60px 0;\n  color: #ffffff;\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 40px 20px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 768px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 60px 0;\n  color: #ffffff;\n  @media (max-width: 768px) {\n    width: 100%;\n    padding: 40px 20px;\n  }\n"])));
var PrevPageIcon = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #ffffff;\n  color: #000000;\n  font-size: 22px;\n  cursor: pointer;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  @media (max-width: 768px) {\n    width: 30px;\n    height: 30px;\n    font-size: 18px;\n  }\n"], ["\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #ffffff;\n  color: #000000;\n  font-size: 22px;\n  cursor: pointer;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  @media (max-width: 768px) {\n    width: 30px;\n    height: 30px;\n    font-size: 18px;\n  }\n"])));
var Title = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: -webkit-box;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  margin-top: auto;\n  text-overflow: ellipsis;\n  white-space: normal;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 45px;\n  font-weight: 800;\n  @media (max-width: 768px) {\n    font-size: 30px;\n  }\n"], ["\n  display: -webkit-box;\n  overflow: hidden;\n  overflow-wrap: break-word;\n  margin-top: auto;\n  text-overflow: ellipsis;\n  white-space: normal;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 45px;\n  font-weight: 800;\n  @media (max-width: 768px) {\n    font-size: 30px;\n  }\n"])));
var PostData = styled_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  font-size: 18px;\n  font-weight: 700;\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    font-size: 15px;\n    font-weight: 400;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  font-size: 18px;\n  font-weight: 700;\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    font-size: 15px;\n    font-weight: 400;\n  }\n"])));
var PostHeadInfo = function (_a) {
    var title = _a.title, date = _a.date, categories = _a.categories;
    var goBackpage = function () { return window.history.back(); };
    return ((0, jsx_runtime_1.jsxs)(PostHeadInfoWrapper, { children: [(0, jsx_runtime_1.jsx)(PrevPageIcon, __assign({ onClick: goBackpage }, { children: (0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faArrowLeft }) })), (0, jsx_runtime_1.jsx)(Title, { children: title }), (0, jsx_runtime_1.jsxs)(PostData, { children: [(0, jsx_runtime_1.jsx)("div", { children: categories.join(' / ') }), (0, jsx_runtime_1.jsx)("div", { children: date })] })] }));
};
exports.default = PostHeadInfo;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
