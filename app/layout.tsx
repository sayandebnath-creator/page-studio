import StoreProvider from "@/store/provider"
import "./globals.css"

export const metadata = {
  title: "Page Studio",
  description:
    "Schema-driven landing page builder",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}