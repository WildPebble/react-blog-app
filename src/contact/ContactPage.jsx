import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

function ContactPage() {
  const formClass = 'border border-gray-300 rouded p-2'; 
  return (
    <div >
    <Header/>
    <h1>ContactPage</h1>
    <form className="flex flex-col gap-5 h-screen">
      <input minLength={5} placeholder='Name' className={formClass}/>
      <input minLength={5} placeholder='Email' className={formClass}/>
      <textarea minLength={5} placeholder='Enter your message here' className={formClass}/>
      <button type="submit" className="ml-2 flex flex-col my-3 bg-green-700 px-6 py-2 text-xl rounded-2xl text-white">Submit</button>
    </form>
    <Footer/>
    </div>
  )
}

export default ContactPage