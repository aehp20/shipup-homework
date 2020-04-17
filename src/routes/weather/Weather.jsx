import React from 'react'

import {getDateTimeToString} from '../../common/utils'
import {Units} from '../../components/units'
import {useAppContext} from '../../App-Context'

export function Weather() {
  const {weatherParisData} = useAppContext()

  return (
    <div>
      <h2>Weather</h2>
      <Units />
      <br />
      {
        !!weatherParisData && (
          <table>
            <tbody>
              <tr>
                <td>Date/Time</td>
                <td>{getDateTimeToString(weatherParisData.dt)}</td>
              </tr>
              <tr>
                <td>Temperature</td>
                <td>{weatherParisData.main && weatherParisData.main.temp}</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{weatherParisData.weather && weatherParisData.weather[0].description}</td>
              </tr>
              <tr>
                <td>Wind</td>
                <td>{weatherParisData.wind && weatherParisData.wind.speed}</td>
              </tr>
            </tbody>
          </table>
        )
      }  
    </div>
  )
}
