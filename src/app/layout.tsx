import { Providers } from "@/providers"
import type { Metadata } from "next"
import { oswald } from "@/fonts/font"
import "./globals.css"

export const metadata: Metadata = {
	title: "Task 5",
	description: "Fake Data Generator",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="dark">
			<body
				className={`${oswald.className} antialiased h-screen pb-10 w-screen`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
