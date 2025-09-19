export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Register</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Membership Type</label>
            <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400">
              <option>Water Company</option>
              <option>Researcher</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Company Name</label>
            <input type="text" placeholder="Enter company name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input type="text" placeholder="Enter full name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" placeholder="Enter email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Country</label>
            <input type="text" placeholder="Enter country" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Username</label>
            <input type="text" placeholder="Choose a username" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"/>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" placeholder="Enter password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"/>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
