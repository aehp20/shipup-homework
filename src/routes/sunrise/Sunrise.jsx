import React from 'react'

import {useAppContext} from '../../App-Context'
import {getDateTimeToString} from '../../common/utils'
import {Units} from '../../components/units'

export function Sunrise() {
  const {weatherParisData} = useAppContext()

  return (
    <div>
      <h2>Sunrise</h2>
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
                <td>Sunrise Time</td>
                <td>{weatherParisData.sys && getDateTimeToString(weatherParisData.sys.sunrise)}</td>
              </tr>
              <tr>
                <td>Sunset Time</td>
                <td>{weatherParisData.sys && getDateTimeToString(weatherParisData.sys.sunset)}</td>
              </tr>
            </tbody>
          </table>
        )
      }  
    </div>
  )
}
