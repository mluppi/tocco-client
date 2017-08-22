export const atMostOne = array => {
  if (!array || array.length === 0) {
    return null
  } else if (array.length === 1) {
    return array[0]
  } else {
    throw new Error(`Expected at most one item in array: ${array.join(', ')}`)
  }
}

/**
 * Get a date value as `YYYY-MM-DD` string representation.
 *
 * @param date Anything that the `Date` constructor accepts as single argument
 * @returns {string} The given date in format `YYYY-MM-DD`
 */
export const toLocalDateString = date => {
  if (date == null) {
    return null
  }

  const dateObj = new Date(date)

  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1 // getMonth() is zero-based
  const day = dateObj.getDate()

  return [
    year,
    (month > 9 ? '' : '0') + month,
    (day > 9 ? '' : '0') + day
  ].join('-')
}
