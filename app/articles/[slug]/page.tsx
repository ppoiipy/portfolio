import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getAllArticles, getArticleSource } from "@/lib/articles"
import Link from "next/link"

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const articles = getAllArticles()
  const meta = articles.find((article) => article.slug === slug)
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
  }
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const articles = getAllArticles()
  const meta = articles.find((article) => article.slug === slug)

  if (!meta) {
    notFound()
  }

  const source = getArticleSource(slug)

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/articles" className="text-sm text-gray-500 hover:text-white">
        ← Articles
      </Link>
      <h1 className="mt-4 text-3xl font-semibold text-white">{meta.title}</h1>
      <p className="mt-2 text-sm text-gray-500">{meta.date}</p>

      <article className="prose prose-invert mt-10 max-w-none prose-headings:font-medium prose-a:text-white">
        <MDXRemote source={source} />
      </article>
    </main>
  )
}