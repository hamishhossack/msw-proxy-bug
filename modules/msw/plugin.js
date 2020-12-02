import { setupWorker } from 'msw'
import handlers from '~/modules/mocks/msw/handlers'

// This configures a Service Worker with the given request handlers.
const worker = setupWorker(...handlers)

const mocksPlugin = () => {
  console.log('🚦 Activated mocks')
  worker.start()
}

export default mocksPlugin
