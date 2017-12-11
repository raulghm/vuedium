/* eslint-disable */

import axios from 'axios'
import qs from 'qs'

axios.defaults.baseURL = 'http://104.131.0.127:8080';

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
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
    msg: 'error'
  }
}

function checkCode (res) {
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
      data: data,
      timeout: 10000,
      headers: {
        'content-type': 'application/json',
        'x-access-token': 'accesstokenvuedium'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },

  patch(url, data) {
    return axios({
      method: 'post',
      url,
      data: data,
      timeout: 10000,
      headers: {
        'content-type': 'application/json',
        'x-access-token': 'accesstokenvuedium'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },

  get(url, params) {
    return axios({
      method: 'get',
      url,
      params, // get Request with the parameters
      timeout: 10000,
      headers: {
        'content-type': 'application/json'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
