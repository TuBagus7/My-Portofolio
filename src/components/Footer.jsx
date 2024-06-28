function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Company Logo"
              className="h-8 w-auto"
            />
            <span className="ml-3 text-xl">Your Company</span>
          </div>
          <div className="flex space-x-6">
            <a
              href="../src/App.jsx/"
              className="text-gray-400 hover:text-white"
            >
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Services
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Projects
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
