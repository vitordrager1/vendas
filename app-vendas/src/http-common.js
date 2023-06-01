import axios from 'axios'

export default axios.create({
    baseURL: "localhost/admin/api",
    headers: {
        "Content-Type": "application/json"
    }
})