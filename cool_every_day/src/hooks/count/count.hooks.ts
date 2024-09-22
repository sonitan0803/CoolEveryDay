'use client'

import { useEffect, useState } from 'react'

export const useCount = () => {
    const [progress, setProgress] = useState(0) // 0~300の値

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 500) {
                    clearInterval(interval) // progress が 300 になったらタイマーを停止
                    return 500 // 最後に 300 に固定
                }
                // 進行を遅くするために加速度を調整
                return prevProgress + Math.min(1 + prevProgress / 100)
            })
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return { progress }
}
