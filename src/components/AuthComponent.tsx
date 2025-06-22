import { Navigate } from "react-router";

export default function AuthComponent({ Component }) {
  const token = localStorage.getItem("token");
  console.log(token, "@token");

  if (token?.length) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <Component />
    </div>
  );
}
