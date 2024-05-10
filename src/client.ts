import axios, { AxiosInstance } from 'axios'
import { ApolloOptions } from '../types/index'


export class ApolloClient {
  private $http: AxiosInstance
  constructor(opts: ApolloOptions) {
    const { configServer, token } = opts
    this.$http = axios.create({
      baseURL: `${configServer}/api`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async serviceConfig() {
    try {
      const res = await this.$http.get(``)
      return res.data
    } catch (error) {
      console.error('ApolloClient.serviceConfig ERROR >', error?.message)
      return null
    }
  }

  async getConfig(namespace: string) {
    try {
      const res = await this.$http.get(``)
      return res.data
    } catch (error) {
      console.error('ApolloClient.getConfig ERROR >', error?.message)
      return null
    }
  }
}

