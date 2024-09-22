import { style } from '@vanilla-extract/css'

const styles = {
    circle_container: style({
        display: 'flex',
        position: 'absolute',
        transform: 'translate(-50%, -50%)', // 要素の中心に位置させる
        color: 'white',
        zIndex: '100',
        fontSize: '10vw',
        fontWeight: 'bold',
    }),
}

export default styles
