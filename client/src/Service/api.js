// import axios from "axios";

// const API_URL = 'http://localhost:8000';

// const api = async (urlObject, payload, type) => {
//   try {
//     const response = await axios({
//       method: urlObject.method,
//       url: `${API_URL}/${urlObject.endpoint}/${type}`,
//       data: payload
//     });
//     return response.data;
//   } catch (error) {
//     console.error('API call error:', error);
//     throw error;
//   }
// }

// export default api;

import axios from 'axios';

const API_URI = ''

const API_GMAIL = async (serviceUrlObject, requestData = {}, type) => {
    const { params, urlParams, ...body } = requestData;

    return await axios({
        method: serviceUrlObject.method,
        url: `${API_URI}/${serviceUrlObject.endpoint}/${type}`,
        data: requestData
    })
}

export default API_GMAIL;
