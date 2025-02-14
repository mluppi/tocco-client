import {shallow} from 'enzyme'
import React from 'react'
import {IntlStub} from 'tocco-test-util'

import Conflict from './Conflict'

describe('scheduler', () => {
  describe('components', () => {
    describe('Conflict', () => {
      test('should return null if conflictstatus is undefined', () => {
        const wrapper = shallow(<Conflict intl={IntlStub} />)
        expect(wrapper.type()).to.be.null
      })

      test('should return null if conflictstatus is none', () => {
        const wrapper = shallow(<Conflict intl={IntlStub} conflictStatus="none" />)
        expect(wrapper.type()).to.be.null
      })

      test('should render a check icon if conflict is accepted', () => {
        const wrapper = shallow(<Conflict intl={IntlStub} conflictStatus="accepted" />)
        expect(wrapper.html()).to.be.contains('✓')
      })

      test('should render a times icon if conflict is existing', () => {
        const wrapper = shallow(<Conflict intl={IntlStub} conflictStatus="existing" />)
        expect(wrapper.html()).to.be.contains('✕')
      })
    })
  })
})
