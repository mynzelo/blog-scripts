const innerRun = (condition, cssSelector, toAddClass) => {
    if (condition) {
        const target = document.querySelector(cssSelector);
        if (target) {
            target.classList.add(toAddClass);
        }
    }
}

export const addCssClass = {
    name: "addCssClass",
    run: () => {
        const url = new URL(window.location.href);

        // 碎碎念 缩小图片
        innerRun('/trick' === url.pathname, '.entry-content', 'small-img');
        document.querySelector(".entry-content")

        // 优化header样式
        innerRun(true, ".entry-content", 'readable-header');
    },
    skipFirstPage: true
}