import axios from 'axios'
import { API_URL } from '../constants'

const BASE_URL = `${API_URL}/api/news`

class NewsService {
  async getAll() {
    return axios.get(BASE_URL)
  }

  async post(article) {
    return axios.post(BASE_URL, article)
  }

  async delete(id) {
    return axios.delete(`${BASE_URL}/${id}`)
  }

  async setArchived(id, isArchived) {
    return axios.patch(`${BASE_URL}/setArchived/${id}`, { isArchived })
  }
}

export default NewsService
