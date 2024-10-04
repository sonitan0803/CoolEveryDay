'use client'
import { useState, useEffect, useMemo } from 'react'

interface TimeInfo {
    hour: string
    minutes: string
    second: string
    day: number
}

function useClock() {
    const [timeInfo, setTimeInfo] = useState<TimeInfo>({
        hour: '--',
        minutes: '--',
        second: '--',
        day: 0,
    })

    // 曜日取得をuseCallbackでメモ化
    const GetDay = (day: number) => {
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

    // hour, minutes, secondをメモ化
    const memoizedHour = useMemo(() => timeInfo.hour, [timeInfo.hour])
    const memoizedMinutes = useMemo(() => timeInfo.minutes, [timeInfo.minutes])
    const memoizedSecond = useMemo(() => timeInfo.second, [timeInfo.second])
    const memoizedDay = useMemo(() => GetDay(timeInfo.day), [timeInfo.day])

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date()
            setTimeInfo({
                hour: now.getHours().toString().padStart(2, '0'),
                minutes: now.getMinutes().toString().padStart(2, '0'),
                second: now.getSeconds().toString().padStart(2, '0'),
                day: now.getDay(), // 曜日を取得する場合はここで処理を追加
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

    return {
        timeInfo,
        memoizedHour,
        memoizedMinutes,
        memoizedSecond,
        memoizedDay,
    }
}

export default useClock
