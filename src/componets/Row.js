import axios from "./axios";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import styled from "styled-components";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handelClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          console.log(urlParams);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <h2>{title}</h2>
      <Content>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => handelClick(movie)}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </Content>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </Container>
  );
}

const Container = styled.div`
  color: #ffffff;
  margin-left: 20px;
`;

const Content = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  img {
    max-height: 400px;
    object-fit: contain;
    margin-right: 10px;
    width: 350px;
    transition: transform 450ms;
    border: 1px solid whitesmoke;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;

    &:hover {
      opacity: 1;
      transform: scale(1.08);
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Row;
