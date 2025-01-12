import "./App.css";
import Navbar from "./components/navbar";
import PopularMovies from "./components/main";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App relative mt-20">
      <Navbar />
      <PopularMovies />
      <Footer />
    </div>
  );
}

export default App;
