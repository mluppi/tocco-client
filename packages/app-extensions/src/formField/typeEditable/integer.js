import _get from 'lodash/get'

export default {
  getOptions: ({modelField}) => ({
    prePointDigits: _get(modelField, 'validation.decimalDigits.prePointDigits', null),
    minValue: _get(modelField, 'validation.numberRange.fromIncluding', -(2 ** 31)),
    maxValue: _get(modelField, 'validation.numberRange.toIncluding', (2 ** 31) - 1),
    allowNegative: true,
    decimalScale: 0
  })
}
