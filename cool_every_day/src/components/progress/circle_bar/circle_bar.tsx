'use client'
import React from 'react'

import { CircleProgress } from '@yamada-ui/react'
import { UIProvider } from '@yamada-ui/react'

import { useWindow } from '@/hooks/view/view.hooks'

interface props {
    progress: number
}
export function CircleBar(props: props) {
    const { windowSize } = useWindow()

    // 初期値を設定
    if (windowSize.height === 0 || windowSize.width === 0) {
        return null // まだサイズが取得できていない場合は何も表示しない
    }

    return (
        <UIProvider>
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    top: `${windowSize.height / 2}px`,
                    left: `${windowSize.width / 2}px`,
                    transform: 'translate(-50%, -50%)', // 要素の中心に位置させる
                    color: 'white',
                    zIndex: '100',
                    fontSize: '10vw',
                    fontWeight: 'bold',
                }}
            >
                {(props.progress / 300) * 100 >= 101 ? (
                    <CircleProgress
                        value={props.progress}
                        boxSize={32}
                        thickness={3}
                        color={'#9223FF'}
                        trackColor={'rgba(0,0,0,0)'}
                        isAnimation
                        max={300}
                    />
                ) : (
                    <CircleProgress
                        value={(props.progress / 300) * 100}
                        boxSize={32}
                        thickness={3}
                        color={'#9223FF'}
                        trackColor={'rgba(0,0,0,0)'}
                    />
                )}

                {/* <CircularProgress
                size={200}
                sx={{
                    color: '#9223FF',
                }}
                variant="determinate"
                value={(progress / 300) * 100}
            /> */}
            </div>
        </UIProvider>
    )
}

export default CircleBar
