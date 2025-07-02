import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Users from "./pages/users/Users";
import Category from "./pages/category/Category";
import PrivateComponent from "./components/PrivateComponent";
import AuthComponent from "./components/AuthComponent";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<Dashboard />}
        // element={<Dashboard />}
      >
        <Route path="product" element={<Product />} />
        <Route path="users" element={<Users />} />
        <Route path="category" element={<Category />} />
      </Route>
      <Route path="/login" element={<AuthComponent Component={Login} />} />
      <Route path="/signup" element={<AuthComponent Component={SignUp} />} />

      {/* <Route path="/login" element={<AuthComponent Component={Login} />} />
      <Route path="/signup" element={<AuthComponent Component={Login} />} /> */}
    </Routes>
  );
}
