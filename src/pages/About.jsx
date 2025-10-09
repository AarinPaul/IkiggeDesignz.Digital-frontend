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
          At THE DESIGN HOUSE, we believe every space should tell a story. Our
          approach combines aesthetics, functionality, and personalization to
          craft interiors that feel both luxurious and comfortable.
        </p>
        <p className="text-gray-700 mb-4">
          From initial concept to final execution, we guide our clients through
          every step, ensuring a hassle-free experience while delivering
          exceptional results.
        </p>
        <p className="text-gray-700">
          Our team of expert designers and craftsmen work closely with you to
          transform your vision into a reality that truly reflects your style
          and lifestyle.
        </p>
      </div>
    </section>
  );
}