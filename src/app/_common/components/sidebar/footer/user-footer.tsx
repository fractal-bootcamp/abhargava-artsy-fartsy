'use client'

import { SignedIn, UserButton } from '@clerk/nextjs'
import { userInformation } from '~/app/_common/hooks/userInfo'
import { useSidebarStore } from '~/app/_common/stores/sidebar'

export function SidebarUserFooter() {
  const { user } = userInformation()
  const isCollapsed = useSidebarStore((state) => state.isCollapsed)

  return (
    <SignedIn>
      <button
        className="flex items-center place-content-center gap-3 hover:bg-gray-100 rounded-md transition-colors"
        onClick={() => {
          const userButtonElement = document.querySelector(
            '.cl-userButtonTrigger',
          )
          if (userButtonElement) {
            ;(userButtonElement as HTMLElement).click()
          }
        }}
      >
        <div className="flex items-center gap-3">
          <UserButton />
          {!isCollapsed && (
            <div className="flex flex-col items-start">
              <p className="text-xs font-medium dark:text-white">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Last Sign In:{' '}
                {user?.lastSignInAt
                  ? new Date(user.lastSignInAt).toLocaleDateString()
                  : 'No sign in date available'}
              </p>
            </div>
          )}
        </div>
      </button>
    </SignedIn>
  )
}
