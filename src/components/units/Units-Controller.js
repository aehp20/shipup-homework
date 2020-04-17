import {useAppContext} from '../../App-Context'

export function useUnitsController() {
  const {units, setUnits} = useAppContext()

  function handleUnits(event) {
    setUnits(event.target.value)
  }

  return {
    units,
    handleUnits
  }
}
