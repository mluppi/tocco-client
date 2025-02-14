import {shallow} from 'enzyme'
import React from 'react'

import Icon from '../Icon'
import PanelHeaderFooter from './PanelHeaderFooter'
import StyledPanelHeaderFooter from './StyledPanelHeaderFooter'

describe('tocco-ui', () => {
  describe('Panel', () => {
    describe('PanelHeaderFooter', () => {
      test('should render parent and children', () => {
        const wrapper = shallow(
          <PanelHeaderFooter isToggleable={true} showToggler={true}>
            <span>child-1</span>
            <span>child-2</span>
          </PanelHeaderFooter>
        )
        expect(wrapper.find(StyledPanelHeaderFooter)).to.have.length(1)
        expect(wrapper.find('div')).to.have.length(1)
        expect(wrapper.find('span')).to.have.length(2)
        expect(wrapper.find('span').first().text()).to.equal('child-1')
        expect(wrapper.find('span').last().text()).to.equal('child-2')
      })

      test('should hide or display Icon according precondition', () => {
        let wrapper = shallow(<PanelHeaderFooter isToggleable={true} showToggler={true} />)
        expect(wrapper.find(Icon)).to.have.length(1)

        wrapper = shallow(<PanelHeaderFooter isToggleable={false} showToggler={true} />)
        expect(wrapper.find(Icon)).to.have.length(0)

        wrapper = shallow(<PanelHeaderFooter isToggleable={true} showToggler={false} />)
        expect(wrapper.find(Icon)).to.have.length(0)

        wrapper = shallow(<PanelHeaderFooter isToggleable={false} showToggler={false} />)
        expect(wrapper.find(Icon)).to.have.length(0)
      })

      test('should display Ball correctly', () => {
        let wrapper = shallow(<PanelHeaderFooter isOpen={false} isToggleable={true} showToggler={true} />)
        expect(wrapper.find(Icon).prop('icon')).to.be.equal('chevron-down')
        expect(wrapper.find(Icon).prop('title')).to.be.equal('Show more information')

        wrapper = shallow(<PanelHeaderFooter isOpen={true} isToggleable={true} showToggler={true} />)
        expect(wrapper.find(Icon).prop('icon')).to.be.equal('chevron-up')
        expect(wrapper.find(Icon).prop('title')).to.be.equal('Hide information')
      })
    })
  })
})
