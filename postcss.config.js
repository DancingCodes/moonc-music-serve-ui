import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin';

export default {
    plugins: [
        postcssPxToViewport({
            viewportWidth: 1920, // 视口宽度，可以根据设计稿调整
            viewportHeight: 1080, // 视口高度，可以根据设计稿调整
            unitPrecision: 5, // 转换后的精度
            viewportUnit: 'vw', // 使用的视口单位
            selectorBlackList: ['.ignore', '.hairlines'], // 忽略的选择器
            minPixelValue: 1, // 小于或等于 1px 不转换
            mediaQuery: false, // 不在媒体查询中转换
        })
    ]
}
