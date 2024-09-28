// 输入api key
export const login = {
    run: () => {
        const button = document.querySelector(`.blog-scripts-login input[type="submit"]`);
        if(button) {
            button.addEventListener("click", function(event){
                event.preventDefault();
                // 保存信息到localStorage
                const username = document.querySelector(`.blog-scripts-login input[name="username"]`);
                const password = document.querySelector(`.blog-scripts-login input[name="password"]`);
                if(username && password) {
                    localStorage.setItem("token", `${username.value}:${password.value}`)
                }
            })
        }
    },
    skipFirstPage: false
}