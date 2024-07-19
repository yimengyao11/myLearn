import { LayoutContainer } from '../../components/layout'
import { service } from '../../service'
import { useEffect } from 'react'
export const Index = () => {
  useEffect(() => {
    service.Weather.getWeather().then((res) => {
      console.log(res)
    })
  })

  //TODO下面两种写法一样
  const otherChildren = () => <LayoutContainer children={<div>首页</div>}></LayoutContainer>
  return (
    <LayoutContainer>
      <div>首页</div>
    </LayoutContainer>
  )
}
