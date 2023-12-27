import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/Layouts/MainLayout";
import Products from "./components/Pages/Products/Products";
import Comments from "./components/Pages/Comments/Comments";
import Users from "./components/Pages/Users/Users";
import Calculator from "./components/Pages/Calculator/Calculator";
import AuthLayout from "./components/Layouts/AuthLayout";
import Login from "./components/Pages/Auth/Login";
import { Navigate } from "react-router-dom";
import Error from "./components/Pages/Error/Error";
import ProductsDetails from "./components/Pages/Products/components/ProductsDetails";

function App() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  // console.log(userData)

  // console.log(!userData?.token)

  if (!userData?.token) {
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" />} />
          <Route index path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Route>
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductsDetails />}/>
          <Route path="comments" element={<Comments />} />
          <Route path="users" element={<Users />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
