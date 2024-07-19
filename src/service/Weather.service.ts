import { baseService } from './base.service'

export class Weather {
  async getWeather() {
    const city_nameList = ['杭州市', '郑州市', '北京市']
    return Promise.all(
      city_nameList.map((city_name) => {
        return baseService(`https://api.oioweb.cn/api/weather/weather?city_name=${city_name}`)
      })
    )
  }
}
