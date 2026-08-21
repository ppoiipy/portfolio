import Link from "next/link";
import { getAllArticles } from "@/lib/articles";


export default function ArticlesPage() {
    const articles = getAllArticles();  
    
    return (
        <main className="mx-auto max-w-3xl px-6 py-20">
            <h1 className="text-2x1 font-semibold text-white">Articles</h1>
            <p className="mt-2 text-gray-400">Real decisions from building this site, written down as they happen.</p>

            <section className="mt-10 space-y-6">
                {articles.map((article) => (
                    <Link key={article.slug} href={`/articles/${article.slug}`} className="block rounded-lg border border-gray-800 p-6 transition-colors hover:border-gray-600">
                    <h2 className="text-lg font-medium text-white">
                        {article.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">{article.date}</p>
                    <p className="mt-2 text-gray-400">{article.description}</p>
                    </Link>
                )
                )}

                <div className="rounded-lg border border-dashed border-gray-800 p-6 text-centertext-sm text-gray-500">
                    More articles land here as real decisions happen - not on a schedule, just as they're worth writing down.
                </div>
            </section>
        </main>
    );
}
