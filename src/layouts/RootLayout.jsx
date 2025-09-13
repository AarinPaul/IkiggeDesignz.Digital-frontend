import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import QuoteModal from "../components/QuoteModal";

export default function RootLayout() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onQuoteClick={() => setModalOpen(true)} />   {/* 👈 pass handler */}
      <main>
        <Outlet />
      </main>
      <Footer />

      {/* Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
