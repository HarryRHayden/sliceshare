import axios from "axios";

axios.defaults.baseURL = "https://sliceshare-be.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;