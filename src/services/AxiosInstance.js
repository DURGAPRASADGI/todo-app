import axios from "axios";
let axiosInstance=axios.create({
    baseURL:" http://localhost:8000",
    "content-Type":"application/json"
})
export default axiosInstance;

// ? axios instance methodss
//& axiosInstance.get();
//& axiosInstance.post();
//& axiosInstance.put();
//& axiosInstance.delete();