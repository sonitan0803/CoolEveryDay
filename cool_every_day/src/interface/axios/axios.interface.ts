export interface GetWeatherDataParams {
    lat: number
    lon: number
}

export interface GetWeatherDataResponse {
    coord: {
        lon: number
        lat: number
    }
    weather: [
        {
            id: number
            main: string
            description: string
            icon: string
        },
    ]
    main: {
        temp: number // 気温(ケルビン温度)
        feels_like: number // 体感温度
        temp_min: number // 現時点での最低気温。現在観測されている最低気温（大規模なメガロポリスや都市部内）。
        temp_max: number // 現時点での最高気温
        pressure: number // 大気圧（sea_levelまたはgrnd_levelのデータがない場合は海面気圧）、hPa
        humidity: number // 湿度, %.
    }
}
