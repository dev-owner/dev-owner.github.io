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
var react_1 = require("react");
var styled_1 = __importDefault(require("@emotion/styled"));
var src = 'https://utteranc.es/client.js';
var repo = 'dev-owner/dev-owner.github.io';
var UtterancesWrapper = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @media (max-width: 768px) {\n    padding: 0 20px;\n  }\n"], ["\n  @media (max-width: 768px) {\n    padding: 0 20px;\n  }\n"])));
var CommentWidget = function () {
    var element = (0, react_1.createRef)();
    (0, react_1.useEffect)(function () {
        if (element.current === null)
            return;
        var utterances = document.createElement('script');
        var attributes = {
            src: src,
            repo: repo,
            'issue-term': 'pathname',
            label: 'Comment',
            theme: 'github-light',
            crossorigin: 'anonymous',
            async: 'true',
        };
        Object.entries(attributes).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            utterances.setAttribute(key, value);
        });
        element.current.appendChild(utterances);
    }, []);
    return (0, jsx_runtime_1.jsx)(UtterancesWrapper, { ref: element });
};
exports.default = CommentWidget;
var templateObject_1;
