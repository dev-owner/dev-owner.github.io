"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("@emotion/react/jsx-runtime");
var react_1 = require("react");
var src = 'https://utteranc.es/client.js';
var repo = 'dev-owner/dev-owner.github.io';
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
    return (0, jsx_runtime_1.jsx)("div", { ref: element });
};
exports.default = CommentWidget;
