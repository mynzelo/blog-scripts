import { utils } from "../utils.js";

/**
 * 自动创建脚注
 */
export const autoFootNote = {
    run: () => {
        const noteHeader = document.querySelector('h4')
        if (noteHeader && (noteHeader.innerHTML === "备注" || noteHeader.innerHTML === "Note")) {
            noteHeader.id = 'note'
        }
        const url = new URL(window.location.href);
        Array.from(document.querySelectorAll("sup"))
            .filter(sup => utils.isNumeric(sup.innerHTML.trim()))
            .forEach(sup => {
                const number = sup.innerHTML;
                sup.innerHTML = `<a href="${url.toString()}#note">${number}</a>`
            })

    },
    skipFirstPage: true
}