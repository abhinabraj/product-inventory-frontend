import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useNavigate } from "react-router";
import { useForm } from "@mantine/form";

const USER = {
  email: "admin@gmail.com",
  password: "admin",
};

export default function Login() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const handleLogin = (values: any) => {
    if (values.email === USER.email && values.password === USER.password) {
      localStorage.setItem("token", "1234");
      navigate("/dashboard");
    } else {
      console.log("error");
    }
  };

  return (
    <div className="p-32">
      <h1 className="text-2xl">Login</h1>
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
