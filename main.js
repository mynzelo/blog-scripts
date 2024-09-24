import {hightlight} from './mods/hightlight.js';
import {chineseDisplay} from './mods/chinese-display.js';
import { randomPost } from './mods/random-post.js';
import {readableHeader} from './mods/readable-header.js';
import {login} from './mods/login/login.js';

window.addEventListener('DOMContentLoaded', function () {
    // 页面加载完成后执行
    hightlight.run();
    chineseDisplay.run();
    randomPost.run();
    readableHeader.run();
    login.run();
});