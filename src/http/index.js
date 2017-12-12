import axios from 'axios'

axios.defaults.baseURL = 'https://104.131.0.127/vuedium'

axios.interceptors.request.use(
  config => config,
  error => Promise.reject(error))

axios.interceptors.response.use(
  response => response,
  error => Promise.resolve(error.response))

function checkStatus(response) {
  // loading
  if (response && (
      response.status === 200 ||
      response.status === 201 ||
      response.status === 304 ||
      response.status === 400)
    ) {
    return response
    // If you do not need data other than data, you can directly return response.data
  }
  // Under abnormal conditions, the error message is returned
  return {
    status: -404,
    msg: 'error',
  }
}

function checkCode(res) {
  // if the code is abnormal (here include network error, server error, back end throw error),
  // you can pop up an error message to tell the user
  if (res.status === -404) {
    // console.log(res.msg)
  }
  if (res.data && (!res.data.success)) {
    // console.log(res.data.error_msg)
  }
  return res
}

export default {
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data,
      timeout: 10000,
      headers: {
        'content-type': 'application/json',
        'x-access-token': 'accesstokenvuedium',
      },
    })
    .then(response => checkStatus(response))
    .then(res => checkCode(res))
  },

  patch(url, data) {
    return axios({
      method: 'patch',
      url,
      data,
      timeout: 10000,
      headers: {
        'content-type': 'application/json',
        'x-access-token': 'accesstokenvuedium',
      },
    })
    .then(response => checkStatus(response))
    .then(res => checkCode(res))
  },

  get(url, params) {
    return axios({
      method: 'get',
      url,
      params, // get Request with the parameters
      timeout: 10000,
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(response => checkStatus(response))
    .then(res => checkCode(res))
  },
}
