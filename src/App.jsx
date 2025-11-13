import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IndividualPostPage from './components/blog/IndividualPostPage';
import { Routes, Route } from 'react-router';
import ContactPage from './contact/ContactPage';
import BlogPostsPage from './components/postLists/BlogPostsPage';
import Homepage from './components/home/Homepage';

//Group 11: Becca F., Matthew H., Laleen S.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
       <Route path ="/contact" element={<ContactPage/>} />
       <Route path ="/posts" element={<BlogPostsPage/>}/>
       <Route path = "/posts/:post_id" element={<IndividualPostPage/>}/>
    </Routes>
    
  )
}

export default App
