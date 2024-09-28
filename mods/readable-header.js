// 让header更醒目
export const readableHeader = {
    run: () => {
        document.querySelector(".entry-content")
                .classList.add('readable-header')
    },
    skipFirstPage: true
}