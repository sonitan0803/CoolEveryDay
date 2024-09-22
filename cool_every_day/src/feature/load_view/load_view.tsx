'use client'
import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation'

import styles from './styles.css'

import {
    DrawHeightLine,
    DrawWidthLine,
    CircleBar,
    LoadingText,
} from '@/components'

import { useCount } from '@/hooks/count/count.hooks'

function LoadView() {
    // 時間カウント
    const { progress } = useCount()
    const router = useRouter()

    useEffect(() => {
        if (progress === 500) {
            const timer = setTimeout(() => {
                router.push('/every_day') // 3秒後に指定のURLに移動
            }, 3000)

            return () => clearTimeout(timer) // クリーンアップ
        }
    }, [progress, router]) // props.typeが変わったときに再実行

    return (
        <div>
            {/* 縦線 */}
            <DrawHeightLine progress={progress} />
            {/* 横線 */}
            <DrawWidthLine progress={progress} />
            {/* ロード画面 */}
            {progress === 500 ? (
                <LoadingText type="completed" />
            ) : (
                <div className={progress >= 300 ? styles.anime_box : undefined}>
                    <LoadingText type="loaded" />
                    <CircleBar progress={progress} />
                </div>
            )}
        </div>
    )
}

export default LoadView
