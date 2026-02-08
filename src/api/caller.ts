import "axios"
import axios from "axios";
import {token, apiBaseUri, llmBaseUri, llmApiToken} from "@/const"

export const apiConfig = {
    baseURL: apiBaseUri,
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8"
    }
}

export const apiCaller = axios.create(apiConfig);

export const llmCaller = axios.create({
    baseURL: llmBaseUri,
    headers: {
        "Authorization": `Bearer ${llmApiToken}`,
        "Content-Type": "application/json"
    }
})