import { GET_DATA, POST_REQUEST_GET_DATA } from "../constant"

export const postRequestGetData = (data) => ({
    type: POST_REQUEST_GET_DATA,
    data
})

export const getData = (data) => ({
    type: GET_DATA,
    data
})
