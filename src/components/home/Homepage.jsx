import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import BlogPost from '../blog/BlogPost'
import axios from 'axios';
import { Link } from 'react-router';

function homePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading]=useState(true);

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
    <div>
    <Header/>
    <h1 className=" font-bold">Home Page!</h1>
       {/* <BlogPost /> */}
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <ul className="space-y-4">
            {posts.slice(0, 9).map((post) => ( // 9 should be enough to display on the homepage
              <li key={post.id} className="p-5 rounded-xl shadow">
                <h1 className="text-xl font-semibold text-green-700">{post.title}</h1>
                <p className="text-gray-600 mt-2">
                  {post.body}
                </p>
              </li>
            ))}
          </ul>
        )}
    <Footer/>
</div>
  )
}

export default homePage