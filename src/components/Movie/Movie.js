import React from "react";
import "./Movie.css";

const MovieRow = (props) => {
  return (
    <tr>
      <td className="rank-number">{props.rank}</td>
      <td className="movie-title">{props.title}</td>
      <td>{props.movieImg}</td>
      <td>{props.year}</td>
      <td>{props.gross}</td>
    </tr>
  );
};

export default MovieRow;
