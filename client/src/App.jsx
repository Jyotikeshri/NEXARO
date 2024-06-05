import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./index.css";
import AllRoutes from "./Routes/AllRoutes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import allApi from "./Api/Api";
import Context from "./Context";
import { setUserDetails } from "./Store/UserSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(allApi.currUser.url, {
        method: allApi.currUser.method,
        credentials: "include",
      });

      if (!dataResponse.ok) {
        throw new Error("Network response was not ok");
      }

      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        // Assuming you are using Redux
        dispatch(setUserDetails(dataApi.data));
        // If not using Redux, manage the state accordingly
      } else {
      }
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(allApi.addToCartProductCount.url, {
      method: allApi.addToCartProductCount.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

    setCartProductCount(dataApi?.data?.count);
  };

  useEffect(() => {
    fetchUserDetails();

    // Uncomment and implement fetchUserAddToCart if necessary
    fetchUserAddToCart();
  }, []);

  return (
    <>
      <Router>
        <Context.Provider
          value={{
            fetchUserDetails,
            cartProductCount,
            fetchUserAddToCart,
          }}
        >
          <ToastContainer />
          <Header />
          <main className="min-h-[calc(100vh-120px)]">
            <AllRoutes />
          </main>
          <Footer />
        </Context.Provider>
      </Router>
    </>
  );
}

export default App;
