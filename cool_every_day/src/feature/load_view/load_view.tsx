'use client'
import React, { useEffect } from 'react'

import styles from './styles.css'

import { useRouter } from 'next/navigation'

import {
    DrawHeightLine,
    DrawWidthLine,
    CircleBar,
    LoadingText,
} from '@/components'
import { useCount } from '@/hooks/count/count.hooks'

function LoadView() {
    const { progress } = useCount()
    const router = useRouter()

    useEffect(() => {
        if (progress === 500) {
            const timer = setTimeout(() => {
                router.push('/every_day') // 3秒後に指定のURLに移動
                console.log('移動!')
            }, 3000)

            return () => clearTimeout(timer) // クリーンアップ
        }
    }, [progress]) // props.typeが変わったときに再実行

    return (
        <>
            <DrawHeightLine progress={progress} />
            <DrawWidthLine progress={progress} />
            {progress === 500 ? (
                <>
                    <LoadingText type="completed" />
                </>
            ) : (
                <div className={progress >= 300 ? styles.anime_box : undefined}>
                    <LoadingText type="loaded" />
                    <CircleBar progress={progress} />
                </div>
            )}
        </>
    )
}

export default LoadView
