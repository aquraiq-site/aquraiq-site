export default function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8 md:p-12">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
          Create Your Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Join AquarIQ and explore AI-powered water intelligence
        </p>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Membership Type */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Select Membership Type
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Company</option>
              <option>Individual</option>
            </select>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter company name"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter country"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Choose a username"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          {/* Register Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold rounded-lg px-4 py-3 hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
