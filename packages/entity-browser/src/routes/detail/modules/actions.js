export const SET_FORM_DEFINITION = 'detailView/SET_FORM_DEFINITION'
export const LOAD_DETAIL_VIEW = 'detailView/LOAD_DETAIL_VIEW'
export const SET_ENTITY = 'detailView/SET_ENTITY'
export const SUBMIT_FORM = 'detailView/SUBMIT_FORM'
export const SET_LAST_SAVE = 'detailView/SET_LAST_SAVE'
export const SET_ENTITY_MODEL = 'root/SET_ENTITY_MODEL'
export const UNLOAD_DETAIL_VIEW = 'root/UNLOAD_DETAIL_VIEW'

export const setFormDefinition = formDefinition => ({
  type: SET_FORM_DEFINITION,
  payload: {
    formDefinition
  }
})

export const loadDetailView = (modelPaths, entityId) => ({
  type: LOAD_DETAIL_VIEW,
  payload: {
    modelPaths,
    entityId
  }
})

export const setEntity = entity => ({
  type: SET_ENTITY,
  payload: {
    entity
  }
})

export const submitForm = () => ({
  type: SUBMIT_FORM
})

export const setLastSave = (lastSave = Date.now()) => ({
  type: SET_LAST_SAVE,
  payload: {
    lastSave
  }
})

export const setEntityModel = entityModel => ({
  type: SET_ENTITY_MODEL,
  payload: {
    entityModel
  }
})

export const unloadDetailView = () => ({
  type: UNLOAD_DETAIL_VIEW
})
