'use client'

import { useEffect, useState } from 'react'

export const useWindow = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }

            window.addEventListener('resize', handleResize)
            handleResize() // 初期値を設定
            return () => window.removeEventListener('resize', handleResize)
        } else {
            return
        }
    }, [])

    return { windowSize }
}
