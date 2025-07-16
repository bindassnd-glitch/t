import BlogLayout from "./BlogLayout";

export default function Blog() {
    return (
        <BlogLayout>
            <article>
                <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog</h1>
                <p className="text-gray-700 leading-relaxed">
                    This is a sample blog post layout using Tailwind CSS and Next.js. It&apos;s fully responsive and works great on all devices. You can customize this to display your blog posts dynamically.
                </p>
                <p className="mt-4 text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci veritatis voluptates eveniet minima!
                </p>
            </article>
        </BlogLayout>
    );
}