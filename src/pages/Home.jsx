import React from 'react'
import Hero from '../components/Hero'
import SpacesWeShaped from '../components/SpacesWeShaped'
import CommercialClients from '../components/CommercialClients'
import HowWeWork from '../components/HowWeWork'
import OurFactory from '../components/OurFactory'
import ConnectWithUs from '../components/ConnectWithUs' 
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <>
      <Hero />
      <SpacesWeShaped />
      <CommercialClients />
      <HowWeWork />
      <OurFactory />
      <ConnectWithUs />
      <FAQ />
    </>
  )
}
