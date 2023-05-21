import { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginHost = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

 const handleClick = async (e) => {
  e.preventDefault();
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/loginHost", credentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
//console.log(res.data.details);
    const adminId = res.data.details._id; 

    navigate(`/hostels?id=${adminId}`); 
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  }
};


  return (
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                <form className="bd">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      onChange={handleChange}
                      className="form-control"
                      id="username"
                      placeholder="username"
                    />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={handleChange}
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
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

export default LoginHost;
