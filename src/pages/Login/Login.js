import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../asset/css/login.css";
import { LoginAction } from "../../redux/Actions/XacThucNguoiDungAction";


export default function Login() {
  const [width, setWidth] = useState(window.innerWidth);
  let [user, setUserAccount] = useState({
    email: "",
    password: "",
  });
  let wbg = "";
  if (width < 600) wbg = "90%";
  else wbg = "450px";
  const dispatch = useDispatch()

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const hanleInput = (event) => {
    let { value, name } = event.target;

    setUserAccount({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (values) => {
    values.preventDefault();

    const { email, password } = values;
    setUserAccount({
        email: email,
        password: password,
    });
    dispatch(LoginAction(user));
  };

  return (
    <div className="container-fluid">
      <div className="login-box" style={{ width: wbg }}>
        <h2>SIGN IN</h2>
        <form onSubmit={(values)=>{
            handleSubmit(values)
        }} style={{ witdh: "100%" }}>
          <div className="user-box">
            <input defaultValue=""
              onChange={(event) => {
                hanleInput(event);
              }}
              type="email"
              name="email"
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input defaultValue=""
              onChange={(event) => {
                hanleInput(event);
              }}
              type="password"
              name="password"
              required
            />
            <label>Password</label>
          </div>
          <div className="d-flex justify-content-between">
            <div className="btn_login">
              <button type="submit">
                <span />
                <span />
                <span />
                <span />
                Login
              </button>
            </div>
            <div className="btn_register">
              <button className="btn-outline-danger" type="button">
                <span />
                <span />
                <span />
                <span />
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
