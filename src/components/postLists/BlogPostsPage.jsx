import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router'
import axios from 'axios'

function BlogPostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((e) => console.log("Error:", e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">All Blog Posts</h1>
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-700"></div>
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                to={`/posts/${post.id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow border hover:border-green-200"
              >
                <h2 className="text-xl font-semibold text-green-700 mb-2 line-clamp-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-2">{post.body}</p>
                <span className="text-green-600 text-sm mt-2 inline-block">Read more →</span>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer/>
    </div>
  )
}

export default BlogPostsPage