import { utils } from "../utils.js"

/**
 * 
 * @param {HTMLElement} block 
 * @param {Object} metadata 
 */
const addMetadataToBlock = (block, metadata) => {
    const date = block.querySelector('.wp-block-post-date')
    const metadataDOM = document.createElement("div");
    metadataDOM.classList.add('grey-color')
    metadataDOM.innerText = `天气：${metadata['trick-weather']}。位置：${metadata['trick-location']}`;

    metadataDOM.innerText = metadataDOM.innerText
        .replace('晴。', '🌞。')
        .replace('多云', '⛅')
        .replace('中国-安徽省-合肥市', '合肥')

    block.insertBefore(metadataDOM, date)
}

/**
 * 碎碎念页面，添加天气和位置信息
 */
export const addMetadata = {
    run: () => {
        Array
            .from(document.querySelectorAll(".trick-row"))
            .map(block => {
                return {
                    block: block,
                    parent: block.parentElement
                }
            })
            .forEach(({ block, parent }) => {
                const id = utils.removePrefix(parent.classList[1], "post-")
                utils.fetch(`/wp-json/wp/v2/posts?include[]=${id}&per_page=1&_fields=metadata`)
                    .then(res => {
                        return res.json()
                    })
                    .then(json => {
                        return json[0].metadata
                    })

                    .then(metadata => {
                        if (metadata['trick-weather'] && metadata['trick-location']) {
                            addMetadataToBlock(block, metadata)
                        }
                    })
            })
    },
    skipFirstPage: true
}