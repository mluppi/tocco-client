import {shallow} from 'enzyme'
import React from 'react'

import Typography from '../Typography'
import SignalBox from './SignalBox'

describe('tocco-ui', () => {
  describe('SignalBox', () => {
    test('should have one defaultProps', () => {
      const wrapper = shallow(<SignalBox />)
      const {condition} = wrapper.props()
      expect(condition).to.equal('base')
    })

    test('should not render title, meta and children', () => {
      const wrapper = shallow(<SignalBox />)
      expect(wrapper.children()).to.have.length(0)
    })

    test('should render title as <H5>, meta as <Small> and children', () => {
      const wrapper = shallow(
        <SignalBox title="title text" meta="meta text">
          <span>child text</span>
        </SignalBox>
      )
      expect(wrapper.children()).to.have.length(3)
      expect(wrapper.find(Typography.H5).dive().text()).to.be.equal('title text')
      expect(wrapper.find(Typography.Small).dive().text()).to.be.equal('meta text')
      expect(wrapper.find('span').text()).to.be.equal('child text')
    })
  })
})
