const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold">Tentang Kami</h3>
            <p className="text-sm mt-2">
              film yang tersedia di platform ini di ambil dari API TMDB.
            </p>
          </div>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold">Link Cepat</h3>
            <ul className="text-sm mt-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Film Populer
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
            <h3 className="text-xl font-semibold">Ikuti Kami</h3>
            <ul className="text-sm mt-2 flex space-x-4 justify-center">
              <li>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100049951054333&mibextid=ZbWKwL" className="hover:underline">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/_febrinh/" className="hover:underline">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://github.com/febrinurhidayat" className="hover:underline">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Febri NH.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
