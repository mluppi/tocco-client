import React from 'react'
import FullCalendar from './FullCalendar'
import {shallow, mount} from 'enzyme'

describe('scheduler', () => {
  describe('components', () => {
    describe('Fullcalendar', () => {
      it('should render', () => {
        const wrapper = shallow(<FullCalendar/>)
        expect(wrapper.find('div')).to.have.length(1)
      })

      const mockEvents = [
        {
          resourceId: '0Dummy_entity',
          title: 'Lecture IT 2',
          start: '2016-10-17T07:25:53.550Z',
          end: '2018-10-17T09:25:53.550Z'
        }
      ]

      const mockResources = [
        {title: 'Dummy_entity 0', id: '0Dummy_entity', entityId: '0', calendarType: 'dummy'}
      ]

      it('should show resources', () => {
        const wrapper = mount(<FullCalendar/>)
        expect(wrapper.html()).to.not.have.string(mockResources[0].title)
        wrapper.setProps({resources: mockResources})
        expect(wrapper.html()).to.have.string(mockResources[0].title)
      })

      it('should show events', () => {
        const wrapper = mount(<FullCalendar locale="de" resources={mockResources} />)
        wrapper.setProps({events: mockEvents})
        // its not possible to check for updated events
      })

      it('should set locale on fullcalendar', () => {
        const wrapper = mount(<FullCalendar locale="de"/>)
        expect(wrapper.html()).to.have.string('Heute')
        wrapper.setProps({locale: 'en'})
        expect(wrapper.html()).to.have.string('today')
      })

      it('should set locale on fullcalendar', () => {
        const wrapper = mount(<FullCalendar onCalendarRemove={() => {}} resources={mockResources} />)
        expect(wrapper.html()).to.have.string('remove-resource-btn')
      })
    })
  })
})
