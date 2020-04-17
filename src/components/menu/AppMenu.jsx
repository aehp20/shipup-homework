import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Menu} from 'antd'

export function AppMenu() {
  const location = useLocation()

  function getSelectedKey(location) {
    let selectedKey = ['1']

    if (location.pathname === '/sunrise') {
      selectedKey = ['2']
    }

    return selectedKey
  }

  return (
    <Menu theme='dark' mode='horizontal' defaultSelectedKeys={getSelectedKey(location)}>
      <Menu.Item key='1'><Link to='/weather'>Weather</Link></Menu.Item>
      <Menu.Item key='2'><Link to='/sunrise'>Sunrise</Link></Menu.Item>
    </Menu>
  )
}
