import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex w-full items-center justify-between px-8 py-2">
            <Link
                href="https://kyle.so"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 font-serif text-sm hover:underline"
            >
                Kyle Dickey
            </Link>
            <Link
                href="https://github.com/dickeyy/co-300-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 font-serif text-sm hover:underline"
            >
                GitHub
            </Link>
        </footer>
    );
}
