import { Link } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { BoxArrowInRight } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextHost } from "../../context/AuthContextHost"; // Mettez à jour l'importation ici

const Navbar = () => {
  const { host, loading, error, dispatch } = useContext(AuthContextHost); // Mettez à jour l'utilisation du contexte ici

  const handleLogOut = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    // Effectuez les actions de déconnexion supplémentaires, telles que la destruction de la session ou la suppression des données de l'utilisateur de localStorage.
    // Par exemple, vous pouvez utiliser localStorage.removeItem("userId") pour supprimer "userId" de localStorage.
    localStorage.removeItem("adminId");
  };

  return (
    <div className="navbar1">
      <div className="navContainer">
        {host ? (
          <button className="headerBtn" onClick={handleLogOut}>
            <BoxArrowInRight /> Log out
          </button>
        ) : (
          <div className="navItems">
            <Link to="/loginHost">
              <button className="navButton">login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
