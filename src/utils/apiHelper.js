import axios from "axios"

const baseURL = "https://currency-converter-nwmg3nyd3a-de.a.run.app/api"


const axiosInstance = axios.create({
  baseURL
})

export const axiosNoauth = axiosInstance
