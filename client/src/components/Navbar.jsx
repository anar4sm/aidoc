const Navbar = () => (
  <header className="w-full bg-gray-800 text-white p-4 flex items-center justify-between">
    <div className="flex items-center">
      <button className="mr-4 text-xl">☰</button>
      <span className="font-bold text-lg">ChatGPT Clone</span>
    </div>
    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded">
      Profile
    </button>
  </header>
);

export default Navbar;
