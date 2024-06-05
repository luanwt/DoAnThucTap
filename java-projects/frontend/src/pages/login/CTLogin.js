import { Link } from 'react-router-dom';
import '../../assets/js/bootstrap.bundle.min.js';
import React, { useEffect, useState, MessageEvent } from "react";
import { GET_ALL, POST_ADD, PUT_EDIT } from "../../api/apiService";
import { Button, Row } from 'react-bootstrap';
import { Checkbox, FormControlLabel, FormGroup, Radio } from '@mui/material';
import { Card, Image } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import MenuProflie from '../profileorders/menuProfile.js';
import image from '../../assets/images/avatars/avatar3.jpg'
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

  localStorage.setItem('Account1', 0);
  localStorage.getItem('Account', JSON.stringify([]));
  let login = localStorage.getItem('Login');
  const { roleName, roleId } = role;
  const [users, setUsers] = useState([]);
  const [isCapsLockOn, setIsCapsLockOn] = useState(false);
  const [cartId, setcartId] = useState();
  const [cartItem, setcart] = useState();
  const [login1, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const [profile, setProfile] = useState([]);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    GET_ALL(`users`).then((item) =>
      setUsers(item.data)
    );
  }, [roleId]);
  const handleKeyDown = (event) => {
    setIsCapsLockOn(event.getModifierState('CapsLock'));
  };

  //Login with acount//
  async function getCartByUserId(userId) {
    try {
      // Fetch user's cart data
      const userResponse = await GET_ALL(`carts/user/${userId}`);
  
      // Handle potential errors in user response
      if (!userResponse.data || !Array.isArray(userResponse.data)) {
        console.error('Invalid or empty cart data for user:', userId);
        return; // Exit early if cart data is invalid
      }
  
      // Access the first cart item's ID (assuming non-empty cart)
      const firstCartId = userResponse.data[0].id;
      localStorage.setItem('CartId',firstCartId)
      // Fetch cart items for the first cart
      const cartItemsResponse = await GET_ALL(`cartItems/cart/${firstCartId}`);
      console.log("cartItemsResponse: ",cartItemsResponse.data)
      // Handle potential errors in cart items response
      if (!userResponse || !userResponse.data || !Array.isArray(userResponse.data)) {
        console.error('Invalid or empty cart data for user:', userId);
        return; // Exit early if cart data is invalid
      }
  
      // Store cart data in localStorage
      const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      console.log("existingCartItems : ",existingCartItems)


      modifyCartItemIDs(existingCartItems);
      function modifyCartItemIDs(cartItems) {
        // Loop through each cart item
        for (const cartItem of cartItems) {
          // Update the 'idCart' value to 2
          cartItem.cart.id = firstCartId;
        }
        // Update the cart items in storage (replace 'localStorage' with your storage mechanism)
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
      }
      let dasdas = JSON.parse(localStorage.getItem('cartItems')) || [];
     
      const handleUpdateQuantity = async (productId, newQuantity, cartId) => {
        try {
          console.log("CartID HERE", cartId)
          if (!cartId) {
            console.error('Cart ID not found for product ID:', productId);
            return;
          }
          console.log(`Updating quality for productId ${productId} in cartId ${cartId} with quality ${newQuantity}`);
  
          const response = await axios.put(`http://localhost:8080/api/cartItems/${cartId}/${productId}`, { quality: newQuantity });
  
          if (response.status === 200) {
            console.log('Successfully updated cart item quality.');
  
          } else {
            console.error('Failed to update cart item quality:', response);
          }
        } catch (error) {
          console.error('Failed to update cart item quality:', error);
        }
      };
      for (const newItem of cartItemsResponse.data) {
        const existingItemIndex = existingCartItems.findIndex(item => item.productId === newItem.productId);
        
        if (existingItemIndex !== -1) {
          // Update existing item
 
          existingCartItems[existingItemIndex].quality += newItem.quality; // Update quantity

          handleUpdateQuantity(existingCartItems[existingItemIndex].productId,existingCartItems[existingItemIndex].quality,firstCartId)
          // PUT_EDIT(`${firstCartId}/${newItem.id}`,existingCartItems)
          // Update other properties as needed (optional)
          // existingCartItems[existingItemIndex].otherProperty = newItem.otherProperty;
        }else {
          // Add new item
          existingCartItems.push(newItem);
        }

      
      }
      localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

      console.log(dasdas.length);
      dasdas.forEach(item => {
        try {
          const requestData = {
            productId: item.productId,
            name: item.name,
            image: item.image,
            price: item.price,
            quality: item.quality,
            cart: {
                id:item.cart.id
            }
          };
          console.log("requestdatadasdasdas: ",requestData)
            POST_ADD(`cartItems`,requestData)
        } catch (error) {
          console.error('Failed to retrieve orders:', error);
        }
      })
      // localStorage.setItem('cartItems', JSON.stringify(cartItemsResponse.data));
      console.log('Cart data successfully fetched and stored in localStorage.');
      window.location.href = "/home";
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  }
  
  // Login facebook

  const responseFacebook = (response) => {
    if (response.status != "unknown") {

      console.log("data", response);
      setData(response);
      console.log("email:", response.email)
      setPicture(response.picture.data.url);
      if (login != 1) {
        let newItem = {
          id: response.id,
          name: response.name,
          email: 'luancui281103@gmail.com',
          address: '44/109 Tan Chan Hiep Q12 TP HCM',
          phonenumber: '0765626651',
          image: response.picture.data.url
        };
        localStorage.setItem('Account', JSON.stringify(newItem));
        localStorage.setItem("accessToken", response.accessToken);
        localStorage.setItem('Account1', 1);
        localStorage.setItem('Login', 1);

        window.location.href = "/home";
      }
      else {
        alert("Vui lòng đăng xuất tài khoản hiện tại!");
      }

      if (response.accessToken) {
        console.log(response.accessToken)
        setLogin(true);
      } else {
        setLogin(false);
      }
    }
    else {
      console.error("Error: Facebook login response is null or undefined");

    }

  }

  const handleLogout = () => {
    window.FB.logout(() => {
      window.location.href = "/login";
    });
  }
  //


  //Login with Google
  const loginGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUsers(codeResponse);
      // Set this to true after successful login 
    },
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
            console.log(res.data)

            if (login != 1) {
              let newItem = {
                id: res.data.id,
                name: res.data.name,
                email: res.data.email,
                phone: res.data.phone,
                image: res.data.picture.toString(),
              };
              localStorage.setItem('Account', JSON.stringify(newItem));
              localStorage.setItem('Login', 1);
              localStorage.setItem('Account1', 1);
              window.location.href = "/home";
            }
            else {
              alert("Vui lòng đăng xuất tài khoản hiện tại!");
            }
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
      <section class="section-conten padding-y-10">
        <div class="card mx-auto" style={{ paddingLeft: 300, paddingRight: 300 }}>
          <div class="card-body">
            <h4 class="card-title mb-4">Đăng nhập </h4>
            <form class="formLogin">
              <a href="#" class="btn btn-facebook " style={{ maxWidth: 400, marginLeft: 450, color: "#FFFFFF" }}>
                <FacebookLogin
                  appId="361745122984111"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook" />
              </a>

              <a href="#" class=" btn-block mb-4  " style={{ maxWidth: 400, marginLeft: 405, color: "#FFFFFF" }}>
                <button onClick={loginGoogle}
                  style={{
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

              <div class="form-group">
                <input name="" class="form-control" placeholder="Username" required="text" id="inputaccount" />
              </div>

              <div class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control"
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

              <div class="form-group">
                <a href="#" class="float-right">Quên mật khẩu</a>
              </div>
              <div class="form-group">
                <Button
                  class='form-control'
                  style={{ minWidth: 550, marginLeft: 320, color: "#FFFFFF" }}
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
                              image: image
                            };
                            localStorage.setItem('Account', JSON.stringify(newItem));
                            getCartByUserId(users[i].id);
                            localStorage.setItem('Login', 1);
                            bool = false;
                         
                      
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

        <br /><br />
      </section>
    </>
  );
};

export default CtLogin;