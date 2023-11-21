
import React, { useEffect, useState } from "react";
import Header from "../Navbar/Navbar";
import Styles from "./Home.module.css";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Home() {
  let [movieList, setMoviesList] = useState([]);
  let [hoveredIndex, setHoveredIndex] = useState(null);

  const searchQuery = useSelector((state) => state.searchQuery);

  const filteredmovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!searchQuery) {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716`
          );
          setMoviesList(res.data.results);
        } else {
          const searchMoviesdata = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=cfe422613b250f702980a3bbf9e90716&maxResults=50`
          );
          setMoviesList(searchMoviesdata.data.results);
        }
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <>
        <Header/>
      <div className={Styles.maincontainer}>
        <div className={Styles.moviecontainer}>
          {filteredmovies.map((movie, i) => {
            return (
              <div
                className={Styles.moviewrapper}
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={Styles.flip}>
                  <img
                    className={Styles.imagecard}
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                  />
                  {hoveredIndex === i && (
                    <div className={`${Styles.details} ${Styles.moviewrapper}`}>
                      <h5>{movie.title}</h5>
                      <p>{movie.overview}</p>
                      <p>{movie.release_date}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;


{
  /* <div className={Styles.moviewrapper}>
   <img className={Styles.imagecard} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/NNxYkU70HPurnNCSiCjYAmacwm.jpg`}/>
           <p className={Styles.movietitle}>Mission: Impossible - Dead Reckoning Part One</p>
      </div> */
}

// https://api.themoviedb.org/3/search/movie?query=popular&api_key=2d2f378ef9ad88b8d50cef71092eb3c1

