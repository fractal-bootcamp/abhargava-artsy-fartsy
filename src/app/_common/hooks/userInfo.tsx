'use client'

import { useOrganization, useUser } from '@clerk/nextjs'

export function userInformation() {
  const { user } = useUser()
  const { organization } = useOrganization()

  return { user, organization }
}
