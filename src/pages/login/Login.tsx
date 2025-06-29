import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useNavigate } from "react-router";
import { useForm } from "@mantine/form";
import { login } from "../../api/auth";
import { useState } from "react";

const USER = {
  email: "admin@gmail.com",
  password: "admin",
};

export default function Login() {
  const [error, setError] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: function (value) {
        if (/^\S+@\S+$/.test(value)) {
          return null;
        } else {
          return "email cannot be empty";
        }
      },
      password: function (value) {
        if (value.length) {
          return null;
        } else {
          return "Password cannot be empty";
        }
      },
    },
  });

  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      const response = await login(values);
      if (response.accessToken.length) {
        localStorage.setItem("token", response.accessToken);
        navigate("/dashboard");
      } else {
        console.log("cannot login");
      }
    } catch (error) {
      setError("Invalid email or password");
      console.log(error, "@error from catch");
    } finally {
      console.log("finally block executed");
    }
  };

  return (
    <div className="p-32">
      <h1 className="text-2xl">Login</h1>
      {error && <div className="text-red-500">{error}</div>}
      <form onSubmit={form.onSubmit(handleLogin)}>
        <TextInput
          label="Email"
          placeholder="Enter your email"
          className="my-3"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          label="Input label"
          placeholder="Input placeholder"
          className="my-3"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />

        <Button variant="filled" type="submit" className="my-3">
          Login
        </Button>
      </form>
    </div>
  );
}
