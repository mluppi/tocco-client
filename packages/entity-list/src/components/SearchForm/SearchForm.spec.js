import React from 'react'
import {IntlStub} from 'tocco-test-util'
import SearchForm from './'
import {mount, shallow} from 'enzyme'
import {Button, FormField} from 'tocco-ui'

const EMPTY_FUNC = () => {}

describe('entity-list', () => {
  describe('components', () => {
    describe('SearchForm', () => {
      it('should render nothing if searchFormDefinition empty', () => {
        const entityModel = require('../../dev/test-data/userModel.json')
        const searchFormDefinition = []

        const wrapper = shallow(
          <SearchForm
            initialize={EMPTY_FUNC}
            entityModel={entityModel}
            searchFormDefinition={searchFormDefinition}
            setSearchInput={EMPTY_FUNC}
            relationEntities={{}}
            searchInputs={{}}
            loadRelationEntity={EMPTY_FUNC}
            reset={EMPTY_FUNC}
            intl={IntlStub}
            simpleSearchFields={[]}
            disableSimpleSearch
            preselectedSearchFields={[]}
          />
        )

        expect(wrapper.type()).to.be.null
      })

      it('should render needed components', () => {
        const entityModel = require('../../dev/test-data/userModel.json')
        const searchFormDefinition = require('../../dev/test-data/searchFormDefinition.json')

        const wrapper = mount(<SearchForm
          initialize={EMPTY_FUNC}
          entityModel={entityModel}
          searchFormDefinition={searchFormDefinition}
          setSearchInput={EMPTY_FUNC}
          relationEntities={{}}
          searchInputs={{}}
          loadRelationEntity={EMPTY_FUNC}
          reset={EMPTY_FUNC}
          intl={IntlStub}
          simpleSearchFields={[]}
          disableSimpleSearch
          preselectedSearchFields={[]}
        />)

        expect(wrapper.find(FormField)).to.have.length(searchFormDefinition.length)
        expect(wrapper.find(Button)).to.have.length(2)
      })

      it('should render only the fulltext field', () => {
        const entityModel = require('../../dev/test-data/userModel.json')
        const searchFormDefinition = require('../../dev/test-data/searchFormDefinition.json')

        const wrapper = mount(<SearchForm
          initialize={EMPTY_FUNC}
          entityModel={entityModel}
          searchFormDefinition={searchFormDefinition}
          setSearchInput={EMPTY_FUNC}
          relationEntities={{}}
          searchInputs={{}}
          loadRelationEntity={EMPTY_FUNC}
          reset={EMPTY_FUNC}
          intl={IntlStub}
          disableSimpleSearch={false}
          simpleSearchFields={['txtFulltext']}
          preselectedSearchFields={[]}
        />)

        expect(wrapper.find(FormField)).to.have.length(1)
        expect(wrapper.find(Button)).to.have.length(3)
      })

      it('should render two fields', () => {
        const entityModel = require('../../dev/test-data/userModel.json')
        const searchFormDefinition = require('../../dev/test-data/searchFormDefinition.json')

        const wrapper = mount(<SearchForm
          initialize={EMPTY_FUNC}
          entityModel={entityModel}
          searchFormDefinition={searchFormDefinition}
          setSearchInput={EMPTY_FUNC}
          relationEntities={{}}
          searchInputs={{}}
          loadRelationEntity={EMPTY_FUNC}
          reset={EMPTY_FUNC}
          intl={IntlStub}
          disableSimpleSearch={false}
          simpleSearchFields={['txtFulltext', 'relUser_code1']}
          preselectedSearchFields={[]}
        />)

        expect(wrapper.find(FormField)).to.have.length(2)
        expect(wrapper.find(Button)).to.have.length(3)
      })

      it('should not show hidden value', () => {
        const entityModel = require('../../dev/test-data/userModel.json')
        const searchFormDefinition = require('../../dev/test-data/searchFormDefinition.json')

        const preselectedSearchFields = [
          {
            id: 'relUser_code1',
            value: 'VALUE',
            hidden: true
          }
        ]

        const wrapper = mount(<SearchForm
          initialize={EMPTY_FUNC}
          entityModel={entityModel}
          searchFormDefinition={searchFormDefinition}
          setSearchInput={EMPTY_FUNC}
          relationEntities={{}}
          searchInputs={{}}
          loadRelationEntity={EMPTY_FUNC}
          reset={EMPTY_FUNC}
          intl={IntlStub}
          disableSimpleSearch
          simpleSearchFields={[]}
          preselectedSearchFields={preselectedSearchFields}
        />)

        expect(wrapper.find(FormField)).to.have.length(searchFormDefinition.length - 1)
      })
    })
  })
})
