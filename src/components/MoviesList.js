import { MovieItem } from "./MovieItem";

export const MovieList = ({ movies }) => (
    <section>
        <ul>
            { movies.map(m => <MovieItem id={ m.id } title={ m.title } />) }
            {/* { movies.map(m => <MovieItem { ...m } />) } */}
            {/* { movies.map(m => <MovieItem movie={ m } />) } */}
        </ul>
    </section>
);