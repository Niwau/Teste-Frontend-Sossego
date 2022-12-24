export const getStepColor = (steps: number, index: number) => {
  if (steps == index) {
    return '#5357B1'

  } else if (steps > index) {
    return '#00AE63'
  }

  return '#8C98A9'

}
