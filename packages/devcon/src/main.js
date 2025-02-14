import {createBrowserHistory} from 'history'
import React from 'react'
import {errorLogging, appFactory, notification} from 'tocco-app-extensions'
import {route} from 'tocco-util'

const packageName = 'devcon'

const initApp = (id, input, events, publicPath) => {
  const store = appFactory.createStore(undefined, undefined, input, packageName)
  errorLogging.addToStore(store, true, ['console', 'remote', 'notification'])
  notification.addToStore(store, true)

  const history = createBrowserHistory({
    ...(input.baseRoute && {basename: input.baseRoute})
  })
  const routes = require('./routes/index').default(store, input)

  const content = <route.Router history={history} routes={routes} />

  return appFactory.createApp(packageName, content, store, {
    input,
    events,
    actions: [],
    publicPath,
    textResourceModules: ['component', 'common', packageName]
  })
}

;(() => {
  if (__PACKAGE_NAME__ === packageName) {
    appFactory.registerAppInRegistry(packageName, initApp)

    if (__DEV__) {
      const input = require('./dev/input.json')

      if (!__NO_MOCK__) {
        const fetchMock = require('fetch-mock').default
        fetchMock.config.overwriteRoutes = false
        const setupFetchMocks = require('./dev/fetchMocks').default
        setupFetchMocks(packageName, fetchMock)
        fetchMock.spy()
      }

      const app = initApp(packageName, input)

      appFactory.renderApp(app.component)
    }
  }
})()
