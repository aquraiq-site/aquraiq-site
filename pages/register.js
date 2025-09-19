import { useState } from "react";
import { sendEmail } from "../lib/resend"; // Import the Resend helper

export default function Register() {
  const [formData, setFormData] = useState({
    membershipType: "Water Company",
    companyName: "",
    fullName: "",
    email: "",
    country: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send welcome email to the user
      await sendEmail({
        to: formData.email,
        subject: "Welcome to AquraIQ 🎉",
        html: `<p>Hello ${formData.fullName},</p>
               <p>Thanks for registering with <b>AquraIQ</b>. Your account has been created successfully.</p>
               <p>We will keep you updated on new features and opportunities.</p>`
      });

      // Send notification email to the admin
      await sendEmail({
        to: "info.aquintel@gmail.com", // Replace with your admin email
        subject: "New Registration on AquraIQ",
        html: `<p>A new member just registered:</p>
               <ul>
                 <li><b>Name:</b> ${formData.fullName}</li>
                 <li><b>Email:</b> ${formData.email}</li>
                 <li><b>Company:</b> ${formData.companyName}</li>
                 <li><b>Country:</b> ${formData.country}</li>
                 <li><b>Username:</b> ${formData.username}</li>
               </ul>`
      });

      alert("Registration successful! A confirmation email has been sent.");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <label className="block mb-2 font-medium">Membership Type</label>
        <select
          name="membershipType"
          value={formData.membershipType}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
        >
          <option>Water Company</option>
          <option>AI Company</option>
          <option>Research Institute</option>
        </select>

        <label className="block mb-2 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter company name"
        />

        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter full name"
        />

        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter email"
        />

        <label className="block mb-2 font-medium">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Enter country"
        />

        <label className="block mb-2 font-medium">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded-lg"
          placeholder="Choose a username"
        />

        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 mb-6 border rounded-lg"
          placeholder="Enter password"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
