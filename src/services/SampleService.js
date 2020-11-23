import axios from 'axios';

const API_URL = '/api/v1/issues';

export default class SampleService {
  static async getSample(token) {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
}
