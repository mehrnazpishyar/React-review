import http from "./httpService";

export function addNewComment (data) {
    const token = "SECURE TOKEN"
    const header ={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    return http.post("/comments", data,header)
}