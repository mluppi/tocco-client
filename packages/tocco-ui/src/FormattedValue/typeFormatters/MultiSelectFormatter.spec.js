import React from 'react'
import {mount} from 'enzyme'

import MultiSelectFormatter from './MultiSelectFormatter'

describe('tocco-ui', () => {
  describe('FormattedValue', () => {
    describe('typeFormatters', () => {
      describe('MultiSelectFormatter ', () => {
        it('should format value', () => {
          const value = [{key: '3', display: 'Selected'}, {key: '4', display: 'Selected2'}]
          const wrapper = mount(<MultiSelectFormatter
            value={value}/>)
          expect(wrapper.text()).to.equal('Selected, Selected2')
        })
      })
    })
  })
})
