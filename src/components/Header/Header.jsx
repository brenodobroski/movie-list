import "./Header.scss";

const Header = () => {
  return (
    <header className="Header">
      <h1>Movie List</h1>
      <form>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </header>
  );
};

export default Header;
