import axios from "axios"

console.log(
  process.env.REACT_APP_ENV !== "production"
    ? process.env.REACT_APP_API_LOCAL
    : process.env.REACT_APP_API_PRODUCTION,
  process.env
)
const createApiInstance = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
      Authorization: `bearer ${localStorage.getItem("access-token")}`,
    },
  })
}

const handleResponse = (response) => {
  return Promise.resolve(response)
}

const catchError = (e) => Promise.resolve(e.response)

export default {
  get: (path, params) =>
    createApiInstance()
      .request({
        url: path,
        method: "GET",
        params,
      })
      .then(handleResponse)
      .catch(catchError),
  post: (path, body = {}, headers = {}) =>
    createApiInstance()
      .request({
        url: path,
        method: "POST",
        headers,
        data: body,
      })
      .then(handleResponse)
      .catch(catchError),
  put: (path, body = {}) =>
    createApiInstance()
      .request({
        url: path,
        method: "PUT",
        data: body,
      })
      .then(handleResponse)
      .catch(catchError),
  delete: (path) =>
    createApiInstance().delete(path).then(handleResponse).catch(catchError),
}
