import axios from 'axios';

const ApiService = {
  init(baseURL: string) {
    axios.defaults.baseURL = baseURL;
  },

  get: async (endpoint: string) => {
    try {
      const { data } = await axios.get(endpoint);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
