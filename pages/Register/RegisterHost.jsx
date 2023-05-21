import { useContext, useState } from "react";
import "./Register.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Home2 from "../home/Home2";
const RegisterHost = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    //isAdmin:false,
  });
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (!credentials.username || !credentials.email || !credentials.password) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }
    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/registerHost", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      const adminId = res.data._id; 

      navigate(`/hostels?id=${adminId}`); 
    
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Register
                </h5>
                <form className="bd">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      id="username"
                      placeholder="username"
                      required
                      pattern=".{8,}"
                    />
                    <label for="floatingInput">Username</label>
                    <span className="error">{credentials.username && credentials.username.length < 4 ? "Le username doit comporter au moins 4 caractères" : null}</span>
                 
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      onChange={handleChange}
                      className="form-control"
                      id="email"
                      placeholder="email"
                      required
                    />
                   
                    <label for="floatingInput">email</label> 
                  
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={handleChange}
                      placeholder="Password"
                      required
                      pattern=".{8,}"
                    />
                   
                    <label for="floatingPassword">Password</label>
                    <span className="error">{credentials.password && credentials.password.length < 8 ? "Le password doit comporter au moins 8 caractères" : null}</span>
                  
                  </div>

                  <div className="d-grid">
                    <button
                      disabled={loading}
                      onClick={handleClick}
                      className="btnn btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                    {error && <span>{error.message}</span>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterHost;
