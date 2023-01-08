"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var NUMBER_OF_ITEMS_PER_PAGE = 3;
var useInfiniteScroll = function (selectedCategory, posts) {
    var containerRef = (0, react_1.useRef)(null);
    var observer = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(1), count = _a[0], setCount = _a[1];
    var postListByCategory = (0, react_1.useMemo)(function () {
        return posts.filter(function (_a) {
            var categories = _a.node.frontmatter.categories;
            return selectedCategory !== 'All'
                ? categories.includes(selectedCategory)
                : true;
        });
    }, [selectedCategory]);
    (0, react_1.useEffect)(function () {
        observer.current = new IntersectionObserver(function (entries, observer) {
            if (!entries[0].isIntersecting)
                return;
            setCount(function (value) { return value + 1; });
            observer.unobserve(entries[0].target);
        });
    }, []);
    (0, react_1.useEffect)(function () { return setCount(1); }, [selectedCategory]);
    (0, react_1.useEffect)(function () {
        if (NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
            containerRef.current === null ||
            containerRef.current.children.length === 0 ||
            observer.current === null)
            return;
        observer.current.observe(containerRef.current.children[containerRef.current.children.length - 1]);
    }, [count, selectedCategory]);
    return {
        containerRef: containerRef,
        postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
    };
};
exports.default = useInfiniteScroll;
