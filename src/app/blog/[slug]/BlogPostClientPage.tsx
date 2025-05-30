"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, UserCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Placeholder function to get post data - replace with actual data fetching
async function getPostData(slug: string) {
  // This is a mock. In a real app, you'd fetch from a CMS, database, or markdown files.
  const posts = [
    {
      slug: "getting-started-with-nextjs-15",
      title: "Getting Started with Next.js 15: A Beginner's Guide",
      date: "2025-05-30",
      author: "Dhope Graphics",
      category: "Web Development",
      imageUrl: "/placeholder.svg?width=800&height=450",
      tags: ["Next.js", "React", "Tutorial", "Beginner"],
      content: `
        <p>Next.js 15 marks another significant step forward for the popular React framework. This guide will walk you through setting up your first Next.js 15 project and introduce some of its core concepts, including the App Router, Server Components, and new data fetching strategies.</p>
        <h2 class="text-2xl font-semibold my-4">Setting Up Your Project</h2>
        <p>To create a new Next.js 15 app, open your terminal and run:</p>
        <pre class="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md my-4 overflow-x-auto"><code>npx create-next-app@latest my-nextjs15-app --typescript</code></pre>
        <p>Follow the prompts to configure your project with TypeScript, ESLint, and Tailwind CSS if desired.</p>
        <h2 class="text-2xl font-semibold my-4">Understanding the App Router</h2>
        <p>The App Router, introduced in Next.js 13 and refined since, is the default routing system. It uses a file-system based routing approach within the <code>app</code> directory. Key files include:</p>
        <ul class="list-disc list-inside my-4 space-y-1">
          <li><code>layout.tsx</code>: Defines the UI that is shared across multiple pages.</li>
          <li><code>page.tsx</code>: The main UI for a specific route.</li>
          <li><code>loading.tsx</code>: A loading UI that's shown while content for a route segment is loading.</li>
          <li><code>error.tsx</code>: An error UI for handling errors within a route segment.</li>
        </ul>
        <h2 class="text-2xl font-semibold my-4">Server Components by Default</h2>
        <p>Components within the App Router are React Server Components by default. This means they render on the server, reducing the amount of JavaScript sent to the client and improving initial page load times. You can opt-in to Client Components using the <code>"use client"</code> directive at the top of a file.</p>
        <p>This is just a brief overview. Dive into the official Next.js documentation to explore all the powerful features of version 15!</p>
      `,
    },
    {
      slug: "animating-in-blender-tutorial",
      title: "Tutorial: Creating Your First Animation in Blender",
      date: "2025-05-15",
      author: "3D Team",
      category: "Graphics Design",
      imageUrl: "/placeholder.svg?width=800&height=450",
      tags: ["Blender", "3D Animation", "Tutorial", "Motion Graphics"],
      content: `
        <p>Blender is an incredibly versatile and free open-source 3D creation suite. If you're new to 3D animation, Blender can seem daunting, but this tutorial will guide you through creating a simple animation to get you started.</p>
        <h2 class="text-2xl font-semibold my-4">1. Setting Up Your Scene</h2>
        <p>Open Blender. You'll typically start with a default cube. Let's use this cube for our animation.</p>
        <ul class="list-disc list-inside my-4 space-y-1">
          <li>Familiarize yourself with the interface: 3D Viewport, Timeline, Outliner, Properties panel.</li>
        </ul>
        <h2 class="text-2xl font-semibold my-4">2. Understanding Keyframes</h2>
        <p>Animation in Blender is primarily done using keyframes. A keyframe records the properties of an object (like location, rotation, scale) at a specific point in time.</p>
        <ul class="list-disc list-inside my-4 space-y-1">
          <li>Select the cube.</li>
          <li>In the Timeline (usually at the bottom), make sure you're at frame 1.</li>
          <li>With the cube selected, press <code>I</code> (Insert Keyframe) in the 3D Viewport and choose 'Location' to set a keyframe for its current position.</li>
        </ul>
        <h2 class="text-2xl font-semibold my-4">3. Creating Movement</h2>
        <p>Now, let's move the cube and set another keyframe.</p>
        <ul class="list-disc list-inside my-4 space-y-1">
          <li>Drag the playhead in the Timeline to a later frame, e.g., frame 50.</li>
          <li>Move the cube to a new position (e.g., press <code>G</code> to grab, then <code>X</code> to move along the X-axis).</li>
          <li>Press <code>I</code> again and choose 'Location' to set a new keyframe at frame 50.</li>
        </ul>
        <h2 class="text-2xl font-semibold my-4">4. Playing Your Animation</h2>
        <p>You should now see yellow diamond markers on your timeline for the keyframes.</p>
        <ul class="list-disc list-inside my-4 space-y-1">
          <li>Press the Spacebar or the Play button in the Timeline to see your cube move between the two keyframed positions.</li>
          <li>Adjust the End frame in the Timeline (e.g., to 60) to set the duration of your animation playback.</li>
        </ul>
        <p>Congratulations! You've created your first simple animation in Blender. From here, you can explore adding rotation, scaling, more complex objects, and using the Graph Editor for finer control over your animation curves.</p>
      `,
    },
    // Add other posts here to match slugs
  ]
  const post = posts.find((p) => p.slug === slug)
  if (!post) {
    // Handle post not found, e.g., by returning a 404 or a specific object
    return null
  }
  return post
}

export default async function BlogPostClientPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug)

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
