import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {Layout} from 'antd'

import {AppProvider} from './App-Context'
import {Weather} from './routes/weather'
import {Sunrise} from './routes/sunrise'
import {AppMenu} from './components/menu/AppMenu'

import 'antd/dist/antd.css'
import './App.css'

function App() {
  const { Header, Content, Footer } = Layout

  return (
    <AppProvider>
      <Router>
        <Layout className='layout'>
          <Header>
            <AppMenu />
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
