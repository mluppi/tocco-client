import nice from '../nice'

/*
 * Short term caching is per browser tab. The short term cache is clear after login or business unit change
 * Long term cache is cleared if language or revision has changed
 */

const prefix = `tocco.cache`
const getKey = (type, id) => `${prefix}.${type}.${id}`

export const addShortTerm = (type, id, value) => add(type, id, value, sessionStorage)
export const addLongTerm = (type, id, value) => add(type, id, value, localStorage)

const add = (type, id, value, storage) => {
  if (__DEV__ || nice.getRunEnv() !== 'PRODUCTION') {
    return null
  }

  return storage.setItem(getKey(type, id), JSON.stringify(value))
}

export const getShortTerm = (type, id) => get(type, id, sessionStorage)
export const getLongTerm = (type, id) => get(type, id, localStorage)

const get = (type, id, storage) => {
  const cachedValue = storage.getItem(getKey(type, id))

  if (!cachedValue) {
    return undefined
  }

  return JSON.parse(cachedValue)
}

export const removeShortTerm = (type, id) => remove(type, id, sessionStorage)
export const removeLongTerm = (type, id) => remove(type, id, localStorage)
const remove = (type, id, storage) => storage.removeItem(getKey(type, id))

export const clearAll = () => {
  clearShortTerm()
  clearLongTerm()
}

export const clearShortTerm = () => clear(sessionStorage)
export const clearLongTerm = () => clear(localStorage)
const clear = storage => {
  const keys = Object.keys(storage)
  keys.filter(key => key.startsWith(prefix)).forEach(key => storage.removeItem(key))
}
