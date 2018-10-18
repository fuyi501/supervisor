import app from './app.ui'

let options = {
  app: app
}

ui.start(options)

ui.preloadDialogs([
  require('#/pages/userCenter/login/loginInterface.ui')
])

