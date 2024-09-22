'use client'

import LinearProgress from '@mui/material/LinearProgress'

import { useWindow } from '@/hooks/view/view.hooks'

interface props {
    progress: number
}

export const DrawWidthLine = (props: props) => {
    // const { progress } = useCount()
    const { windowSize } = useWindow()
    const drawLineNum = Math.floor(windowSize.height / 20)
    let drawLineHeight = drawLineNum

    if (props.progress === 0) return null // progress が 0 のときは描写しない

    return (
        <div>
            {Array.from({ length: 20 }, (_, i) => {
                if (i === 0) return null // i === 0 のときは描写しない
                return (
                    <LinearProgress
                        key={i}
                        sx={{
                            position: 'absolute',
                            top: `${drawLineHeight * i}px`,
                            width: `${Math.min(props.progress - i * 10, 100)}vw`, // 幅を100vwに制限
                            height: '2.5px',
                            transition: 'width 0.3s ease', // 滑らかにアニメーション
                            zIndex: '1',
                            '& .MuiLinearProgress-bar': {
                                background:
                                    'linear-gradient(90deg, rgba(212, 65, 255, 1), rgba(158, 237, 251, 1))', // グラデーションの色
                            },
                        }}
                    />
                )
            })}
        </div>
    )
}

export const DrawHeightLine = (props: props) => {
    // const { progress } = useCount()
    const { windowSize } = useWindow()
    const drawLineNum = Math.floor(windowSize.width / 20)
    let drawLineWidth = drawLineNum

    if (props.progress === 0) return null // progress が 0 のときは描写しない

    return (
        <div>
            {Array.from({ length: 20 }, (_, i) => {
                if (i === 0) return null // i === 0 のときは描写しない
                return (
                    <LinearProgress
                        key={i}
                        sx={{
                            position: 'absolute',
                            left: `${drawLineNum * (20 - i)}px`,
                            height: `${Math.max(Math.min(props.progress - i * 10, 100), 0)}vh`, // 高さを100vhに制限し、0未満にならないようにする
                            width: '3px',
                            transition: 'width 0.3s ease', // 滑らかにアニメーション
                            zIndex: '1',
                        }}
                        variant="determinate"
                        value={Math.max(
                            Math.min(props.progress - i * 10, 100),
                            0,
                        )} // 進捗を指定
                    />
                )
            })}
        </div>
    )
}
