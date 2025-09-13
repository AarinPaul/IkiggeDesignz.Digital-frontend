import React from 'react'
import HowWeWork from '../components/HowWeWork'
import OurFactory from '../components/OurFactory'

export default function About() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 py-16 pt-32">
        <h1 className="text-4xl font-bold mb-6">About THE DESIGN HOUSE</h1>
        <p className="text-gray-600">
          We craft spaces with a blend of aesthetics and function.
        </p>
      </section>
      <HowWeWork />
      <OurFactory />
    </>
  )
}
