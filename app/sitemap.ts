import { MetadataRoute } from "next"
import { getAllArticles } from "@/lib/articles"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://portfolio-pi-topaz-46.vercel.app"

  const staticRoutes = ["", "/projects", "/playground", "/articles", "/about"].map((route) => ({
    url: `${base}${route}`
  }))

  const articleRoutes = getAllArticles().map((a) => ({
    url: `${base}/articles/${a.slug}`
  }))

  const projectRoutes = [{ url: `${base}/projects/this-portfolio` }]

  return [
    ...staticRoutes,
    ...articleRoutes,
    ...projectRoutes
  ]
}