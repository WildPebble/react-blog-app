import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import IndividualPostPage from './components/blog/IndividualPostPage';
import { Routes, Route } from 'react-router';
import ContactPage from './contact/ContactPage';
import BlogPostsPage from './components/postLists/BlogPostsPage';
import Homepage from './components/home/Homepage';
import Login from './components/login/Login';
import { AuthProvider } from './components/authWrapper/AuthProvider';

//Group 11: Becca F., Matthew H., Laleen S.
function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
       <Route path ="/contact" element={<ContactPage/>} />
       <Route path ="/posts" element={<BlogPostsPage/>}/>
       <Route path ="/login" element={<Login/>}/>
       <Route path = "/posts/:post_id" element={<IndividualPostPage/>}/>
    </Routes>
    </AuthProvider>
    
  )
}

export default App
