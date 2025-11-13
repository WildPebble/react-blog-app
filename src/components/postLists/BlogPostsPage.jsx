import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { Link } from 'react-router'

function BlogPostsPage() {
  return (
    <div>
    <Header/>
    <h1 className="text-2xl font-bold">BlogPosts Page</h1>
    <div className="h-screen flex flex-col text-start gap-y-2 px-2 text-2xl">
    <Link to="/posts/1">Post #1</Link>
    <Link to="/posts/2">Post #2</Link>
    <Link to="/posts/3">Post #3</Link>
    </div>
    <Footer/>
    </div>
  )
}

export default BlogPostsPage