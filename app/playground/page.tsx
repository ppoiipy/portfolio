import { Playground } from "@/components/features/Playground"

export default function PlaygroundPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-2xl font-semibold text-white">Playground</h1>
            <p className="mt-2 text-gray-400">
                Real components, live props. What you see is what you'd get.
            </p>

            <div className="mt-10">
                <Playground />
            </div>
        </main>
    )
}