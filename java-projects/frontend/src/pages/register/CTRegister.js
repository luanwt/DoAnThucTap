/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Checkbox, FormControlLabel } from "@mui/material";

import { FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { error } from "jquery";
import { useNavigate } from "react-router-dom";
import { create } from "@mui/material/styles/createTransitions";
import { GET_ALL, POST_ADD } from "../../api/apiService";

function showpass() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [fullname, setfullname] = useState("");
  const [address, setaddress] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [checkin, setcheckin] = useState("");
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

  async function  handleLogin() {
   if(checkin!==""){
    if (fullname !== "" && email !== "" && password !== "" && address !== "" && phone_number !== "" ) {
      if(password!=password2){
          alert("Mật khẩu xác nhận chưa đúng");
      }
      else{
        const requestData = {
          email:email,
          fullname: fullname,
          password:password,
          address:address,
          phone_number:phone_number,
          created_at: new Date().toISOString(),
          updated_at:new Date().toISOString(),
          role:{
            id:2
          }
        };
        const response = await POST_ADD("users",requestData)
       const requestData2 = {
              user:{
                id:response.data.id
              }
        };
        await POST_ADD("carts",requestData2)

        window.location.href = "/login";
      }
    }
    else{
      alert("Vui lòng điền đầy đủ thông tin")
    }
   }
   else{
    console.log("vui lòng chấp nhận các điều khoản và điều kiện")
   }
  
  };

  useEffect(() => {
    if (isLoggedIn) {
     
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
                onselect="return false;" onpaste="return false;"
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
               onselect="return false;" onpaste="return false;"
                required="pass"
                class="form-control"
                type="password"
                id="pass1"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
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
              <button onClick={handleLogin} type="submit" class="btn btn-primary btn-block" style={{marginTop:"20px"}}> Register</button>
            </div>
            <div class="form-group">
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="agreeCheckbox"  onClick={() => { setcheckin(2)}}/> 
                   <label class="custom-control-label" for="agreeCheckbox">Tôi đồng ý với <a href="#">các điều khoản và điều kiện</a>
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