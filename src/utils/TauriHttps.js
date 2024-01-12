import http from '@/utils/http';
import {Body} from "@tauri-apps/api/http";

const HTTP_BASE_URL = "https://mutolee.github.io/vel-admin-web"
const HTTP_BASE_URL_DEV = "http://localhost:5173"

function get(url,params){
    return http(url,{
        method:"get",
        params
    })
}

function post(url,params){
    const body = Body.json(params);
    return http(url,{
        method:'post',
        body
    })
}

export default{
    get,
    post,
    HTTP_BASE_URL,
    HTTP_BASE_URL_DEV
}