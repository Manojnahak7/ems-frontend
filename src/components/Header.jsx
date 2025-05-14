import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark px-3">
          <Link to="/" className="navbar-brand">
            Employee Management Application
          </Link>
        </nav>
      </header>
    </>
  );
};
