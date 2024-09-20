// 中文排版优化
export const chineseDisplay = {
    run: () => {
        const url = new URL(window.location.href);
        const path = url.pathname;
    
        if (path.startsWith('/archives') || url.toString().endsWith('preview=true')) {
            pangu.spacingElementByTagName('main');
        }
    }
}