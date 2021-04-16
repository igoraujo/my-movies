import { useEffect, useState } from "react";
import { MovieService } from "./api/MoviesService";
import { Header } from "./components/Header"
import { MovieList } from "./components/MoviesList"
import { MoviesContainer } from "./styles/MoviesContainer";

function App() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MovieService.getMovies();

    setMovies(data.results)

    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  }, []);


  return (
    <div className="App">
      <Header/>

      <MoviesContainer>
        <MovieList movies={movies} />
      </MoviesContainer>

    </div>
  );
}

export default App;
