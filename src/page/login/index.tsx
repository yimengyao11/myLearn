import React from 'react'
import { SlackOutlined, InteractionOutlined } from '@ant-design/icons'
export const Login: React.FC = () => {
  return (
    <div style={{ display: 'flex', background: '#293164', height: '100vh' }}>
      <div className='left' style={{ width: '50%', height: '100%' }}>
        <div style={{ display: 'flex', margin: '30px 50px 0 30px' }}>
          <SlackOutlined />
          <div style={{ color: 'red' }}>Vben Admin</div>
        </div>
        <div>
          <img
            style={{ width: 270, margin: '30px 50px 0 30px' }}
            src='https://vben.vvbin.cn/assets/login-box-bg-BwcHql23.svg'
          />
        </div>
        <div style={{ color: 'white', margin: '30px 50px 0 30px' }}>开箱即用的后台管理系统</div>
        <div style={{ color: 'white', margin: '10px 20px 0 10px' }}>输入自己个人信息吧</div>
      </div>

      <div className='right' style={{ width: '50%', height: '100%' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
          <InteractionOutlined style={{ color: 'yellow' }} />
        </div>
        <div style={{ color: 'white', margin: '150px 0 0 30px' }}>登录</div>
      </div>
    </div>
  )
}
