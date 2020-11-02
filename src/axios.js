import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-store-a5366.cloudfunctions.net/api" // the API url (cloud function)
    // Local endpoint
    // http://localhost:5001/store-a5366/us-central1/api
});


export default instance;