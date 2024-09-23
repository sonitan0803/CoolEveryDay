'use client'
import React, { useEffect, useState } from 'react'

import { useAxios } from '@/hooks/axios/axios.hooks'
import { GetWeatherDataParams } from '@/interface/axios/axios.interface'

export function WeatherView() {
    const axios = useAxios()
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

    useEffect(() => {
        if (params.lat !== 0 && params.lon !== 0) {
            axios
                .GetWeatherData({ lat: params.lat, lon: params.lon })
                .then((res) => {
                    console.log('実行結果', res)
                })
            // axios.GetWeatherData({ lat: 35.3366868, lon: 139.4121266 })
        }
    }, [params])

    useEffect(() => {
        GetMyLocation().then((res: any) => {
            setParams({
                lat: res.latitude,
                lon: res.longitude,
            })
        })
    }, [])

    return <div style={{ color: 'white' }}>WeatherView</div>
}

export default WeatherView
