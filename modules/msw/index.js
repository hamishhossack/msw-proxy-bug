import fs from 'fs'
import path from 'path'
import { server } from './msw/server'

function mocksModule() {
  this.nuxt.hook('listen', async (nuxt) => {
    console.log('🚦 Activated mocks')
    server.listen()
  })

  this.nuxt.hook('close', async (nuxt) => {
    console.log('🚦 Deactivating mocks')
    server.close()
  })

  /**
   * Create the service worker at build time
   */
  this.nuxt.hook('builder:prepared', () => {
    const sw = fs.readFileSync(
      path.resolve(__dirname, './msw/mockServiceWorker.js')
    )

    fs.writeFileSync(
      path.resolve(__dirname, '../..', 'static/mockServiceWorker.js'),
      sw
    )
  })

  // Add plugin for the browser to register mocks
  // this.addPlugin({
  //   fileName: 'msw.client.js',
  //   src: path.resolve(__dirname, 'plugin.js'),
  //   ssr: false,
  // })
}

export default mocksModule
