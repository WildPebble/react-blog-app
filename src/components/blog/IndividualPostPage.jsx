import React from 'react'
import Header from '../common/Header'
import BlogPost from './BlogPost'
import Footer from '../common/Footer'

//rfce is shortcut to setup new jsx file
export default function IndividualPostPage() {
  return (
    <div>
      <Header />
      <BlogPost />
      <Footer />
    </div>
  )
}
