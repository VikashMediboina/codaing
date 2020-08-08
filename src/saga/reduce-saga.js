import { put, takeEvery } from "redux-saga/effects"
import { getData } from "../action/index.js"
import { POST_REQUEST_GET_DATA } from "../constant"

function* postRequestGetData(action) {
    try {
        const response = yield fetch("http://starlord.hackerearth.com/recipe").then(res => res.json())
        yield put(getData({ data: response }))
    }
    catch{
        yield put(getData({ data: "error occured" }))
    }
}

export default function* sagas() {
    yield takeEvery(POST_REQUEST_GET_DATA, postRequestGetData)
}