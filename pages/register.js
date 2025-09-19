// pages/register.js
export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form className="space-y-4">
          {/* Membership Type */}
          <div>
            <label className="block text-gray-700 mb-1">Membership Type</label>
            <select className="w-full border rounded-lg p-2">
              <option>Water Company</option>
              <option>AI Company</option>
            </select>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700 mb-1">Country</label>
            <input
              type="text"
              placeholder="Enter country"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* Submit */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
