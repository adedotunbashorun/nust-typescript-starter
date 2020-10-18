import { Middleware } from '@nuxt/types'

const myMiddleware: Middleware = (context) => {
  if (context.store.state.auth.loggedIn) {
    return context.redirect('/admin/dashboard')
  }
}

export default myMiddleware
