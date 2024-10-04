'use client'
import React from 'react'

import { useWeather } from '@/hooks/weather/weather.hooks'

export function WeatherView() {
    const { weatherData } = useWeather()

    return <div style={{ color: 'white' }}>{JSON.stringify(weatherData)}</div>
}

export default WeatherView
