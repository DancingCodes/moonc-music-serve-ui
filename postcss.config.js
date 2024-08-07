import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin';

export default {
    plugins: [
        postcssPxToViewport({
            viewportWidth: 1920, // 视口宽度，可以根据设计稿调整
            viewportHeight: 1080, // 视口高度，可以根据设计稿调整
        })
    ]
}
