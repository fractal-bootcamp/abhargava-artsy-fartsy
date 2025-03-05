import { api } from '~/trpc/server'

export default async function DashboardPage() {
  const { greeting } = await api.identity.verifyUser({ text: 'Hello' })

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center"></div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard. This is a placeholder for the dashboard.</p>
    </div>
  )
}
