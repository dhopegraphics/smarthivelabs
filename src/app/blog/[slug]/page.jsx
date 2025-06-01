import BlogPostClientPage from "./BlogPostClientPage"

// Dummy data for demonstration
const posts = [
  {
    slug: "getting-started-with-nextjs-15",
    title: "Getting Started with Next.js 15",
    date: "2024-06-01",
    author: "Jane Doe",
    category: "Next.js",
    imageUrl: "/images/nextjs-15.png",
    tags: ["nextjs", "react", "ssg"],
    content: "<p>Welcome to Next.js 15!</p>",
  },
  {
    slug: "animating-in-blender-tutorial",
    title: "Animating in Blender: Tutorial",
    date: "2024-05-20",
    author: "John Smith",
    category: "Blender",
    imageUrl: "/images/blender-tutorial.png",
    tags: ["blender", "animation", "3d"],
    content: "<p>Learn how to animate in Blender.</p>",
  },
]

function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug)
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }){
  const post = getPostBySlug(params.slug)
  return {
    title: post?.title || 'Post Not Found',
  }
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug)
  return <BlogPostClientPage post={post} />
}