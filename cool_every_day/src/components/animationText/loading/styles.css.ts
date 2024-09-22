import { style, keyframes } from '@vanilla-extract/css'

// キーフレームの定義
const bounceAnimation = keyframes({
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-50px)' }, // 上下の移動量を調整
})

// Popupアニメーションのキーフレーム定義
const popupAnimation = keyframes({
    '0%': {
        scale: 0.8,
        opacity: 0,
    },
    '100%': {
        scale: 1,
        opacity: 1,
    },
})

const styles = {
    loading_char: style({
        display: 'inline-block',
        animation: `${bounceAnimation} 1s infinite alternate`, // アニメーション名にkeyframesを使用
    }),
    anime_box: style({
        animation: `${popupAnimation} 5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
    }),
    completed_text_container: style({
        display: 'flex',
        flexDirection: 'column', // 縦に並べる
        alignItems: 'center', // 中央揃え
        position: 'absolute',
        transform: 'translate(-50%, -50%)', // 要素の中心に位置させる
        color: 'white',
        zIndex: '101',
        fontSize: '10vw',
        fontWeight: 'bold',
    }),
    loaded_text_container: style({
        display: 'flex',
        position: 'absolute',
        transform: 'translate(-50%, -50%)', // 要素の中心に位置させる
        color: 'white',
        zIndex: '101',
        fontSize: '10vw',
        fontWeight: 'bold',
    }),
}

export default styles
