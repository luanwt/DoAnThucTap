import logo from './logo.svg';
import './App.css';
import Header from './Component/layouts/Header'
import Footer from './Component/layouts/Footer';
import "./assets/sass/app.scss";
import Main from './Component/layouts/Main';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
  <div>
        <GoogleOAuthProvider clientId="1073053158219-rs06gcjsl57ff6p8bhiea87ko80t6fka.apps.googleusercontent.com">
    <Header/>
    <Main/>
    <Footer/>
    </GoogleOAuthProvider>
  </div>
  );
}

export default App;
