import axios from "axios"

const BASE_URL = `https://api.realworld.io/api/articles/?limit=10&offset=2`

export const getListUserAxios = async () => {
    const result = await axios({
        method: 'get',
        baseURL: BASE_URL
    })
    console.log('result', result)
    return result?.data
}