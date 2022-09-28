import Movie from "./components/Movie/Movie";
import "./App.css";
import avatar from "./images/avatar.webp";
import avengers from "./images/avengers-endgame.jpg";
import titanic from "./images/titanic.jpg";
import starwars from "./images/starwars.jpg";
import avengersInfinityWar from "./images/avengers-infinity-war.png";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <header>
        <h1>Top Five Highest-Grossing Films of All Time</h1>
      </header>
      {/* <figcaption>*Adjusted for inflation, as of June 2022</figcaption> */}
      <table>
        <caption>Adjusted for inflation, as of September 2022</caption>
        <thead>
          <tr>
            <th>Rank</th>
            <th className="title-cell">Title</th>
            <th>Image</th>
            <th>Year</th>
            <th>Worldwide Gross</th>
          </tr>
        </thead>
        <tbody>
          <Movie
            rank="1"
            title={
              <a
                href="https://en.wikipedia.org/wiki/Avatar_(2009_film)"
                target="_blank"
                rel="noreferrer"
                className="specialeffects"
              >
                Avatar
              </a>
            }
            movieImg={<img src={avatar} className="movie-image" alt="Avatar (2009)" />}
            year="2009"
            gross="$2.880 Billion"
          />
          <Movie
            rank="2"
            title={
              <a
                href="https://en.wikipedia.org/wiki/Avengers:_Endgame"
                target="_blank"
                rel="noreferrer"
                className="specialeffects"
              >
                Avengers: Endgame
              </a>
            }
            movieImg={<img src={avengers} className="movie-image" alt="Avengers: Endgame (2019)" />}
            year="2019"
            gross="$2.798 Billion"
          />
          <Movie
            rank="3"
            title={
              <a
                href="https://en.wikipedia.org/wiki/Titanic_(1997_film)"
                target="_blank"
                rel="noreferrer"
                className="specialeffects"
              >
                Titanic
              </a>
            }
            movieImg={<img src={titanic} className="movie-image" alt="Titanic (1997)" />}
            year="1997"
            gross="$2.202 Billion"
          />
          <Movie
            rank="4"
            title={
              <a
                href="https://en.wikipedia.org/wiki/Star_Wars:_The_Force_Awakens"
                target="_blank"
                rel="noreferrer"
                className="specialeffects"
              >
                Star Wars: The Force Awakens
              </a>
            }
            movieImg={
              <img
                src={starwars}
                className="movie-image"
                alt="Star Wars: The Force Awakens (2015)"
              />
            }
            year="2015"
            gross="$2.068 Billion"
          />
          <Movie
            rank="5"
            title={
              <a
                href="https://en.wikipedia.org/wiki/Avengers:_Infinity_War"
                target="_blank"
                rel="noreferrer"
                className="specialeffects"
              >
                Avengers: Infinity War
              </a>
            }
            movieImg={<img src={avengersInfinityWar} className="movie-image" alt="Avengers: Infinity War (2018)" />}
            year="2018"
            gross="$2.048 Billion"
          />
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default App;
