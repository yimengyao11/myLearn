import { ReactNode } from 'react'

import { Layout } from 'antd'
import { Menu } from './Menu'

const { Header, Content, Footer, Sider } = Layout

export const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Layout hasSider>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
        <div className='demo-logo-vertical' style={{ color: 'white' }}>
          logo
        </div>
        <Menu />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: 'white' }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', background: 'white' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
