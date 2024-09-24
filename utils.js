export const utils = {
     fetch:  (url, method, headers) => {
        const innerHeaders = headers??new Headers();
        const innerMethod = method??"GET";

        if(localStorage.getItem("token")){
            const credentials = btoa(`${localStorage.getItem("token")}`);  
            innerHeaders.append('Authorization', `Basic ${credentials}`);  
        }
        return fetch(url, {
            method: innerMethod,
            headers: innerHeaders
        });
    }
}