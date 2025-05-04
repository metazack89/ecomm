import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AuthCheck from "../AuthCheck/AuthCheck";

// Pages
import Home from "../pages/Home/Home";
import Shop from "../pages/shop/Shop";
import Product from "../pages/product/Product";
import Pages from "../pages/pages/Pages";
import About from "../pages/about/About";
import Error from "../pages/Error/Error";

// Auth
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/about" element={<About />} />

        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainLayout;
