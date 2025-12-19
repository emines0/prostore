import type { Metadata } from "next"
import "@/assets/styles/globals.css"

export const metadata: Metadata = {
  title: "Prostore",
  description: "An e-commerce platform for all your needs",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-1 wrapper">{children}</main>
    </div>
  )
}
