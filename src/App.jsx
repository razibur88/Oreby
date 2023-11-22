import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./components/root/RootLayout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<ProductDetails />}></Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
