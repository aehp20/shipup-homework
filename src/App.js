import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import { Layout, Menu } from 'antd'

import {AppProvider} from './App-Context'
import {Weather} from './routes/weather'
import {Sunrise} from './routes/sunrise'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  const { Header, Content, Footer } = Layout

  return (
    <AppProvider>
      <Router>
        <Layout className='layout'>
          <Header>
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
              <Menu.Item key='1'><Link to='/weather'>Weather</Link></Menu.Item>
              <Menu.Item key='2'><Link to='/sunrise'>Sunrise</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className='custom-content'>
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/">
                  <Weather />
                </Route>
                <Route exact path='/weather'>
                  <Weather />
                </Route>
                <Route exact path='/sunrise'>
                  <Sunrise />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer className='custom-footer'>Homework created by Aron Herrera Ponte</Footer>
        </Layout>
      </Router>
    </AppProvider>
  )
}

export default App
