import React from 'react'
import {combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {StoreFactory, ExternalEvents, Intl} from 'tocco-util'
import {addLocaleData} from 'react-intl'
import {IntlProvider, intlReducer} from 'react-intl-redux'
import {LoadMask} from 'tocco-ui'

import LoginContainer from './containers/LoginContainer'
import PasswordUpdateDialog from './containers/PasswordUpdateDialogContainer'
import passwordUpdateReducers from './modules/passwordUpdate/reducers'
import loginReducers, {sagas} from './modules/reducers'

import {setUsername} from './modules/login/actions'
import * as passwordUpdate from './modules/passwordUpdate/dialog/actions'

import de from 'react-intl/locale-data/de'
import en from 'react-intl/locale-data/en'
import fr from 'react-intl/locale-data/fr'
import it from 'react-intl/locale-data/it'

export const loginFactory = (id, input, externalEvents) => {
  var showTitle = input ? input.showTitle : false

  var content = <LoginContainer showTitle={showTitle}/>
  var dispatches = [
    passwordUpdate.setShowOldPasswordField(false),
    passwordUpdate.setForcedUpdate(true),
    passwordUpdate.setStandalone(false)
  ]

  return factory(content, 'login', loginReducers, id, input, externalEvents, dispatches)
}

export const passwordUpdateFactory = (id, input, externalEvents) => {
  var showTitle = input ? input.showTitle : false

  var content = <PasswordUpdateDialog showTitle={showTitle}/>

  var dispatches = [
    passwordUpdate.setUsername(input.username)
  ]

  if (input.showOldPasswordField !== undefined) {
    dispatches.push(passwordUpdate.setShowOldPasswordField(input.showOldPasswordField))
  }

  var reducers = {passwordUpdate: combineReducers(passwordUpdateReducers), intl: intlReducer}
  return factory(content, 'login.passwordUpdate', reducers, id, input, externalEvents, dispatches)
}

const factory = (content, resourcePrefix, reducers, id, input, externalEvents, dispatches) => {
  try {
    var initialState = window.__INITIAL_STATE__ ? window.__INITIAL_STATE__ : {}

    if (input) {
      initialState.input = input
    }

    if (externalEvents) ExternalEvents.registerEvents(externalEvents)
    const store = StoreFactory.createStore(initialState, reducers, sagas)

    if (module.hot) {
      module.hot.accept('./modules/reducers', () => {
        let reducers = require('./modules/reducers').default
        StoreFactory.hotReloadReducers(store, reducers)
      })
    }

    addLocaleData([...de, ...en, ...fr, ...it])
    const locale = input ? input.locale : null
    const initIntlPromise = Intl.initIntl(store, resourcePrefix, locale)

    if (input && input.username) {
      store.dispatch(setUsername(input.username))
    }

    dispatches.forEach(f => {
      store.dispatch(f)
    })

    const App = () => (
      <Provider store={store}>
        <LoadMask promises={[initIntlPromise]}>
          <IntlProvider>
            {content}
          </IntlProvider>
        </LoadMask>
      </Provider>
    )

    return {
      renderComponent: App,
      methods: {
        setLocale: locale => Intl.setLocale(store, resourcePrefix, locale)
      }
    }
  } catch (e) {
    console.log('Error loading react application: ', e)
  }
}
