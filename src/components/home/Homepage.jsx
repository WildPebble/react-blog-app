import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import axios from 'axios';
import { Link } from 'react-router';
import { useUsername } from '../authWrapper/AuthContext';

function homePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = useUsername();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((e) => console.log("Error fetching posts:", e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {username ? `Welcome back, ${username}!` : 'Welcome to My Blog'}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing stories and insights from our community
          </p>
          <Link 
            to="/posts" 
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore All Posts
          </Link>
        </div>
      </section>

      {/* Featured Posts Section */}
      <main className="flex-1 max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Posts</h2>
          <p className="text-gray-600 text-lg">Check out our latest and most popular content</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
            <p className="ml-4 text-gray-600 text-lg">Loading amazing content...</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {posts.slice(0, 6).map((post) => (
                <Link 
                  key={post.id} 
                  to={`/posts/${post.id}`}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-green-200 group"
                >
                  <h3 className="text-xl font-semibold text-green-700 mb-3 group-hover:text-green-800 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.body}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Post #{post.id}</span>
                    <span className="text-green-600 font-medium group-hover:text-green-700">Read more →</span>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/posts" 
                className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
              >
                View All Posts
              </Link>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  )
}

export default homePage