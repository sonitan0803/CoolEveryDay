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
}
