'use client'
import { useState, useEffect } from 'react'

interface timeInfo {
    hour: string
    minutes: string
    second: string
    day: string
}

function useClock() {
    const [currentTime, setCurrentTime] = useState<Date>(new Date())
    const [timeInfo, SetTimeInfo] = useState({
        hour: '--',
        minutes: '--',
        second: '--',
        day: '--',
    })

    useEffect(() => {
        SetTimeInfo({
            hour: currentTime.getHours().toString(),
            minutes: currentTime.getMinutes().toString(),
            second: currentTime.getSeconds().toString(),
            day: GetDay(),
        })
    }, [currentTime])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date()) // 毎秒現在時刻を更新
        }, 1000)

        return () => clearInterval(intervalId) // コンポーネントがアンマウントされたらクリーンアップ
    }, [])

    // 曜日取得
    const GetDay = (): string => {
        const day = currentTime.getDay()
        switch (day) {
            case 0:
                return 'Sun'
            case 1:
                return 'Mon'
            case 2:
                return 'Tue'
            case 3:
                return 'Wed'
            case 4:
                return 'Thu'
            case 5:
                return 'Fri'
            case 6:
                return 'Sat'
            default:
                return ''
        }
    }

    return {
        currentTime,
        timeInfo,
        GetDay,
    }
}

export default useClock
