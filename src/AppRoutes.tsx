import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/product/Product";
import Users from "./pages/users/Users";
import Category from "./pages/category/Category";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="product" element={<Product />} />
        <Route path="users" element={<Users />} />
        <Route path="category" element={<Category />} />
      </Route>
    </Routes>
  );
}
