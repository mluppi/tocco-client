/* eslint-disable react/prop-types */
import {mount} from 'enzyme'
import React from 'react'

import SingleSelectFormatter from './SingleSelectFormatter'

describe('tocco-ui', () => {
  describe('FormattedValue', () => {
    describe('typeFormatters', () => {
      describe('SingleSelectFormatter ', () => {
        test('should format value', () => {
          const value = {key: '3', display: 'Selected'}
          const wrapper = mount(<SingleSelectFormatter value={value} />)
          expect(wrapper.text()).to.equal('Selected')
        })

        test('should render Link if factory provided', () => {
          const value = {key: '3', display: 'Selected'}
          const wrapper = mount(
            <SingleSelectFormatter value={value} options={{DetailLink: ({key, children}) => <a>{children}</a>}} />
          )
          expect(wrapper.find('a')).to.have.length(1)
        })
      })
    })
  })
})
