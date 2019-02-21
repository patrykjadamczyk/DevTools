import axios from "axios";

import { UPLOAD_FILE, GET_ERRORS } from "./types";

export const uploadFile = (fileData) => dispatch => {
    axios
    .post("/api/files/uploadfile",fileData)
    .then(res => dispatch({type: UPLOAD_FILE,payload:res.data}))
    .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    }))
}