import React from 'react'

import InfoBoxHtmlFieldContent from './typeContent/InfoBoxHtmlFieldContent'
import InfoBoxSearchFilterContent from './typeContent/InfoBoxSearchFilterContent'

export default (type, id, content) => {
  if (map[type]) {
    return React.createElement(map[type], {id, content})
  }

  // eslint-disable-next-line no-console
  console.log('No Content mapper defined for type', type, id)
  return <div/>
}

export const map = {
  htmlfield: InfoBoxHtmlFieldContent,
  searchfilter: InfoBoxSearchFilterContent
}
