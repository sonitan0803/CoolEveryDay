import React from 'react'
import useClock from '@/hooks/count/time.hooks'

export function TimeText() {
    const { timeInfo } = useClock()

    return (
        <div style={{ color: 'white' }}>
            {timeInfo.hour}:{timeInfo.minutes}:{timeInfo.second}:{timeInfo.day}
        </div>
    )
}

export default TimeText
