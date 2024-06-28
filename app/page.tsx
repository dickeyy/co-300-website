import Footer from "@/components/footer";
import Options from "@/components/options";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <Options />
            <Footer />
        </main>
    );
}
