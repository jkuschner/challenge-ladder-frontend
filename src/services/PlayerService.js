import axios from 'axios';

const API_URL = "http://localhost:8080/api/players" 

class PlayerService {
    findAll() {
        return axios.get(`${API_URL}`);
    }

    findById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    create(player) {
        return axios.post(`${API_URL}`, player);
    }

    update(player, id) {
        return axios.put(`${API_URL}/${id}`, player);
    }

    delete(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new PlayerService();