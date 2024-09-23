import { NextRequest, NextResponse } from 'next/server'

import axios from 'axios'
import { GetWeatherDataResponse } from '@/interface/axios/axios.interface'

export async function GET(request: NextRequest) {
    const params = request.nextUrl.searchParams

    // クエリパラメータ 'lat' と 'lon' を取得
    const lat = params.get('lat')
    const lon = params.get('lon')
    const apiKey = process.env.WEATHER_API

    // lat と lon が存在するか確認
    if (!lat || !lon) {
        return NextResponse.json(
            { error: 'lat または lon が不足しています' },
            { status: 400 },
        )
    }

    try {
        // axios を await で実行しレスポンスを取得
        const weatherResponse = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather',
            {
                params: {
                    lat: Number(lat),
                    lon: Number(lon),
                    appid: apiKey,
                },
            },
        )

        // レスポンスデータを返却
        return NextResponse.json(
            weatherResponse.data as GetWeatherDataResponse,
            { status: 200 },
        )
    } catch (error) {
        console.error('API request error:', error)
        return NextResponse.json(
            { error: 'APIリクエストに失敗しました' },
            { status: 500 },
        )
    }
}
