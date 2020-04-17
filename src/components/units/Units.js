import React from 'react'

import { useUnitsController } from './Units-Controller'

export function Units() {
  const {units, handleUnits} = useUnitsController()

  return (
    <div>
      Units:{' '}
      <select value={units} onChange={handleUnits}>
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
    </div>
  )
}
