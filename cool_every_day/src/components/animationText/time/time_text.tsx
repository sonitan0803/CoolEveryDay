import React, { memo, useEffect, useMemo } from 'react'

import { CircleProgress, CircleProgressLabel } from '@yamada-ui/react'
import { UIProvider } from '@yamada-ui/react'

import useClock from '@/hooks/count/time.hooks'

const SecondView = (props: { second: string }) => {
    return (
        <UIProvider>
            <CircleProgress
                boxSize="120px"
                min={0}
                max={60}
                value={parseInt(props.second)}
                color="purple.500"
                trackColor="green.300"
            >
                <CircleProgressLabel color="purple.500">
                    {props.second}
                </CircleProgressLabel>
            </CircleProgress>
        </UIProvider>
    )
}

const MinutesView = (props: { minutes: string }) => {
    return (
        <UIProvider>
            <CircleProgress
                boxSize="120px"
                min={0}
                max={60}
                value={parseInt(props.minutes)}
                color="purple.500"
                trackColor="green.300"
            >
                <CircleProgressLabel color="purple.500">
                    {props.minutes}
                </CircleProgressLabel>
            </CircleProgress>
        </UIProvider>
    )
}

const HourView = (props: { hour: string }) => {
    return (
        <UIProvider>
            <CircleProgress
                boxSize="120px"
                min={0}
                max={60}
                value={parseInt(props.hour)}
                color="purple.500"
                trackColor="green.300"
            >
                <CircleProgressLabel color="purple.500">
                    {props.hour}
                </CircleProgressLabel>
            </CircleProgress>
        </UIProvider>
    )
}

const HourMemo = memo((props: { hour: string }) => <HourView {...props} />)
HourMemo.displayName = 'HourMemo'
const MinutesMemo = memo((props: { minutes: string }) => (
    <MinutesView {...props} />
))
MinutesMemo.displayName = 'MinutesMemo'
const SecondMemo = memo((props: { second: string }) => (
    <SecondView {...props} />
))
SecondMemo.displayName = 'SecondMemo'

export function TimeText() {
    const { memoizedHour, memoizedMinutes, memoizedSecond, memoizedDay } =
        useClock()
    return (
        <div>
            <HourMemo hour={memoizedHour} />
            <MinutesMemo minutes={memoizedMinutes} />
            <SecondMemo second={memoizedSecond} />
            {memoizedDay}
        </div>
    )
}

export default TimeText
