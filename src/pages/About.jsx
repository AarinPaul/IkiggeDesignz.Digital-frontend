import React from "react";

export default function About() {
  return (
    <section 
        className="max-w-6xl mx-auto px-4 
            pt-40 pb-16          /* INCREASED TOP PADDING TO pt-32 (8rem) for mobile */
            md:pt-32 md:pb-32    /* Top/Bottom Padding (8rem) on Desktop */
            flex flex-col md:flex-row items-center gap-10"
    >
      
      {/* Left Image - Height limited for better mobile display */}
      <div className="md:w-1/2 w-full max-h-96 md:max-h-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" // Replace with your image
          alt="Design House"
          className="rounded-xl shadow-lg w-full h-full object-cover"
        />
      </div>

      {/* Right Text */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-4xl font-bold mb-6 sub-he">About THE DESIGN HOUSE</h1>
        <p className="text-gray-700 mb-4">
          Welcome to Ikigge Designz, where creativity meets functionality in the world of interior design. Our studio, founded by a passionate duo of visionary designers, is inspired by the fusion of "ikigai"—the Japanese concept of finding purpose and joy in life—and "hygge," the Danish art of creating cozy, comfortable environments. 
        </p>
        <p className="text-gray-700 mb-4">
          Our founders, with backgrounds in architecture and art, have meticulously curated a team that shares their dedication to transforming spaces into personalized sanctuaries. 

        </p>
        <p className="text-gray-700">
          At Ikigge Designz, our team comprises skilled professionals who bring a diverse range of expertise, from innovative space planning to exquisite detailing and sustainable design practices. We pride ourselves on collaborating closely with our clients, understanding their unique needs, and crafting bespoke environments that inspire and uplift. Whether you're looking to revamp a cozy home or a dynamic commercial space, Ikigge Designz is committed to delivering unparalleled design solutions that echo your individuality and style. Join us on this creative journey, and let us help you discover the joy of living in a space that truly resonates with your essence.
        </p>
      </div>
    </section>
  );
}