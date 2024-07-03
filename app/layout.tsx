import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Averia_Serif_Libre as FontSerif } from "next/font/google";

import { cn } from "@/lib/utils";
import { Metadata } from "next";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

const fontSerif = FontSerif({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["400", "700"]
});

export const metadata: Metadata = {
    title: "AI Ethics and Responsibility",
    description: "A would you rather game for ethics and responsibility in AI.",
    icons: {
        icon: "/logo.png"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    defer
                    data-domain="co-300.kyle.so"
                    src="https://analytics.kyle.so/js/script.js"
                ></script>
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    fontSans.variable,
                    fontSerif.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
