import {put, select, call, fork, spawn, takeLatest, takeEvery, all} from 'redux-saga/effects'
import * as actions from './actions'
import * as searchFormActions from '../searchForm/actions'
import {getSearchInputs} from '../searchForm/sagas'
import rootSaga, * as sagas from './sagas'
import {fetchForm, tableDefinitionTransformer} from '../../util/api/forms'
import {fetchEntityCount, fetchEntities, entitiesListTransformer, fetchModel} from '../../util/api/entities'

const generateState = (entityStore = {}, page) => ({
  initialized: false,
  formBase: '',
  orderBy: '',
  limit: '',
  entityStore,
  columnDefinition: [],
  page
})

describe('entity-list', () => {
  describe('modules', () => {
    describe('list', () => {
      describe('sagas', () => {
        describe('rootSaga', () => {
          it('should fork child sagas', () => {
            const generator = rootSaga()
            expect(generator.next().value).to.deep.equal(all([
              fork(takeLatest, actions.INITIALIZE, sagas.initialize),
              fork(takeLatest, actions.CHANGE_PAGE, sagas.changePage),
              fork(takeLatest, searchFormActions.EXECUTE_SEARCH, sagas.resetDataSet),
              fork(takeEvery, actions.SET_ORDER_BY, sagas.resetDataSet),
              fork(takeEvery, actions.RESET_DATA_SET, sagas.resetDataSet),
              fork(takeLatest, actions.REFRESH, sagas.refresh)
            ]))
            expect(generator.next().done).to.be.true
          })
        })

        describe('initialize saga', () => {
          it('should initialize the list', () => {
            const entityName = 'Test_entity'
            const formBase = 'Base_form'
            const columnDefinition = []
            const entityModel = {}
            const initialized = false

            const gen = sagas.initialize()
            expect(gen.next().value).to.eql(put(actions.setInProgress(true)))
            expect(gen.next().value).to.eql(select(sagas.entityListSelector))
            expect(gen.next({entityName}).value).to.eql(select(sagas.inputSelector))
            expect(gen.next({formBase}).value).to.eql(select(sagas.listSelector))
            const nextValue = gen.next({columnDefinition, entityModel, initialized}).value
            expect(nextValue).to.eql(all([
              call(sagas.loadEntityModel, entityName, entityModel),
              call(sagas.loadTableDefinition, columnDefinition, formBase)
            ]))

            expect(gen.next().value).to.eql(call(sagas.resetDataSet))
            expect(gen.next().value).to.eql(put(actions.setInProgress(false)))
            expect(gen.next().value).to.eql(put(actions.setInitialized()))
            expect(gen.next().done).to.be.true
          })

          it('should refresh the current page if already initialized', () => {
            const entityName = 'Test_entity'
            const formBase = 'Base_form'
            const columnDefinition = []
            const entityModel = {}
            const initialized = true

            const gen = sagas.initialize()
            expect(gen.next().value).to.eql(put(actions.setInProgress(true)))
            expect(gen.next().value).to.eql(select(sagas.entityListSelector))
            expect(gen.next({entityName}).value).to.eql(select(sagas.inputSelector))
            expect(gen.next({formBase}).value).to.eql(select(sagas.listSelector))
            expect(gen.next({columnDefinition, entityModel, initialized}).value).to.eql(call(sagas.refresh))
            expect(gen.next().value).to.eql(put(actions.setInProgress(false)))
            expect(gen.next().value).to.eql(put(actions.setInitialized()))
            expect(gen.next().done).to.be.true
          })
        })

        describe('changePage saga', () => {
          it('should set currentPage and requestEntities', () => {
            const page = 1
            const gen = sagas.changePage({payload: {page: page}})
            expect(gen.next().value).to.eql(put(actions.setInProgress(true)))
            expect(gen.next().value).to.eql(put(actions.setCurrentPage(page)))
            expect(gen.next().value).to.eql(call(sagas.requestEntities, page))
            expect(gen.next().value).to.eql(put(actions.setInProgress(false)))
            expect(gen.next().done).to.be.true
          })
        })

        describe('fetchEntitiesAndAddToStore saga', () => {
          it('should not add entities to store if already in it', () => {
            const entityName = 'User'
            const formBase = 'UserForm'
            const entityStore = {1: {}}

            const gen = sagas.fetchEntitiesAndAddToStore(1)
            expect(gen.next().value).to.eql(select(sagas.inputSelector))
            expect(gen.next({entityName, formBase}).value).to.eql(select(sagas.listSelector))
            expect(gen.next({entityStore}).done).to.be.true
          })

          it('should add entities to store', () => {
            const listViewState = generateState({}, 1)
            const input = {formBase: 'Base_form', entityName: 'User', searchFilters: []}
            const formName = input.formBase + '_list'
            const searchInputs = {}
            const entities = []

            const {page, orderBy, limit, columnDefinition} = listViewState
            const fetchParams = {
              page,
              orderBy,
              limit,
              fields: columnDefinition,
              searchInputs,
              formName,
              searchFilters: []
            }

            const gen = sagas.fetchEntitiesAndAddToStore(1)
            expect(gen.next().value).to.eql(select(sagas.inputSelector))
            expect(gen.next(input).value).to.eql(select(sagas.listSelector))
            expect(gen.next(listViewState).value).to.eql(call(getSearchInputs))
            expect(gen.next(searchInputs).value).to.eql(
              call(fetchEntities, input.entityName, fetchParams, entitiesListTransformer)
            )
            expect(gen.next(entities).value).to.eql(put(actions.addEntitiesToStore(page, entities)))
            expect(gen.next().done).to.be.true
          })
        })

        describe('requestEntities saga', () => {
          it('should request entities', () => {
            const page = 1
            const gen = sagas.requestEntities(page)

            const state = generateState({}, page)
            state.limit = 50
            state.entityCount = 1000

            expect(gen.next().value).to.eql(select(sagas.listSelector))
            expect(gen.next(state).value).to.eql(call(sagas.fetchEntitiesAndAddToStore, page))
            expect(gen.next().value).to.eql(call(sagas.displayEntity, page))
            expect(gen.next().value).to.eql(spawn(sagas.fetchEntitiesAndAddToStore, page + 1))
            expect(gen.next().done).to.be.true
          })

          it('should not cache if at end', () => {
            const page = 1
            const gen = sagas.requestEntities(page)

            const state = generateState({}, page)
            state.limit = 50
            state.entityCount = 49

            expect(gen.next().value).to.eql(select(sagas.listSelector))
            expect(gen.next(state).value).to.eql(call(sagas.fetchEntitiesAndAddToStore, page))
            expect(gen.next().value).to.eql(call(sagas.displayEntity, page))

            expect(gen.next().done).to.be.true
          })
        })

        describe('displayEntity saga', () => {
          it('should display entity', () => {
            const page = 1
            const gen = sagas.displayEntity(page)
            const entities = [{}]
            const state = generateState({1: entities})
            expect(gen.next().value).to.eql(select(sagas.listSelector))
            expect(gen.next(state).value).to.eql(put(actions.setEntities(entities)))
            expect(gen.next().done).to.be.true
          })
        })

        describe('resetDataSet saga', () => {
          it('should clear the entity store', () => {
            const gen = sagas.resetDataSet()

            const formBase = 'User'
            const entityName = 'User'
            const searchInputs = {}
            const entityCount = 100
            const searchFilters = []
            const formName = 'User_list'
            const fetchParams = {
              searchInputs,
              formName,
              searchFilters: []
            }

            expect(gen.next().value).to.eql(put(actions.setInProgress(true)))
            expect(gen.next().value).to.eql(select(sagas.inputSelector))
            expect(gen.next({entityName, searchFilters, formBase}).value).to.eql(call(getSearchInputs))
            expect(gen.next(searchInputs).value).to.eql(call(fetchEntityCount, entityName, fetchParams))
            expect(gen.next(entityCount).value).to.eql(put(actions.setEntityCount(entityCount)))
            expect(gen.next().value).to.eql(put(actions.clearEntityStore()))
            expect(gen.next().value).to.eql(call(sagas.changePage, {payload: {page: 1}}))
            expect(gen.next().value).to.eql(put(actions.setInProgress(false)))
            expect(gen.next().done).to.be.true
          })
        })

        describe('refresh saga', () => {
          it('should refresh current page', () => {
            const page = 33
            const gen = sagas.refresh()
            const entities = [{}]
            const state = {currentPage: page}

            expect(gen.next().value).to.eql(put(actions.setInProgress(true)))
            expect(gen.next().value).to.eql(select(sagas.listSelector))
            expect(gen.next(state).value).to.eql(put(actions.clearEntityStore(entities)))
            expect(gen.next(state).value).to.eql(call(sagas.requestEntities, page))
            expect(gen.next().value).to.eql(put(actions.setInProgress(false)))
            expect(gen.next().done).to.be.true
          })
        })

        describe('loadTableDefinition saga', () => {
          it('should load Columndefinition if not loaded', () => {
            const columnDefinition = []
            const formBase = 'UserSearch'
            const loadedTableDefinition = {
              columnDefinition: [],
              sorting: ''
            }
            const gen = sagas.loadTableDefinition(columnDefinition, formBase)
            expect(gen.next().value).to.eql(call(fetchForm, `${formBase}_list`, tableDefinitionTransformer))
            expect(gen.next(loadedTableDefinition).value).to.eql(put(actions.setColumnDefinition(columnDefinition)))
            expect(gen.next([]).value).to.eql(put(actions.setOrderBy({orderBy: ''})))

            expect(gen.next().done).to.be.true
          })

          it('should not load Columndefinition if already loaded', () => {
            const columnDefinition = [{someContent: true}]
            const formBase = 'UserSearch'
            const gen = sagas.loadTableDefinition(columnDefinition, formBase)
            expect(gen.next().done).to.be.true
          })
        })

        describe('loadEntityModel saga', () => {
          it('should load the entity model if not loaded', () => {
            const entityName = 'User'
            const entityModel = {}
            const loadedEntityModel = {
              name: 'User'
            }

            const gen = sagas.loadEntityModel(entityName, entityModel)
            expect(gen.next().value).to.eql(call(fetchModel, entityName))
            expect(gen.next(loadedEntityModel).value).to.eql(put(actions.setEntityModel(loadedEntityModel)))

            expect(gen.next().done).to.be.true
          })

          it('should not load the entity model if already loaded', () => {
            const entityName = 'User'
            const entityModel = {
              name: 'User'
            }

            const gen = sagas.loadEntityModel(entityName, entityModel)
            expect(gen.next().done).to.be.true
          })
        })
      })
    })
  })
})
