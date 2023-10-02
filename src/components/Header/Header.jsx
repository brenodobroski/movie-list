/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = (props) => {
  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target[0].value;
    props.onSubmit(searchValue);
    event.target[0].value = "";
  }

  return (
    <header className="Header">
      <Link to={"/"}>
        <h1>Movie List</h1>
      </Link>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
  );
};

export default Header;
