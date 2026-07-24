import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Self Introduction — James Lufz",
};

export default function SelfIntroductionPage() {
    return (
        <main className="fixed inset-0 h-screen w-screen bg-zinc-950">
            <iframe
                src="https://drive.google.com/file/d/1wC8zmn21OFS8FsReoVv8rXB9nY6UwkS1/preview"
                title="Self Introduction — James Lufz"
                allow="autoplay"
                allowFullScreen
                className="h-full w-full border-0"
            />
        </main>
    );
}
