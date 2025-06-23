import "./globals.css"
import { Inter } from "next/font/google"
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Clerk App",
  description: "Authentication with Clerk",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <header style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
