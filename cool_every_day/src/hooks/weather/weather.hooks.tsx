'use client'

import { useEffect, useState } from 'react'

import { GetWeatherDataParams } from '@/interface/axios/axios.interface'
import { WeatherData } from '@/interface/weather/weather.interface'

import { useAxios } from '@/hooks/axios/axios.hooks'

export const useWeather = () => {
    const axios = useAxios()

    const [weatherData, setWeatherData] = useState<WeatherData>()

    const [params, setParams] = useState<GetWeatherDataParams>({
        lat: 0,
        lon: 0,
    })

    //現在地取得
    const GetMyLocation = () => {
        return new Promise((resolve, reject) => {
            // Geolocation API を使用して位置情報を取得
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    resolve(position.coords)
                },
                (err) => {
                    // エラー時の処理
                    console.error('Error(axiosHooks.SetMyLocation):', err)
                    reject(err)
                },
            )
        })
    }

    // 現在地の取得
    useEffect(() => {
        GetMyLocation().then((res: any) => {
            setParams({
                lat: res.latitude,
                lon: res.longitude,
            })
        })
    }, [])

    // 天気情報取得
    useEffect(() => {
        if (params.lat !== 0 && params.lon !== 0) {
            axios
                .GetWeatherData({ lat: params.lat, lon: params.lon })
                .then((res) => {
                    // setWeatherData(res as GetWeatherDataResponse)
                    setWeatherData({
                        weather: res.weather[0].main,
                        temp: Math.floor(res.main.temp - 273.15)
                            .toString()
                            .padStart(2, '0'),
                        humidity: Math.floor(res.main.humidity)
                            .toString()
                            .padStart(2, '0'),
                        temp_max: Math.floor(res.main.temp_max - 273.15)
                            .toString()
                            .padStart(2, '0'),
                        temp_min: Math.floor(res.main.temp_min - 273.15)
                            .toString()
                            .padStart(2, '0'),
                    })
                })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    useEffect(() => {
        const interval = setInterval(() => {
            axios
                .GetWeatherData({ lat: params.lat, lon: params.lon })
                .then((res) => {
                    const newWeatherData: WeatherData = {
                        weather: res.weather[0].main,
                        temp: Math.floor(res.main.temp - 273.15)
                            .toString()
                            .padStart(2, '0'),
                        humidity: Math.floor(res.main.humidity)
                            .toString()
                            .padStart(2, '0'),
                        temp_max: Math.floor(res.main.temp_max - 273.15)
                            .toString()
                            .padStart(2, '0'),
                        temp_min: Math.floor(res.main.temp_min - 273.15)
                            .toString()
                            .padStart(2, '0'),
                    }

                    // 前回のデータと比較し、異なる場合のみ更新
                    if (
                        JSON.stringify(weatherData) !==
                        JSON.stringify(newWeatherData)
                    ) {
                        setWeatherData(newWeatherData)
                    }
                })
        }, 1800000)

        return () => clearInterval(interval)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weatherData])

    return { weatherData }
}
