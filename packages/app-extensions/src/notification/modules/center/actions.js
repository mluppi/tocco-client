export const LOAD_NOTIFICATIONS = 'notification/LOAD_NOTIFICATIONS'
export const SET_NOTIFICATIONS = 'notification/SET_NOTIFICATION'
export const SET_MORE_NOTIFICATIONS_AVAILABLE = 'notification/SET_MORE_NOTIFICATIONS_AVAILABLE'
export const UPDATE_NOTIFICATION = 'notification/UPDATE_NOTIFICATION'
export const MARK_AS_READ = 'notification/MARK_AS_READ'

export const loadNotifications = (offset = 0) => ({
  type: LOAD_NOTIFICATIONS,
  payload: {
    offset
  }
})

export const setNotifications = notifications => ({
  type: SET_NOTIFICATIONS,
  payload: {
    notifications
  }
})

export const setMoreNotificationsAvailable = moreNotificationsAvailable => ({
  type: SET_MORE_NOTIFICATIONS_AVAILABLE,
  payload: {
    moreNotificationsAvailable
  }
})

export const updateNotification = notification => ({
  type: UPDATE_NOTIFICATION,
  payload: {
    notification
  }
})

export const markAsRead = notificationKey => ({
  type: MARK_AS_READ,
  payload: {
    notificationKey
  }
})
