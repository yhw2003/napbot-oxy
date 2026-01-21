import "axios"
import axios from "axios";
import {token} from "@/const"

export const apiCaller = axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json; charset=utf-8"
    }
});

