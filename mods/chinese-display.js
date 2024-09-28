// 中文排版优化
export const chineseDisplay = {
    name: "chineseDisplay",
    run: () => {
        pangu.spacingElementByTagName('main');
    },
    skipFirstPage: true
}