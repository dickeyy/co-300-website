import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Averia_Serif_Libre as FontSerif } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans"
});

const fontSerif = FontSerif({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["400", "700"]
});

export const metadata = {
    title: "AI Ethics and Responsibility",
    description: "A would you rather game for ethics and responsibility in AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    "bg-background min-h-screen font-sans antialiased",
                    fontSans.variable,
                    fontSerif.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
