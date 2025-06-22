import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Users from "./pages/users/Users";
import Category from "./pages/category/Category";
import PrivateComponent from "./components/PrivateComponent";
import AuthComponent from "./components/AuthComponent";
import Login from "./pages/login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<PrivateComponent Component={Dashboard} />}
        // element={<Dashboard />}
      >
        <Route path="product" element={<Product />} />
        <Route path="users" element={<Users />} />
        <Route path="category" element={<Category />} />
      </Route>
      <Route path="/login" element={<Login />} />

      {/* <Route path="/login" element={<AuthComponent Component={Login} />} />
      <Route path="/signup" element={<AuthComponent Component={Login} />} /> */}
    </Routes>
  );
}
