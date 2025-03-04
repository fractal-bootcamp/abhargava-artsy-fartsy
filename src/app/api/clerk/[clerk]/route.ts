// Uses this route to validate the user is logged in

import { auth } from '@clerk/nextjs/server'

export async function GET(request: Request) {
  const { userId } = await auth()

  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  return new Response('OK', { status: 200 })
}
