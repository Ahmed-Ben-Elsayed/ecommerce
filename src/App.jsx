import { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import { Navbar } from "./components/navbar/Navbar";
import { Header } from "./components/header/Header";
import { Prop } from "./components/properties/Prop";
import { Cat } from "./components/categories/Cat";
import { Projects } from "./components/projects/Projects";
import { Com } from "./components/compony/Com";
import { Footer } from "./components/footter/Footer";
import {
  Link,
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  Navigate
} from "react-router-dom";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Shop } from "./components/pages/Shop";
import { Shopdatils } from "./components/shopdatils/Shopdatils";
import { Datils } from "./components/pages/Datils/Datils";
import { Contact } from "./components/Contact/Contact";
import { Check } from "./components/pages/Check/Check";
import { Cart } from "./components/pages/Cart/Cart";
import { Fav } from "./components/pages/Fav/Fav";
import HashLoader from "react-spinners/HashLoader";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
// import './functions/connect.php';
function App({ total }) {
  let [dark, setdark] = useState(false);
  function darkk() {
    setdark(!dark);
  }
  // scroll
  window.onscroll = function () {
    if (window.scrollY > 0) {
      document.querySelector(".arr").style.display = "flex";
    } else {
      document.querySelector(".arr").style.display = "none";
    }
  };

  function scroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // add to  cart -------------------
  let [cartitems, setcart] = useState([]);
  function addTocart(product) {
    let seleteditem = cartitems.find((item) => item.id == product.id);
    if (seleteditem) {
      setcart(
        cartitems.map((item) =>
          item.id == product.id
            ? { ...seleteditem, qty: seleteditem.qty + 1 }
            : item
        )
      );
    } else {
      Swal.fire({
        title: "add successfully!",
        icon: "success",
        showCancelButton: false,
        timer: 1000,
      });
      setcart([...cartitems, { ...product, qty: 1 }]);
    }
    // remove from cart
  }
  function removeFromcart(product) {
    setcart(cartitems.filter((items) => items.id != product.id));
    Swal.fire({
      title: "removed successfully!",
      icon: "success",
      showCancelButton: false,
      timer: 1000,
    });
  }
  // add to favorite list
  const [favoritelist, setfavoritelist] = useState([]);
  function addTofav(product) {
    let selectedit = favoritelist.find((item) => item.id == product.id);
    if (selectedit) {
      Swal.fire({
        title: "the product is Alredy Added!",
        icon: "warning",
        showCancelButton: false,
        timer: 1000,
      });
    } else {
      setfavoritelist([...favoritelist, product]);
      Swal.fire({
        title: "add successfully!",
        icon: "success",
        showCancelButton: false,
        timer: 1000,
      });
    }
  }
  // remove from fav
  function removeFromecfav(product) {
    setfavoritelist(favoritelist.filter((item) => item.id != product.id));
    Swal.fire({
      title: "removed successfully!",
      icon: "success",
      showCancelButton: false,
      timer: 1000,
    });
  }
  // decrsece
  function decrese(product) {
    let seleteditem = cartitems.find((item) => item.id == product.id);
    if (seleteditem.qty == 1) {
      setcart(cartitems.filter((item) => item.id != product.id));
    } else {
      setcart(
        cartitems.map((item) =>
          item.id == product.id
            ? { ...seleteditem, qty: seleteditem.qty - 1 }
            : item
        )
      );
    }
  }
  let [spinner, setspinner] = useState(false);
  useEffect(
    function () {
      setspinner(true);
      setTimeout(() => {
        setspinner(false);
      }, 1500);
    },
    [App]
  );
  // login
  const logedin = localStorage.getItem("logedin");
  let navigate = useNavigate();
  useEffect(()=>{
    if(!logedin){
      navigate('/login')
    }
  },[])
  return (
    <>
      <div className={dark ? "dark" : "light"}>
        {spinner ? (
          <>
            <div className="spinner">
              <HashLoader
                className="sp"
                color={"yellow"}
                loading={spinner}
                size={150}
              />
            </div>
          </>
        ) : (
          <>
            {/* {logedin ? ( */}
              {/* <BrowserRouter> */}
                <div className="arr"></div>
                <BsFillArrowUpSquareFill onClick={scroll} className="arow" />
                {logedin
                 
                ?    
              <Navbar
                darkk={darkk}
                dark={dark}
                cartitems={cartitems}
                favoritelist={favoritelist}
                />
                :
                ""
              }
                <Routes>
                  <Route path="/login" element={<Login spinner={spinner} />} />
                  <Route
                    path="/"
                    element={
                      <Header addTofav={addTofav} addTocart={addTocart} />
                    }
                  />
                  <Route
                    path="/Shop"
                    element={
                      <Shop
                        addTofav={addTofav}
                        spinner={spinner}
                        addTocart={addTocart}
                      />
                    }
                  />
                  <Route path="/Shopdatils" element={<Shopdatils />} />
                  <Route
                    path="/Shop/:id"
                    element={<Datils spinner={spinner} addTocart={addTocart} />}
                  />
                  <Route
                    path="/Contact"
                    element={<Contact spinner={spinner} />}
                  />
                  <Route
                    path="/register"
                    element={<Register spinner={spinner} />}
                  />
                  <Route
                    path="/Check"
                    element={
                      <Check
                        spinner={spinner}
                        cartitems={cartitems}
                        total={total}
                      />
                    }
                  />
                  <Route
                    path="/Cart"
                    element={
                      <Cart
                        decrese={decrese}
                        spinner={spinner}
                        cartitems={cartitems}
                        addTocart={addTocart}
                        removeFromcart={removeFromcart}
                      />
                    }
                  />
                  <Route
                    path="/favorite"
                    element={
                      <Fav
                        removeFromecfav={removeFromecfav}
                        spinner={spinner}
                        addTocart={addTocart}
                        favoritelist={favoritelist}
                      />
                    }
                  />
                </Routes>
                <Footer />
              {/* </BrowserRouter> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
