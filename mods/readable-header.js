// 让header更醒目，增加一个emoji前缀
export const readableHeader = {
    run: () => {
        const headers = document.querySelectorAll(".entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4");
        if(headers){
            headers.forEach(header=>{
                header.innerText = "🔎" + header.innerText
                header.style.fontFamily = `"Noto Emoji", "Noto Sans", "Noto Sans SC", system-ui`
            })
        }
    }
}