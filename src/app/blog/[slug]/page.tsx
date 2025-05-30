import { generateMetadata } from "./metadata"
import BlogPostClientPage from "./BlogPostClientPage"

// generateStaticParams for SSG (optional, but good for performance)
export async function generateStaticParams() {
  const posts = [
    // Same list as in getPostData or fetched from a source
    { slug: "getting-started-with-nextjs-15" },
    { slug: "animating-in-blender-tutorial" },
  ]
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export { generateMetadata }

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClientPage params={params} />
}
