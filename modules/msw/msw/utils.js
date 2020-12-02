import consola from 'consola'

export const logUrl = (req) => consola.info('🦸🏻  Mocking url', req.url.pathname)
