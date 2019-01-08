import {EditableValue} from 'tocco-ui'
import {mount} from 'enzyme'

import editableValueFactory from './editableValueFactory'

describe('app-extensions', () => {
  describe('formField', () => {
    describe('editableValueFactory', () => {
      test('should return simple editableValue', () => {
        const factory = editableValueFactory('string')

        const props = {
          value: 'test'
        }

        const events = {
          onClick: () => {
          }
        }

        const editableValue = factory({}, {}, props, events, {})

        const wrapper = mount(editableValue)

        expect(wrapper).to.have.type(EditableValue)
        expect(wrapper).to.have.prop('value', 'test')
        expect(wrapper).to.have.prop('events', events)
      })

      test('should should format message to hours and minutes label', () => {
        const factory = editableValueFactory('duration')
        const util = {
          intl: {
            formatMessage: v => (v.id)
          }
        }

        const editableValue = factory({}, {}, {}, {}, util)

        const wrapper = mount(editableValue)

        const options = wrapper.prop('options')

        expect(wrapper).to.have.type(EditableValue)
        expect(options.hoursLabel).to.eql('client.component.duration.hoursLabel')
        expect(options.minutesLabel).to.eql('client.component.duration.minutesLabel')
      })
    })
  })
})
