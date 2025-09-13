import React from 'react'

export default function Contact() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16 pt-32">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-gray-600 mb-8">Tell us about your project. We’ll get back to you shortly.</p>
        {/* Simple placeholder form */}
        <form className="grid gap-4 max-w-xl">
          <input className="border rounded p-3" placeholder="Your Name" />
          <input className="border rounded p-3" placeholder="Email" type="email" />
          <textarea className="border rounded p-3" placeholder="Message" rows="5" />
          <button
            type="submit"
            className="bg-amber-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-900 transition"
          >
            Send
          </button>
        </form>
      </section>
    </>
  )
}
