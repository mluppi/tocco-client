import {shallow} from 'enzyme'
import React from 'react'
import {Field} from 'redux-form'
import {Layout} from 'tocco-ui'

import FormBuilder from './FormBuilder'

const testData = {
  entity: {
    key: '1',
    paths: {
      firstname: {
        type: 'field',
        value: {
          value: 'First Name',
          type: 'string',
          readable: true,
          writable: true
        }
      },
      lastname: {
        type: 'field',
        value: {
          value: 'Last Name',
          type: 'string',
          readable: true,
          writable: true
        }
      }
    }
  },
  formName: 'detail',
  formValues: {
    firstname: 'Fist Name',
    lastname: 'Last Name',
    'not-readonly-field': 'test'
  },
  formDefinition: {
    id: 'UserSearch_detail',
    readonly: false,
    children: [
      {
        id: 'box1',
        componentType: 'layout',
        layoutType: 'vertical-box',
        readonly: true,
        children: [
          {
            id: 'box1',
            componentType: 'layout',
            layoutType: 'horizontal-box',
            displayType: 'READONLY',
            children: [
              {
                id: 'user_information',
                componentType: 'layout',
                layoutType: 'vertical-box',
                readonly: true,
                children: [
                  {
                    id: 'firstname',
                    componentType: 'field-set',
                    label: 'Vorname',
                    scopes: ['create'],
                    hidden: false,
                    readonly: true,
                    children: [
                      {
                        id: 'firstname-field', // does not match path by intention (-> should use path to get data)
                        componentType: 'field',
                        path: 'firstname',
                        dataType: 'string',
                        label: null
                      }
                    ]
                  },
                  {
                    id: 'lastname',
                    componentType: 'field-set',
                    label: 'Nachname',
                    hidden: false,
                    readonly: true,
                    children: [
                      {
                        id: 'lastname',
                        componentType: 'field',
                        path: 'lastname',
                        dataType: 'string',
                        label: null
                      }
                    ]
                  }
                ]
              },
              {
                id: 'readonly-box',
                componentType: 'layout',
                layoutType: 'vertical-box',
                readonly: true,
                children: [
                  {
                    id: 'not-readonly-field-set',
                    componentType: 'field-set',
                    label: 'Not Readonly',
                    hidden: false,
                    readonly: false,
                    children: [
                      {
                        id: 'not-readonly-field',
                        componentType: 'field',
                        path: 'not-readonly-field',
                        dataType: 'string',
                        label: null
                      }
                    ]
                  }
                ]
              }
            ],
            label: null
          }
        ]
      }
    ]
  }
}

describe('app-extensions', () => {
  describe('form', () => {
    describe('formBuilder', () => {
      test('should render layout boxes and Fields', () => {
        const {entity, formName, formDefinition, formValues} = testData
        const props = {entity, formName, formDefinition, formValues, formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)
        expect(wrapper.find(Layout.Box)).to.have.length(3)
        expect(wrapper.find(Field)).to.have.length(3)
      })

      test('should not render field if beforeRenderField returns false', () => {
        const {entity, formName, formDefinition, formValues} = testData

        const beforeRenderField = name => name !== 'lastname'

        const props = {entity, formName, formDefinition, formValues, beforeRenderField, formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)
        expect(wrapper.find(Layout.Box)).to.have.length(3)
        expect(wrapper.find(Field)).to.have.length(2)
      })

      test('should not require an entity (should not check readable flag in this case)', () => {
        const {formName, formDefinition, formValues} = testData
        const entity = null
        const props = {entity, formName, formDefinition, formValues, formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)
        expect(wrapper.find(Field)).to.have.length(3)
      })

      test('should not render empty values in readonly form', () => {
        const {entity, formName, formDefinition} = testData
        const formDefinitionReadOnly = {...formDefinition, readonly: true}
        const formValues = {lastname: undefined}
        const props = {entity, formName, formValues, formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} formDefinition={formDefinitionReadOnly} />)
        expect(wrapper.find(Field)).to.have.length(0)
      })

      test('should render fields with matching scope', () => {
        const {formName, formDefinition, formValues} = testData
        const entity = null
        const props = {entity, formName, formDefinition, formValues, mode: 'create', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)
        expect(wrapper.find(Field)).to.have.length(3)
      })

      test('should NOT render fields with unmatching scope', () => {
        const {formName, formDefinition, formValues} = testData
        const entity = null
        const props = {entity, formName, formDefinition, formValues, mode: 'update', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)
        expect(wrapper.find(Field)).to.have.length(2)
      })

      test('should render children of readonly layouts to readonly', () => {
        const {formName, formDefinition, formValues} = testData
        const entity = null
        const props = {entity, formName, formDefinition, formValues, mode: 'update', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)
        const field = wrapper.findWhere(e => e.props().id === 'input-detail-not-readonly-field')
        expect(field).to.have.length(1)
        expect(field.props().parentReadOnly).to.be.true
      })

      test('should read multi paths entity fields', () => {
        const entity = {
          paths: {
            relOrder: {
              type: 'entity',
              writable: false,
              value: {
                _links: null,
                key: '12556',
                model: 'Order',
                version: 4,
                paths: {
                  relOrder_debitor_status: {
                    type: 'entity',
                    writable: true,
                    value: {
                      _links: null,
                      key: '2',
                      model: 'Order_debitor_status',
                      version: 2,
                      paths: {}
                    }
                  }
                }
              }
            }
          }
        }

        const formDefinition = {
          id: 'UserSearch_detail',
          readonly: false,
          children: [
            {
              id: 'user_information',
              componentType: 'layout',
              layoutType: 'vertical-box',
              readonly: false,
              children: [
                {
                  id: 'Order_debitor_status',
                  componentType: 'field-set',
                  label: 'Status',
                  hidden: false,
                  readonly: false,
                  children: [
                    {
                      id: 'Order_debitor_status', // does not match path by intention (-> should use path to get data)
                      componentType: 'field',
                      path: 'relOrder.relOrder_debitor_status',
                      dataType: 'string',
                      label: null
                    }
                  ]
                }
              ]
            }
          ]
        }

        const {formName, formValues} = testData
        const props = {entity, formName, formDefinition, formValues, mode: 'update', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)

        expect(wrapper.find(Field).first().props().entityField).to.equal(
          entity.paths.relOrder.value.paths.relOrder_debitor_status
        )
      })

      test('should not render multipath fields with missing parts', () => {
        const entity = {
          paths: {
            relOrder: {
              type: 'entity-list',
              writable: null,
              value: []
            }
          }
        }

        const formDefinition = {
          id: 'UserSearch_detail',
          readonly: false,
          children: [
            {
              id: 'user_information',
              componentType: 'layout',
              layoutType: 'vertical-box',
              readonly: false,
              children: [
                {
                  id: 'Order_debitor_status',
                  componentType: 'field-set',
                  label: 'Status',
                  hidden: false,
                  readonly: false,
                  children: [
                    {
                      id: 'relOrder.relOrder_debitor_status',
                      componentType: 'field',
                      path: 'relOrder.relOrder_debitor_status',
                      dataType: 'string',
                      label: null
                    }
                  ]
                }
              ]
            }
          ]
        }

        const {formName, formValues} = testData
        const props = {entity, formName, formDefinition, formValues, mode: 'update', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)

        expect(wrapper.find(Field)).to.have.length(0)
      })

      test('should render multipath fields with missing parts in create mode', () => {
        const entity = {
          paths: {
            relOrder: {
              type: 'entity-list',
              writable: null,
              value: []
            }
          }
        }

        const formDefinition = {
          id: 'UserSearch_detail',
          readonly: false,
          children: [
            {
              id: 'user_information',
              componentType: 'layout',
              layoutType: 'vertical-box',
              readonly: false,
              children: [
                {
                  id: 'Order_debitor_status',
                  componentType: 'field-set',
                  label: 'Status',
                  hidden: false,
                  readonly: false,
                  children: [
                    {
                      id: 'relOrder.relOrder_debitor_status',
                      componentType: 'field',
                      path: 'relOrder.relOrder_debitor_status',
                      dataType: 'string',
                      label: null
                    }
                  ]
                }
              ]
            }
          ]
        }

        const {formName, formValues} = testData
        const props = {entity, formName, formDefinition, formValues, mode: 'create', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)

        expect(wrapper.find(Field)).to.have.length(1)
      })

      test('should render description field', () => {
        const entity = {
          paths: {
            relOrder: {
              type: 'entity-list',
              writable: null,
              value: []
            }
          }
        }

        const formDefinition = {
          id: 'UserSearch_detail',
          readonly: false,
          children: [
            {
              id: 'user_information',
              componentType: 'layout',
              layoutType: 'vertical-box',
              readonly: false,
              children: [
                {
                  id: 'email_change_field_description',
                  label: null,
                  componentType: 'field-set',
                  children: [
                    {
                      id: 'email_change_field_description',
                      label: null,
                      componentType: 'description',
                      title: 'description title',
                      text: 'description text',
                      mode: 'tooltip'
                    }
                  ],
                  readonly: false,
                  hidden: false,
                  useLabel: 'no',
                  scopes: [],
                  ignoreCopy: false
                }
              ]
            }
          ]
        }

        const {formName, formValues} = testData
        const props = {entity, formName, formDefinition, formValues, mode: 'update', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)

        expect(wrapper.find(Field)).to.have.length(1)
      })

      test('should always render location field', () => {
        const entity = {}

        const formDefinition = {
          id: 'UserSearch_detail',
          readonly: false,
          children: [
            {
              id: 'user_information',
              componentType: 'layout',
              layoutType: 'vertical-box',
              readonly: false,
              children: [
                {
                  id: 'locationfield_c',
                  label: 'PLZ / Ort',
                  componentType: 'field-set',
                  children: [
                    {
                      id: 'locationfield_c',
                      label: null,
                      componentType: 'field',
                      path: null,
                      dataType: 'location',
                      validation: null,
                      defaultValue: null,
                      autoCompleteEndpoint: null,
                      locationMapping: {
                        postcode: 'zip_c',
                        city: 'city_c',
                        street: 'address_c',
                        country: 'relCountry_c',
                        state: 'canton',
                        district: 'admincode2'
                      },
                      countries: ['DE', 'AT', 'CH', 'IT', 'FR', 'LI']
                    }
                  ],
                  readonly: false,
                  hidden: false,
                  useLabel: 'yes',
                  scopes: [],
                  ignoreCopy: false
                }
              ]
            }
          ]
        }

        const {formName, formValues} = testData
        const props = {entity, formName, formDefinition, formValues, mode: 'update', formFieldMapping: {}}
        const wrapper = shallow(<FormBuilder {...props} />)

        expect(wrapper.find(Field)).to.have.length(1)
      })
    })
  })
})
