import { Link, redirect, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../../service/auth-service";
import "../../styles/Registration.scss";
import { useContext, useState } from "react";
import Loader from "../../components/Loader/Loader";

import useAuth from "../../hooks/useAuth";
import AuthContext from "../../context/AuthProvider";

function Registration() {
  document.title = "Авторизація";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  let navigate = useNavigate();

  const { setAuth } = useAuth();

  const authorizeFunction = async (email, password) => {
    setError("");
    await setIsLoading(true);
    auth(email, password)
      .then((res) => {
        console.log("AUTHORIZATION", res);

        setAuth({ email });
        setIsLoading(false);
        navigate("/courses");
      })
      .catch((err) => {
        console.log("AUTHORIZATION ERROR", err);
        setIsLoading(false);
        setError("Помилка авторизації користувача");
      });
  };

  return (
    <div className="body">
      <div className="card">
        <form
          className="container"
          onSubmit={(e) => {
            e.preventDefault();
            authorizeFunction(email, password);
          }}
        >
          <div className="title">Авторизація</div>

          <div className="inputs_div">
            <input
              value={email}
              onInput={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Емейл"
              type="email"
              className="form-input"
              required
            />
            <input
              value={password}
              onInput={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Пароль"
              type="password"
              className="form-input"
              required
            />
          </div>
          <div className={error ? "warning show" : "warning"}>
            {error} &#160;
          </div>
          <input type="submit" className="btn" value="Увійти" />
          <Link className="link" to="/registration">
            Немає аккаунту? Зареєструйтесь тут
          </Link>
        </form>

        <div
          className={isLoading ? "loader_container show" : "loader_container"}
        >
          <Loader></Loader>
        </div>
      </div>
    </div>
  );
}

export default Registration;
