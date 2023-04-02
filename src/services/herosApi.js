import api from "./api"

export async function getAllHeros(token) {
    const response = await api.get('/heroes', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    return response.data
}