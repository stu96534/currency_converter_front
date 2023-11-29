import axios from "axios"

const baseURL = "https://app-cdca82bd-34d1-4dc3-a36a-9435e8bd1bf2.cleverapps.io/api"

const axiosInstance = axios.create({
  baseURL
})

export const axiosNoauth = axiosInstance
