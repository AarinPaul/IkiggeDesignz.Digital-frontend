import React from "react";
import OurFactory from "../components/OurFactory"; // ✅ Import the OurFactory component

export default function Services() {
  return (
    <div className="pt-32">
      <OurFactory /> {/* ✅ Only showing Our Factory */}
    </div>
  );
}
