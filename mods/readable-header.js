export const readableHeader = {
    run: () => {
        const headers = document.querySelectorAll(".entry-content h1, .entry-content h2, .entry-content h3, .entry-content h4");
        if(headers){
            headers.forEach(header=>{
                header.innerText = "📍" + header.innerText
            })
        }
    }
}