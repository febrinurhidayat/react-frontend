import { getMovies, searchMovie } from "../api";
import { useState, useEffect } from "react";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]); // Pindahkan ke dalam komponen
  const [selectedMovie, setSelectedMovie] = useState(null); // State untuk movie yang dipilih
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State untuk visibilitas popup
  const [query, setQuery] = useState(""); // State untuk input pencarian

  useEffect(() => {
    // Mengambil data film populer saat komponen pertama kali dimuat
    getMovies().then((result) => {
      setPopularMovies(result);
    });
  }, []); // Jalankan hanya sekali saat komponen pertama kali dimuat

  const handlePosterClick = (movie) => {
    setSelectedMovie(movie); // Simpan data movie yang dipilih
    setIsPopupVisible(true); // Tampilkan popup
  };

  const closePopup = () => {
    setSelectedMovie(null); // Hapus data movie yang dipilih
    setIsPopupVisible(false); // Sembunyikan popup
  };

  const search = async (q) => {
    setQuery(q); // Update query state
    if (q.length > 3) {
      // Hanya lakukan pencarian jika panjang query lebih dari 3 karakter
      const queryResult = await searchMovie(q);
      setPopularMovies(queryResult.results); // Update popularMovies dengan hasil pencarian
    } else if (q.length === 0) {
      getMovies().then((result) => setPopularMovies(result)); // Reset ke film populer saat query kosong
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center p-4 px-10 mb-0">
        <input
          type="text"
          placeholder="Cari film..."
          value={query} // Mengikat state query
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
          onChange={({ target }) => search(target.value)} // Menangani perubahan input
        />
      </div>
      <div className="flex flex-wrap">
        {popularMovies.map((movie, i) => (
          <div key={i} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                alt={movie.title}
                className="object-cover rounded-md mb-4 cursor-pointer"
                onClick={() => handlePosterClick(movie)}
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {movie.title}
                </h3>
                <p className="text-sm font-semibold mb-3">
                  Rating:{" "}
                  <span className="text-yellow-500">
                    {movie.vote_average}⭐
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupVisible && selectedMovie && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 lg:w-1/2 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closePopup}
            >
              ✖
            </button>
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {selectedMovie.title}
              </h3>
              <div className="flex items-center justify-center space-x-4 mb-2">
                <p className="text-sm text-gray-600">
                  {selectedMovie.release_date}
                </p>
                <p className="text-yellow-500 font-semibold text-sm">
                  Rating: {selectedMovie.vote_average}⭐
                </p>
              </div>
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}/${selectedMovie.poster_path}`}
                alt={selectedMovie.title}
                className="w-64 h-96 object-cover rounded-md mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-gray-700 text-sm mb-4">
                {selectedMovie.overview}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularMovies;
