import axios from 'axios';

const API_URL = "http://localhost:8080/api/matches"

class MatchService {
    findAll() {
        return axios.get(`${API_URL}`);
    }

    findById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    create(match) {
        return axios.post(`${API_URL}`, match);
    }

    update(match, id) {
        return axios.put(`${API_URL}/${id}`, match);
    }

    delete(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new MatchService();