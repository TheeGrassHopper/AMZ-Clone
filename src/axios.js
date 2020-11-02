import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/youtubereact-142720/us-central1/api" // the API url (cloud function)
});

export default instance;