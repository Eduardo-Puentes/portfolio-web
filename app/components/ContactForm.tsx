'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: integrate with Formspree or similar
    setSubmitted(true)
  }

  return (
    <section className="bg-white dark:bg-gray-900" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        {submitted ? (
          <p className="text-center text-xl font-medium text-gray-700 dark:text-gray-300">
            Thanks, <span className="font-semibold">{name}</span>! I’ll get back to you soon.
          </p>
        ) : (
          <>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                             focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Leave a comment..."
                  required
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm
                             border border-gray-300 focus:ring-primary-500 focus:border-primary-500
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                             dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg
                           bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none
                           focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700
                           dark:focus:ring-primary-800"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  )
}