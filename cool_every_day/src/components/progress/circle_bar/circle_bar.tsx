'use client'
import React from 'react'

import { CircleProgress } from '@yamada-ui/react'
import { UIProvider } from '@yamada-ui/react'

import styles from './styles.css'

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
                className={styles.circle_container}
                style={{
                    top: `${windowSize.height / 2}px`,
                    left: `${windowSize.width / 2}px`,
                }}
            >
                {(props.progress / 300) * 100 >= 101 ? (
                    <CircleProgress
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
            </div>
        </UIProvider>
    )
}

export default CircleBar
