import { style, keyframes } from '@vanilla-extract/css'

// キーフレームの定義
const FeedOut = keyframes({
    '0%': { opacity: 1 },
    '100%': { opacity: 0 }, // 上下の移動量を調整
})

const styles = {
    anime_box: style({
        animation: `${FeedOut} 5s forwards`, // 一度だけアニメーション
    }),
}

export default styles
