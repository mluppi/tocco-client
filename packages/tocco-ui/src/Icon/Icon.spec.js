import React from 'react'
import {mount} from 'enzyme'
import {ThemeProvider} from 'styled-components'

import Icon from './Icon'

describe('tocco-ui', () => {
  describe('Icon', () => {
    test('should have 1 defaultProps', () => {
      const wrapper = mount(<Icon icon="square"/>)
      expect(wrapper.children().prop('position')).to.equal('sole')
    })

    test('should receive theme', () => {
      const wrapper = mount(
        <ThemeProvider theme={{key: 'value'}}>
          <Icon icon="square"/>
        </ThemeProvider>
      )
      expect(wrapper.prop('theme')).to.deep.equal({key: 'value'})
    })

    test('should render an icon', done => {
      let wrapper = null
      const loaded = () => {
        wrapper.update()
        expect(wrapper.find('svg')).to.have.length(1)
        done()
      }
      wrapper = mount(<Icon icon="user" onLoaded={loaded}/>)
    })
  })
})
