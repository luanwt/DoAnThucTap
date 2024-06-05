import logo from './logo.svg';
import './App.css';
import Header from './Component/layouts/Header'
import Footer from './Component/layouts/Footer';
import "./assets/sass/app.scss";
import Main from './Component/layouts/Main';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  let cartItemCount=cartItems.length
  return (
  <div>
        <GoogleOAuthProvider clientId="1073053158219-rs06gcjsl57ff6p8bhiea87ko80t6fka.apps.googleusercontent.com">
    <Header cartItemCount={cartItemCount}/>
    <Main/>
    <Footer/>
    </GoogleOAuthProvider>
  </div>
  );
}

export default App;
