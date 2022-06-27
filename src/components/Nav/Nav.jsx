import SearchMovie from "../SearchMovie";
import "./Nav.css";

const Nav = ({ onSubmitMovieSearch }) => {
  return (
    <nav className="nav">
      <div className="list-wrapper">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <h1>Movies</h1>
            <SearchMovie onSubmitMovieSearch={onSubmitMovieSearch} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
