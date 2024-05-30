import { Link } from 'react-router-dom';
import '../../assets/js/bootstrap.bundle.min.js';
import React, { useEffect, useState, MessageEvent } from "react";
import { GET_ALL } from "../../api/apiService";
import { Button, Row } from 'react-bootstrap';
import { Checkbox, FormControlLabel, FormGroup, Radio } from '@mui/material';
import { Card, Image } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const cardTextStyle = {
  maxWidth: "80%",
};

function showpass() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function remember() { }

var bool = true;
const CtLogin = (role) => {



  localStorage.getItem('Account', JSON.stringify([]));
  let login = localStorage.getItem('Login');
  const { roleName, roleId } = role;
  const [users, setUsers] = useState([]);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);


  const [login1, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    GET_ALL(`users`).then((item) =>
      setUsers(item.data)
    );
  }, [roleId]);

  const handleKeyDown = (event) => {
    setIsCapsLockOn(event.getModifierState('CapsLock'));
  };


  // Login facebook



  const responseFacebook = (response) => {
    console.log("data", response);
    setData(response);
    console.log("email:", response.email)
    setPicture(response.picture.data.url);
    if (login != 1) {
      let newItem = {
        id: response.id,
        name: response.name,
        email: response.email,
        address: response.address,
        phonenumber: response.phone,
      };
      localStorage.setItem('Account', JSON.stringify(newItem));
      localStorage.setItem('Login', 1);
      // window.location.href = "/home";
    }
    else {
      alert("Vui lòng đăng xuất tài khoản hiện tại!");
    }

    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  const handleLogout = () => {
    window.FB.logout(() => {
      // Optional: handle logout response
      window.location.href = '/login'; // Redirect to login page after logout
    });
  }
  //


  //Login with Google



  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => setUsers(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  const responseMessage = (codeResponse) => {
    loginGoogle()
    console.log("Success!", codeResponse);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  useEffect(
    () => {
      if (users) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${users.access_token}`, {
            headers: {
              Authorization: `Bearer ${users.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [users]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  //
  return (
    <>
      <div class="container">
        {/* <Card style={{ width: '600px' }}>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Title>{data.email}</Card.Title>
            <Image src={picture} roundedCircle />
          </Card.Body>
          <button onClick={handleLogout}>Logout</button>
      </Card> */}
        {/* {profile ? (
          <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={loginGoogle}>Sign in with Google 🚀 </button>
        )} */}
      </div>
      <section className="section-conten padding-y-10">
        <div className="card mx-auto" style={{ paddingLeft: 300, paddingRight: 300 }}>
          <div className="card-body">
            <h4 className="card-title mb-4">Đăng nhập </h4>
            <form className="formLogin">
              <a href="#" className="btn btn-facebook "style={{ maxWidth: 400, marginLeft: 450, color: "#FFFFFF" }}>
                <FacebookLogin
                  appId="361745122984111"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook" />
              </a>

              <a href="#" className=" btn-block mb-4  " style={{ maxWidth: 400, marginLeft: 405, color: "#FFFFFF" }}>

                <button onClick={loginGoogle} style={{
                  minHeight: 50, minWidth: 280, background: "#4285F4",  /* Classic Google blue */
                  color: "#fff",
                  padding: "10px,20px",
                  border: "none",
                  borderRadius: "5px",
                  boxShadow: " 0 2px 5px rgba(0, 0, 0, 0.16), 0 5px 10px rgba(0, 0, 0, 0.12)",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  maxWidth: "360px",
                  margin: "0 auto",
                }}>
                  <i class="fab fa-google">  Sign in with Google </i> </button>
              </a>
              <div className="form-group">
                <input name="" className="form-control" placeholder="Username" required="text" id="inputaccount" />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="myInput"
                  onKeyDown={handleKeyDown}
                />
                {isCapsLockOn && <p>⚠️Capslock is on</p>}
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Show password"
                    onChange={showpass}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="remember me"
                    onChange={remember}
                  />
                </FormGroup>
              </div>

              <div className="form-group">
                <a href="#" className="float-right">Quên mật khẩu</a>
              </div>

              <div className="form-group">
                <Button
                  className='form-control'
                  style={{ maxWidth: 550, marginLeft: 280, color: "#FFFFFF" }}
                  onClick={() => {
                    if (login != 1) {
                      var x = document.getElementById("inputaccount");
                      var y = document.getElementById("myInput");
                      if (users.length > 0) {
                        for (var i = 0; i < users.length; i++) {
                          if (x.value == users[i].email && y.value == users[i].password) {
                            let newItem = {
                              id: users[i].id,
                              name: users[i].fullname,
                              email: users[i].email,
                              address: users[i].address,
                              phonenumber: users[i].phone_number,
                            };
                            localStorage.setItem('Account', JSON.stringify(newItem));
                            localStorage.setItem('Login', 1);
                            bool = false;
                            window.location.href = "/home";
                          }
                        }
                        if (bool == true) {
                          alert('Sai tk mk roi');
                        }
                      }
                    } else {
                      alert("Vui long dang xuat tai khoan hien tai");
                      window.location.href = "/profile";
                    }
                  }}>Đăng nhập
                </Button>

              </div>
            </form>
          </div>
        </div>
        <Link className="nav-link" to="/register"> <p className="text-center mt-3"> Không có tài khoản? <a href="#">Đăng ký</a></p></Link>
        <br /><br />
      </section>
    </>
  );
};

export default CtLogin;