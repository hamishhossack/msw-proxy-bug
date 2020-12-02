import { rest } from 'msw'
import { logUrl } from '../utils'

export default [
  rest.get('**/guests/invites/:inviteId', (...args) => {
    const [req, res, ctx] = args
    const { inviteId } = req.params

    logUrl(req)

    if (!inviteId) {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Internal Server Error' })
      )
    }

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          id: inviteId,
          type: 'invites',
          attributes: {
            guest_name: 'Sam',
            status: 'PENDING',
            inviter_name: 'SFFactory',
          },
          relationships: {
            guest_list: {
              data: {
                type: 'guest_lists',
                id: '7c168a84-0472-45ee-8c4e-11527bd6b443',
              },
            },
          },
        },
        included: [
          {
            id: '7c168a84-0472-45ee-8c4e-11527bd6b443',
            type: 'guest_lists',
            attributes: {
              name: 'partay',
              date: '2020-08-20T00:00:00Z',
              notes: 'Beers on you',
              max_guests: 1,
            },
            relationships: {
              venue: {
                data: {
                  type: 'venues',
                  id: 'SHD',
                },
              },
              invites: {
                data: [
                  {
                    type: 'invites',
                    id: inviteId,
                  },
                ],
              },
            },
          },
        ],
      })
    )
  }),
]
