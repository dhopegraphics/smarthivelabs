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



export type BlogPostClientPageProps = {
  params: {
    slug: string;
  };
  post?: Post;
};

export default function BlogPostClientPage({ post }: BlogPostClientPageProps) {
  if (!post) {
    return (
      <div className="py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-8">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground leading-tight">{post.title}</h1>
          <div className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center space-x-4">
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
          className="prose prose-lg dark:prose-invert max-w-none text-foreground 
                     prose-headings:text-foreground prose-a:text-primary hover:prose-a:underline 
                     prose-strong:text-foreground prose-code:bg-neutral-100 prose-code:dark:bg-neutral-800 prose-code:p-1 prose-code:rounded-sm
                     prose-blockquote:border-l-primary prose-blockquote:text-neutral-600 prose-blockquote:dark:text-neutral-400"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <h4 className="text-sm font-semibold mb-2 text-neutral-600 dark:text-neutral-400">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-neutral-200 dark:bg-neutral-700 text-xs font-medium text-neutral-700 dark:text-neutral-300 px-3 py-1 rounded-full"
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
