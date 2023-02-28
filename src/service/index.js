import HttpRequest from "./config/request"
import config from './config/config'
const httpRequest = new HttpRequest({
  ...config,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (data) => {
      return data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default httpRequest
