import React from 'react'

import { TimeText, WeatherView } from '@/components'

function EveryDayView() {
    return (
        <div>
            <main>
                <div style={{ height: '30%', width: '30%', marginTop: '5%' }}>
                    <TimeText />
                    <WeatherView />
                </div>
            </main>
        </div>
    )
}

export default EveryDayView
