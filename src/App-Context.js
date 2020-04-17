import React, {useEffect, useState, createContext, useContext} from 'react'

import {DEFAULT_UNITS} from './App-Constants'
import api from './common/services/api'
import {HTTP_REQUEST_OK} from './common/constants/http-codes'
import {WEATHER_PARIS_API_URL} from './App-Constants'

const AppContext = createContext({})

export function AppProvider(props) {
  const [units, setUnits] = useState(DEFAULT_UNITS)
  const [weatherParisData, setWeatherParisData] = useState({})

  const value = {
    units,
    weatherParisData,
    setUnits
  }

  useEffect(() => {
    function getWeatherParisData(units) {
      api
        .get(`${WEATHER_PARIS_API_URL}&units=${units}`)
        .then(res => {
          if (res.status === HTTP_REQUEST_OK) {
            setWeatherParisData(res.data)
          } else {
            console.log(res.error)
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
    getWeatherParisData(units)
  }, [units])

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
