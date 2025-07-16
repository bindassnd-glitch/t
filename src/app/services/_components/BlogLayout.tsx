import { ReactNode } from 'react';

export default function BlogLayout({ children }:{children: ReactNode}) {

    return (
        <div className="min-h-screen pt-45 bg-gray-50 px-4 py-6">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
                {/* Main Blog Content */}
                <main className="w-full lg:w-2/3 bg-white p-6 rounded-xl shadow-md">
                    {children}
                </main>

                {/* Sidebar */}
                <aside className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Categories</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="hover:text-blue-500">Tech</a></li>
                        <li><a href="#" className="hover:text-blue-500">Design</a></li>
                        <li><a href="#" className="hover:text-blue-500">Marketing</a></li>
                        <li><a href="#" className="hover:text-blue-500">Tutorials</a></li>
                    </ul>

                    <hr className="my-6" />

                    <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
                    <ul className="space-y-3 text-gray-700">
                        <li><a href="#" className="hover:text-blue-500">How to Build a Blog in Next.js</a></li>
                        <li><a href="#" className="hover:text-blue-500">Tailwind vs Bootstrap</a></li>
                        <li><a href="#" className="hover:text-blue-500">Why SEO Still Matters in 2025</a></li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}