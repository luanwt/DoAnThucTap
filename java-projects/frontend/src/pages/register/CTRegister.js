/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Checkbox, FormControlLabel } from "@mui/material";

import { FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { error } from "jquery";
import { useNavigate } from "react-router-dom";

function showpass() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function showpass1() {
  var x = document.getElementById("pass1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function dieuhuong() {
  window.location.href = "http://localhost:3000/home";
}

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setfullname] = useState("");
  const [address, setaddress] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isCapsLockOnPass, setIsCapsLockOnPass] = useState(false);
  const [isCapsLockOnConfirmPass, setIsCapsLockOnConfirmPass] = useState(false);
  const navigate = useNavigate();

  const handleKeyDownPass = (event) => {
    setIsCapsLockOnPass(event.getModifierState('CapsLock'));
  };

  const handleKeyDownConfirmPass = (event) => {
    setIsCapsLockOnConfirmPass(event.getModifierState('CapsLock'));
  };

  const handleLogin = () => {
    if (fullname !== "" && email !== "" && password !== "" && address !== "" && phone_number !== "") {
      axios
        .post(`http://localhost:8080/api/users`, {
          email,
          password,
          fullname,
          address,
          phone_number,
        })
        .then((response) => {
          if (response.data.success) {
            setIsLoggedIn(true);
          } else {
            alert("dang ky thanh cong");
          }
        })
      navigate('/home');
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      // Handle logged-in state
    }
  }, [isLoggedIn]);

  return (
    <section class="section-content padding-y">
      <div class="card mx-auto" style={{ width: '520px' }}>
        <article class="card-body">
          <header class="mb-4"><h4 class="card-title">Sign up</h4></header>
          <form>
            <div class="form-row">
              <label>Name</label>
              <input
                required="name"
                class="form-control"
                type="fullname"
                placeholder="Fullname"
                value={fullname}
                onChange={(e) => setfullname(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                required="email"
                class="form-control"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-row">
              <label>Password</label>
              <input
                required="pass"
                class="form-control"
                type="password"
                id="pass"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDownPass}
              />
              {isCapsLockOnPass && <p>⚠️Capslock is on</p>}

            </div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Show password"
                onChange={showpass}
              />
            </FormGroup>
            <div class="form-row">
              <label>Confirm password</label>
              <input
                required="pass"
                class="form-control"
                type="password"
                id="pass1"
                placeholder="Mật khẩu xac nhan"
                onKeyDown={handleKeyDownConfirmPass}
              />
              {isCapsLockOnConfirmPass && <p>⚠️Capslock is on</p>}

            </div>

            <div class="form-row">
              <label>Address</label>
              <input
                required="address"
                class="form-control"
                type="address"
                placeholder="address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
            <div class="form-row">
              <label>Phone</label>
              <input
                required="phone_number"
                class="form-control"
                type="phone_number"
                placeholder="phone_number"
                value={phone_number}
                onChange={(e) => setphone_number(e.target.value)}
              />
            </div>
            <div class="form-group">
              <button onClick={handleLogin} type="submit" class="btn btn-primary btn-block"> Register</button>
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" defaultChecked />
                <label class="custom-control-label">
                  I am agree with <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
          </form>
        </article>
      </div>


    </section>

  );


};
export default Register