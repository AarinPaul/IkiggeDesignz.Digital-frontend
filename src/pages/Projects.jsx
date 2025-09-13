import React from 'react'
import SpacesWeShaped from '../components/SpacesWeShaped'
import CommercialClients from '../components/CommercialClients'

export default function Projects() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 pt-32 pb-4">
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>
      <SpacesWeShaped />
      <CommercialClients />
    </>
  )
}

