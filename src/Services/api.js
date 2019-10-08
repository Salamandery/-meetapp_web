import api from 'axios';

const Axios = api.create({
    baseURL: "http://localhost:3333",
});

export default Axios;