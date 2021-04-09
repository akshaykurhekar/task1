import axios from "axios";

const instance = axios.create({
    baseURL:'https://form-data-7c838-default-rtdb.firebaseio.com/'
});

export default instance;