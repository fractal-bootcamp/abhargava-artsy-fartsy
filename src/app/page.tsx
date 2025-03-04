import { SignInButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { LogIn, Menu } from 'lucide-react'
import { redirect } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

export default async function Home() {
  const user = await currentUser()

  if (user) {
    redirect('/app/dashboard')
  }

  return (
    <div className="min-h-screen dark:bg-gray-950">
      <div className="flex items-center justify-end gap-4 w-full border-b p-4 dark:border-gray-800">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md p-1 transition-colors">
            <Menu className="h-6 w-6" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="rounded-none border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md"
            align="end"
            alignOffset={4}
          >
            <DropdownMenuItem className="focus:bg-gray-100 dark:focus:bg-gray-800 dark:text-gray-200">
              <SignInButton>
                <button
                  type="button"
                  className="w-full flex items-center justify-between text-gray-800 dark:text-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <LogIn className="h-6 w-6 mr-2" />
                    <p className="font-light text-lg">Login</p>
                  </div>
                </button>
              </SignInButton>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center gap-4 py-8 px-6 border w-full max-w-2xl mx-auto justify-center rounded-none dark:border-gray-800 dark:bg-gray-900">
          <h1 className="text-4xl font-bold text-center dark:text-white">
            Keepsake
          </h1>
          <p className="text-lg text-center dark:text-gray-300">
            If you want to store a memory when you're logged out, you're NGMI.
            🫵😂
          </p>
        </div>
      </div>
    </div>
  )
}
