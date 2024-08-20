import { baseService } from "./base.service";
const baseurl = "baseurl";
export class Weather {
  async getWeather() {
    const city_nameList = ["杭州市", "郑州市", "北京市"];
    return Promise.all(
      city_nameList.map((city_name) => {
        return baseService.get(
          // 使用get请求的方法 获取路由数据
          `https://api.oioweb.cn/api/weather/weather?city_name=${city_name}`
          // 模板字符串是允许嵌入表达式的字符串（可以使用多行字符串和字符串插值功能）
          //  `......`反引号 ,${...}是字符串插值
          // 这是后端给的路由
        );
      })
    );
  }
  async getCity() {
    return baseurl + "city";
  }
}
