'use client'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="animate-fadeIn">
      {children}
    </main>
  )
} 