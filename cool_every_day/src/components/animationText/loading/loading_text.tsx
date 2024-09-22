'use client'
import React from 'react'

import styles from './styles.css'

// import { useRouter } from 'next/router'

import { greatVibes } from '@/app/fonts/styles.font'
import { useWindow } from '@/hooks/view/view.hooks'

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
                className={`${greatVibes.className} ${styles.anime_box}`} // アニメーションのクラスを追加
                style={{
                    display: 'flex',
                    flexDirection: 'column', // 縦に並べる
                    alignItems: 'center', // 中央揃え
                    position: 'absolute',
                    top: `${windowSize.height / 2}px`,
                    left: `${windowSize.width / 2}px`,
                    transform: 'translate(-50%, -50%)', // 要素の中心に位置させる
                    color: 'white',
                    zIndex: '101',
                    fontSize: '10vw',
                    fontWeight: 'bold',
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
                    display: 'flex',
                    position: 'absolute',
                    top: `${windowSize.height / 2}px`,
                    left: `${windowSize.width / 2}px`,
                    transform: 'translate(-50%, -50%)', // 要素の中心に位置させる
                    color: 'white',
                    zIndex: '101',
                    fontSize: '10vw',
                    fontWeight: 'bold',
                }}
                className={greatVibes.className}
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
    // }
}
