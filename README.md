# Ajay's T3 Stack

## 🚀 Tech Stack
### 💅 Frontend
- [Next.js](https://nextjs.org/) 15.0 - React framework with App Router
- [React](https://react.dev/) 18.3 - UI library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons
- [Geist](https://geist-font.vercel.app/) - Modern sans-serif typeface

### 🛡️ Backend & API
- [tRPC](https://trpc.io/) 11.0 - End-to-end typesafe API
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Supabase](https://supabase.com/) - Database hosting and realtime features

### 🔑 Authentication & State Management
- [Clerk](https://clerk.com/) - Authentication and user management
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [TanStack Query](https://tanstack.com/query/latest) - Server state management

### 🛠️ Development Tools
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Biome](https://biomejs.dev/) - Linting and formatting
- [Zod](https://zod.dev/) - Schema validation
- [T3 Env](https://env.t3.gg/) - Environment variable validation

### 📦 Deployment & Infrastructure
- [Vercel](https://vercel.com/) - Deployment platform
- [Supabase](https://supabase.com/) - Database infrastructure

## Repository Structure


```mermaid
graph TD
    %% Main Repository Structure
    Root["CPQ Repository"] --> SRC["src/"]
    Root --> Public["public/"]
    Root --> Supabase["supabase/"]
    Root --> Config["Configuration Files"]
    
    %% Source Code Structure
    SRC --> App["app/"]
    SRC --> Components["components/"]
    SRC --> Server["server/"]
    SRC --> TRPC["trpc/"]
    SRC --> Lib["lib/"]
    SRC --> Hooks["hooks/"]
    SRC --> Store["store/"]
    SRC --> Styles["styles/"]
    SRC --> Middleware["middleware.ts"]
    SRC --> Env["env.js"]
    
    %% App Directory Structure
    App --> Layout["layout.tsx"]
    App --> Page["page.tsx"]
    App --> Application["(application)/"]
    App --> Auth["(auth)/"]
    App --> API["api/"]
    App --> Common["_common/"]
    
    %% Server Structure
    Server --> DB["db/"]
    Server --> ServerAPI["api/"]
    
    %% Database Structure
    DB --> Schema["schema.ts"]
    DB --> DBIndex["index.ts"]
    
    %% Components Structure
    Components --> UI["ui/"]
    Components --> Themes["themes.tsx"]
    
    %% TRPC Structure
    TRPC --> QueryClient["query-client.ts"]
    TRPC --> ServerTS["server.ts"]
    TRPC --> ReactTSX["react.tsx"]
    
    %% Configuration Files
    Config --> PackageJSON["package.json"]
    Config --> NextConfig["next.config.js"]
    Config --> TailwindConfig["tailwind.config.ts"]
    Config --> DrizzleConfig["drizzle.config.ts"]
    Config --> TSConfig["tsconfig.json"]
    Config --> BiomeJSON["biome.json"]
    Config --> EnvFiles[".env files"]
   
   ```
