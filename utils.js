export const utils = {
    fetch: (url, method, headers) => {
        const innerHeaders = headers ?? new Headers();
        const innerMethod = method ?? "GET";

        if (localStorage.getItem("token")) {
            const credentials = btoa(`${localStorage.getItem("token")}`);
            innerHeaders.append('Authorization', `Basic ${credentials}`);
        }
        return fetch(url, {
            method: innerMethod,
            headers: innerHeaders
        });
    },
    removePrefix: (str, prefix) => {
        if (str.startsWith(prefix)) {
            return str.slice(prefix.length);
        }
        return str;
    },
    isNumeric: (str) => {
        const numberPattern = /^-?\d+(\.\d+)?$/; // 匹配整数和小数，包括负号  
        return numberPattern.test(str);
    }
}