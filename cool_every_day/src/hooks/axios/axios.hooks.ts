import axios from 'axios'

import {
    GetWeatherDataParams,
    GetWeatherDataResponse,
} from '@/interface/axios/axios.interface'

export const useAxios = () => {
    const GetWeatherData = (params: GetWeatherDataParams) => {
        return new Promise<GetWeatherDataResponse>((resolve, reject) => {
            axios
                .get('/api/weather', {
                    params: {
                        lat: params.lat,
                        lon: params.lon,
                    },
                })
                .then((res) => {
                    console.log('返却', res.data)
                    resolve(res.data as GetWeatherDataResponse)
                })
                .catch((error) => {
                    console.log('error:', error)
                })
        })
    }

    return {
        GetWeatherData,
    }
}
