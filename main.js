import { hightlight } from './mods/hightlight.js';
import { chineseDisplay } from './mods/chinese-display.js';
import { randomPost } from './mods/random-post.js';
import { readableHeader } from './mods/readable-header.js';
import { login } from './mods/login/login.js';

const mods = [hightlight, chineseDisplay, randomPost, readableHeader, login];

window.addEventListener('DOMContentLoaded', function () {
    // 页面加载完成后执行
    const url = new URL(window.location.href);
    const path = url.pathname;

    mods.forEach(mod => {
        if (mod.skipFirstPage) {
            // 跳过首页执行
            if (path.startsWith('/archives') || url.toString().endsWith('preview=true')) {
                console.log("runrun")
                mod.run();
            }
        } else {
            mod.run();
        }
    })

});