import axios, { AxiosInstance } from 'axios'
import { ApolloOptions } from '../types/index'


export class ApolloClient {
  private $http: AxiosInstance
  private $opts: ApolloOptions
  constructor(opts: ApolloOptions) {
    this.$opts = opts
    const { configServer } = opts
    this.$http = axios.create({
      baseURL: `${configServer}/api`,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  async serviceConfig() {
    try {
      const res = await this.$http.get(`services/config`)
      return res.data
    } catch (error) {
      console.error('ApolloClient.serviceConfig ERROR >', error?.message)
      return null
    }
  }

  async getConfig(namespace: string) {
    try {
      const { appId } = this.$opts
      const res = await this.$http.get(`configfiles/json/${appId}/default/${namespace}`)
      return res.data
    } catch (error) {
      console.error('ApolloClient.getConfig ERROR >', error?.message)
      return null
    }
  }
}

