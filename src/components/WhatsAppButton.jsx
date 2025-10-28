import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9071211169?text=Hello IKIGGE DESIGNZ Team, I am interested to know more about your home interior design/renovation services.
Inquiry id :#5c785d" // replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600"
    >
      <FaWhatsapp size={28} color="white" />
    </a>
  )
}
