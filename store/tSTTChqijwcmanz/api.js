import axios from "axios"
const tSTTChqijwcmanz = axios.create({
  baseURL: "https://www.dsconnect.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
