import React from 'react'

import { TimeText, WeatherView } from '@/components'

function EveryDayView() {
    return (
        <div>
            <main>
                <TimeText />
                <WeatherView />
            </main>
        </div>
    )
}

export default EveryDayView
