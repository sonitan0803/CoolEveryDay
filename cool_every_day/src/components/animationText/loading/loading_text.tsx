'use client'
import React from 'react'

import styles from './styles.css'

import { useWindow } from '@/hooks/view/view.hooks'

import { greatVibes } from '@/app/fonts/styles.font'

interface props {
    type: 'loaded' | 'completed'
}

export function LoadingText(props: props) {
    const { windowSize } = useWindow()

    const text = 'Now Loading...'

    // 初期値を設定
    if (windowSize.height === 0 || windowSize.width === 0) {
        return null // まだサイズが取得できていない場合は何も表示しない
    }

    if (props.type === 'completed') {
        return (
            <div
                className={`${greatVibes.className} ${styles.anime_box} ${styles.completed_text_container}`}
                style={{
                    top: `${windowSize.height / 2}px`,
                    left: `${windowSize.width / 2}px`,
                }}
            >
                <div>Welcome</div>
                <div>to</div>
                <div>CoolEveryDay</div>
            </div>
        )
    } else {
        return (
            <div
                style={{
                    top: `${windowSize.height / 2}px`,
                    left: `${windowSize.width / 2}px`,
                }}
                className={`${greatVibes.className}  ${styles.loaded_text_container}`}
            >
                {/* Now Loading */}
                {text.split('').map((char, index) => (
                    <div
                        key={index}
                        className={styles.loading_char}
                        style={{
                            animationDelay: `${index * 0.1}s`,
                            paddingLeft: '0.7%',
                        }}
                    >
                        {char}
                    </div>
                ))}
            </div>
        )
    }
}
