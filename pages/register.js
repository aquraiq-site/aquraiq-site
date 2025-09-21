import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    companyType: '',
    companyName: '',
    fullName: '',
    email: '',
    country: '',
    username: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (data.success) {
      setMessage('✅ ثبت‌نام با موفقیت انجام شد');
    } else {
      setMessage(`❌ خطا: ${data.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register to <span className="text-blue-600">AquarIQ</span>
        </h2>

        {/* Company Type */}
        <label className="block mb-2 font-medium">Company Type</label>
        <select
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        >
          <option value="">Select type...</option>
          <option value="AI Company">AI Company</option>
          <option value="Water Company">Water Company</option>
          <option value="Individual">Individual</option>
        </select>

        {/* Company Name */}
        <label className="block mb-2 font-medium">Company Name</label>
        <input
          type="text"
          name="companyName"
          placeholder="e.g. ASU"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        />

        {/* Full Name */}
        <label className="block mb-2 font-medium">Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="e.g. Amin Mojiri"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        />

        {/* Email */}
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        />

        {/* Country */}
        <label className="block mb-2 font-medium">Country</label>
        <input
          type="text"
          name="country"
          placeholder="e.g. USA"
          value={formData.country}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        />

        {/* Username */}
        <label className="block mb-2 font-medium">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Choose a username"
          value={formData.username}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-md"
          required
        />

        {/* Password */}
        <label className="block mb-2 font-medium">Password</label>
        <input
          type="password"
          name="password"
          placeholder="********"
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-6 p-2 border rounded-md"
          required
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>

        {/* Message */}
        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
      </form>
    </div>
  );
}
