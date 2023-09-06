import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Flash, LoggedIn, SiteSettings } from "./components";
import {
  Home,
  CategoryList,
  ProductDetails,
  Register,
  Login,
  Cart,
  Profile,
  Checkout,
  About,
  Contact,
  TermsPage,
  MyOrdersPage,
  PolicyPage,
  Search,
} from "./pages";
import { NotificationContainer } from "react-notifications";
import { CartHooks } from "./Features";
import { useEffect } from "react";

function App() {
  // Getting the cart items
  // to ensure the data is up-to-date on the site
  const { useGetCartItems } = CartHooks;

  const { GetCartItems } = useGetCartItems();

  useEffect(() => {
    GetCartItems();
  }, []);

  return (
    <Router>
      <SiteSettings />
      <Routes>
        <Route
          path="/"
          element={
            <Flash>
              <Home />
            </Flash>
          }
        />
        <Route
          path="/login"
          element={
            <Flash>
              <LoggedIn>
                <Login />
              </LoggedIn>
            </Flash>
          }
        />
        <Route
          path="/register"
          element={
            <LoggedIn>
              <Register />
            </LoggedIn>
          }
        />
        <Route path="/category/:id" element={<CategoryList />} />
        <Route path="/products/:name/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/search" element={<Search />} />
        <Route
          path="/profile"
          element={
            <LoggedIn protect>
              <Profile />
            </LoggedIn>
          }
        />
        <Route
          path="/myOrders"
          element={
            <LoggedIn protect>
              <MyOrdersPage />
            </LoggedIn>
          }
        />
        <Route
          path="/checkout"
          element={
            <LoggedIn protect>
              <Checkout />
            </LoggedIn>
          }
        />
      </Routes>
      <NotificationContainer />
    </Router>
  );
}

export default App;
