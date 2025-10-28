import React, { useState } from "react";
import { FiFile } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Career = () => {
     const [fileName, setFileName] = useState("No file chosen");
     const [formData, setFormData] = useState({
          fullName: "",
          phone: "",
          email: "",
          experience: "",
          applyFor: "",
          message: "",
          file: null,
     });

     // --- THIS IS THE UPDATED FUNCTION ---
     const handleChange = (e) => {
          const { name, value, files } = e.target;

          if (name === "file") {
               setFormData({ ...formData, file: files[0] });
               setFileName(files[0]?.name || "No file chosen");
          } else {
               // Validation Logic
               let processedValue = value;

               switch (name) {
                    case "fullName":
                         // Remove any characters that are digits (0-9)
                         processedValue = value.replace(/\d/g, "");
                         break;
                    case "phone":
                         // Remove any characters that are NOT digits
                         processedValue = value.replace(/\D/g, "");
                         break;
                    case "email":
                         // Remove any whitespace (spaces)
                         processedValue = value.replace(/\s/g, "");
                         break;
                    default:
                         // No processing for other fields
                         processedValue = value;
               }

               setFormData({ ...formData, [name]: processedValue });
          }
     };
     // -------------------------------------

     const handleSubmit = (e) => {
          e.preventDefault();

          const templateParams = {
               full_name: formData.fullName,
               phone_number: formData.phone,
               email_address: formData.email,
               experience: formData.experience,
               apply_for: formData.applyFor,
               message: formData.message,
          };

          emailjs
               .send(
                    "service_2hwslfh",
                    "template_m6xxq5i",
                    templateParams,
                    "2k-i_9TIaV2I6ao-M"
               )
               .then(
                    () => {
                         toast.success(
                              "✔ Form submitted successfully! We will contact you soon.",
                              {
                                   position: "top-right",
                                   autoClose: 5000,
                                   hideProgressBar: false,
                                   closeOnClick: true,
                                   pauseOnHover: true,
                                   draggable: true,
                                   progress: undefined,
                                   style: {
                                        backgroundColor: "#16a34a", // bright green
                                        color: "#fff",
                                        borderRadius: "10px",
                                        fontWeight: "bold",
                                        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                   },
                              }
                         );
                         setFormData({
                              fullName: "",
                              phone: "",
                              email: "",
                              experience: "",
                              applyFor: "",
                              message: "",
                              file: null,
                         });
                         setFileName("No file chosen");
                    },
                    (err) => {
                         toast.error("❌ Something went wrong. Please try again.", {
                              position: "top-right",
                              autoClose: 5000,
                              style: {
                                   backgroundColor: "#dc2626", // red
                                   color: "#fff",
                                   borderRadius: "10px",
                                   fontWeight: "bold",
                              },
                         });
                         console.error(err);
                    }
               );
     };

     return (
          <div>
               {/* Banner Section */}
               <div
                    className="relative bg-cover bg-center bg-no-repeat py-40 text-center text-white"
                    style={{
                         backgroundImage:
                              "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                    }}
               >
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="relative z-10">
                         <h1 className="text-8xl font-bold">Career</h1>
                         <p className="mt-6 text-2xl max-w-4xl mx-auto">
                              Build your future with us. Explore opportunities and grow your career.
                         </p>
                    </div>
               </div>

               {/* Form Section */}
               <div className="max-w-4xl mx-auto py-16 px-6">
                    <form
                         className="space-y-6 bg-white shadow-lg p-8 rounded-lg"
                         onSubmit={handleSubmit}
                    >
                         {/* Full Name */}
                         <div>
                              <label className="block font-medium mb-1">Full Name *</label>
                              <input
                                   type="text"
                                   name="fullName"
                                   value={formData.fullName}
                                   onChange={handleChange}
                                   placeholder="Full Name"
                                   required
                                   className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                         </div>

                         {/* Phone + Email */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                   <label className="block font-medium mb-1">Phone Number *</label>
                                   <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Number"
                                        maxLength="10"
                                        required
                                        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   />
                              </div>
                              <div>
                                   <label className="block font-medium mb-1">Email Address *</label>
                                   <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="abc123@gmail.com"
                                        required
                                        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   />
                              </div>
                         </div>

                         {/* Dropdowns */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                   <label className="block font-medium mb-1">Experience *</label>
                                   <select
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   >
                                        <option value="">Experience</option>
                                        <option>Fresher</option>
                                        <option>1-2 Years</option>
                                        <option>3+ Years</option>
                                   </select>
                              </div>
                              <div>
                                   <label className="block font-medium mb-1">Apply Now *</label>
                                   <select
                                        name="applyFor"
                                        value={formData.applyFor}
                                        onChange={handleChange}
                                        required
                                        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                   >
                                        <option value="">Applying For</option>
                                        <option>Sales Manager</option>
                                        <option>Project Manager</option>
                                        <option>Interior Designer</option>
                                        <option>Draftsman</option>
                                        <option>Pre-Sales</option>
                                        <option>3D Visualizer</option>
                                   </select>
                              </div>
                         </div>

                         {/* File Upload */}
                         <div>
                              <label className="block font-medium mb-1">Choose File *</label>
                              <div className="relative">
                                   <input
                                        type="file"
                                        name="file"
                                        onChange={handleChange}
                                        required
                                        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-0 absolute z-10 cursor-pointer"
                                   />
                                   <div className="flex items-center justify-between border p-3 rounded bg-white">
                                        <div className="flex items-center gap-2">
                                             <FiFile className="text-green-400 text-lg" />
                                             <span className="text-gray-700">{fileName}</span>
                                        </div>
                                        <span className="text-blue-600 font-medium">Browse</span>
                                   </div>
                              </div>
                         </div>

                         {/* Message */}
                         <div>
                              <label className="block font-medium mb-1">Message *</label>
                              <textarea
                                   name="message"
                                   value={formData.message}
                                   onChange={handleChange}
                                   placeholder="Enter your message..."
                                   required
                                   className="w-full border p-3 rounded h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              ></textarea>
                         </div>

                         {/* Submit Button */}
                         <button
                              type="submit"
                              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
                         >
                              Send Message
                         </button>
                    </form>
               </div>

               {/* Toast Container */}
               <ToastContainer />
          </div>
     );
};

export default Career;