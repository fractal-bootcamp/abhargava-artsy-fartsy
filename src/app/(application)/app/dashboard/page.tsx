import { api } from '~/trpc/server'

export default async function DashboardPage() {
  const { greeting } = await api.identity.verifyUser({ text: 'Hello' })

  return (
    <div className="space-y-6 retro-terminal p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold retro-terminal-accent">
          TERMINAL ACCESS v1.0
        </h1>
        <div className="text-sm opacity-70">{new Date().toLocaleString()}</div>
      </div>

      <div className="matrix-border p-4 rounded">
        <h2 className="text-xl mb-4 retro-terminal-accent">SYSTEM STATUS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="retro-terminal-border p-3 rounded">
            <div className="text-sm opacity-70">USER</div>
            <div>{greeting}</div>
          </div>
          <div className="retro-terminal-border p-3 rounded">
            <div className="text-sm opacity-70">ACCESS LEVEL</div>
            <div>ADMIN</div>
          </div>
          <div className="retro-terminal-border p-3 rounded">
            <div className="text-sm opacity-70">MEMORY</div>
            <div>512MB ALLOCATED</div>
          </div>
          <div className="retro-terminal-border p-3 rounded">
            <div className="text-sm opacity-70">STORAGE</div>
            <div>1024MB AVAILABLE</div>
          </div>
        </div>
      </div>
    </div>
  )
}
