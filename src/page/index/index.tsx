import { LayoutContainer } from '../../components/layout'
import { service } from '../../service'
import { useEffect } from 'react'
export const Index = () => {
  useEffect(() => {
    service.Weather.getWeather().then((res) => {
      console.log(res)
    })
  })
  return (
    <LayoutContainer>
      <div>首页</div>
    </LayoutContainer>
  )
}
