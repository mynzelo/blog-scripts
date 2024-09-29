import {utils} from '../utils.js';

const simpleHash = (key, tableSize) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % tableSize;
};
  
const today = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，所以需要+1，并且补0
  const day = String(date.getDate()).padStart(2, "0"); // 日期不足两位补0

  return `${year}-${month}-${day}`;
};
  
const getTodayPost = () => {
  return utils.fetch("/wp-json/wp/v2/posts?per_page=1", null, null)
    .then((res) => {
      const totalPosts = res.headers.get("x-wp-totalpages");
      console.log(`totalPosts:${totalPosts}`)
      const todayPost = simpleHash(today(), totalPosts);
      return todayPost;
    })
    .then((targetPost) => {
      return fetch(`/wp-json/wp/v2/posts?per_page=1&offset=${targetPost}`);
    })
    .then((res) => {
      return res.json();
    })
    .then((posts) => {
      return posts[0];
    });
};
  
// 访问随机一篇博文
export const randomPost = {
  name: "randomPost",
  run: () => {
    const linkDOM = document.querySelector(".random-post a");
    if (linkDOM) {
      linkDOM.addEventListener("click", function (event) {
        event.preventDefault();
        getTodayPost().then((post) => {
          window.location.href = post.link;
        });
      });
    }
  },
  skipFirstPage: false
};
  