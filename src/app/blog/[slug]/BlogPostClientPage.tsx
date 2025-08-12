"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

type Post = {
  slug: string
  title: string
  date: string
  author: string
  category: string
  imageUrl?: string
  tags: string[]
  content: string
}


export type BlogPostPageProps = {
  params: { slug: string };
};
export type BlogPostClientPageProps = {
  post?: Post;
};
export default function BlogPostClientPage({ post }: BlogPostClientPageProps) {
  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, the blog post you are looking for does not exist.
        </p>
        <Link href="/blog">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="py-12">
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-4 text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 leading-tight">{post.title}</h1>
          <div className="text-sm text-gray-500 flex items-center space-x-4">
            <span className="flex items-center">
              <CalendarDays className="mr-1.5 h-4 w-4" />{" "}
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center">
              <UserCircle className="mr-1.5 h-4 w-4" /> By {post.author}
            </span>
          </div>
          <div className="mt-3">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
          </div>
        </header>

        {post.imageUrl && (
          <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden shadow-lg mb-8">
            <Image src={post.imageUrl || "/placeholder.svg"} alt={post.title} layout="fill" objectFit="cover" />
          </div>
        )}

        {/* Apply Tailwind typography for rich text content if available, or style manually */}
        <div
          className="prose prose-lg max-w-none text-gray-900 
                     prose-headings:text-gray-900 prose-a:text-primary hover:prose-a:underline 
                     prose-strong:text-gray-900 prose-code:bg-neutral-100 prose-code:bg-gray-100 prose-code:p-1 prose-code:rounded-sm
                     prose-blockquote:border-l-primary prose-blockquote:text-neutral-600 prose-blockquote:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-semibold mb-2 text-gray-600">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-100 text-xs font-medium text-gray-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
