export const MEMBERSHIP_TIERS = {
  PUBLIC: 'PUBLIC',
  FRIENDS: 'FRIENDS',
  EVERY_HOUSE: 'EVERY_HOUSE',
  LOCAL_HOUSE: 'LOCAL_HOUSE',
  EVERY_PLUS_HOUSE: 'EVERY_PLUS_HOUSE',
  HOUSE: 'HOUSE',
}

const HOUSE_TIERS = [
  MEMBERSHIP_TIERS.HOUSE,
  MEMBERSHIP_TIERS.EVERY_HOUSE,
  MEMBERSHIP_TIERS.EVERY_PLUS_HOUSE,
  MEMBERSHIP_TIERS.LOCAL_HOUSE,
]

export const logUrl = (req) => console.info('🦸🏻  Mocking url', req.url.pathname)

export const onlyMembers = (...args) => {
  const [req, res, ctx] = args
  const { membership } = req.query

  if (!MEMBERSHIP_TIERS.includes(membership)) {
    res(ctx.status(403), ctx.json({ message: 'Authentication Error' }))
  }
}

export const onlyHouseMembers = (...args) => {
  const [req, res, ctx] = args
  const { membership } = req.url.search

  if (!HOUSE_TIERS.includes(membership)) {
    res(ctx.status(403), ctx.json({ message: 'Authentication Error' }))
  }
}
