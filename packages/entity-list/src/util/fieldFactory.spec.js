import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {intlEnzyme, IntlStub} from 'tocco-test-util'
import {FormattedValue} from 'tocco-ui'

import fieldFactory, {MultiSeparator} from './fieldFactory'

describe('entity-list', () => {
  describe('util', () => {
    const getStore = () =>
      createStore(() => ({
        formData: {navigationStrategy: {}},
        entityList: {formName: 'User'},
        list: {lazyData: {}}
      }))

    describe('fieldFactory', () => {
      test('should return FormattedValue', () => {
        const field = {
          id: 'firstname-field', // does not match path by intention (-> should use path to get data)
          path: 'firstname',
          dataType: 'string'
        }
        const entity = {
          firstname: {
            value: 'Donald',
            type: 'string'
          }
        }

        const wrapper = intlEnzyme.mountWithIntl(
          <Provider store={getStore()}>{fieldFactory(field, entity, IntlStub)}</Provider>
        )
        expect(wrapper.find(FormattedValue)).to.have.length(1)
        expect(wrapper.find(FormattedValue).props().options).to.eql({})
      })

      test('should return FormattedValue and add type specific props', () => {
        const field = {
          id: 'doc',
          path: 'doc',
          dataType: 'document'
        }
        const entity = {
          doc: {fileName: 'test.pdf', binaryLink: '...', thumbnailLink: '...'}
        }

        const wrapper = intlEnzyme.mountWithIntl(
          <Provider store={getStore()}>{fieldFactory(field, entity, IntlStub)}</Provider>
        )

        expect(wrapper.find(FormattedValue).props()).to.have.property('options')
        expect(wrapper.find(FormattedValue).props().options).to.have.property('downloadTitle')
        expect(wrapper.find(FormattedValue).props().options).to.have.property('tooltips')
        expect(wrapper.find(FormattedValue).props().options).to.have.property('loadTooltip')
      })

      test('should return array with separator', () => {
        const field = {
          id: 'relSomething.xy',
          path: 'relSomething.xy',
          dataType: 'string'
        }
        const entity = {
          'relSomething.xy': [
            {value: 'V1', type: 'string'},
            {value: 'V1', type: 'string'}
          ]
        }

        const wrapper = intlEnzyme.mountWithIntl(
          <Provider store={getStore()}>{fieldFactory(field, entity, IntlStub)}</Provider>
        )

        expect(wrapper.find(FormattedValue)).to.have.length(2)
        expect(wrapper.find(MultiSeparator)).to.have.length(1)
      })
    })
  })
})
