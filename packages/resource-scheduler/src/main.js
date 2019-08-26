import React from 'react'
import PropTypes from 'prop-types'
import {appFactory, externalEvents} from 'tocco-app-extensions'

import reducers, {sagas} from './modules/reducers'
import ResourceSchedulerContainer from './containers/ResourceSchedulerContainer'

const packageName = 'resource-scheduler'

const initApp = (id, input, events, publicPath) => {
  const content = <ResourceSchedulerContainer/>

  const store = appFactory.createStore(reducers, sagas, input, packageName)
  externalEvents.addToStore(store, events)

  return appFactory.createApp(
    packageName,
    content,
    store,
    {
      input,
      events,
      actions: [],
      publicPath,
      textResourceModules: ['component', 'common', packageName]
    }
  )
}

(() => {
  if (__DEV__ && __PACKAGE_NAME__ === 'resource-scheduler') {
    const input = require('./dev/input.json')

    if (!__NO_MOCK__) {
      const fetchMock = require('fetch-mock')

      const setupFetchMocks = require('./dev/fetchMocks').default
      setupFetchMocks(packageName, fetchMock)
    }

    const app = initApp('dev', input)

    appFactory.renderApp(app.renderComponent())
  } else {
    appFactory.registerAppInRegistry(packageName, initApp)
  }
})()

export class ResourceSchedulerApp extends React.Component {
  constructor(props) {
    super(props)
    this.app = initApp('id', props)
  }

  render() {
    return this.app.renderComponent()
  }
}

ResourceSchedulerApp.propTypes = {
  locale: PropTypes.string,
  onEventClick: PropTypes.func
}
