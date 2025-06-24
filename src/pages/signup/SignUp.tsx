import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { signUp } from "../../api/auth";
import { useNavigate } from "react-router";

export default function SignUp() {
  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  async function handleSignUp(values: any) {
    await signUp(values);
    navigate("/login");
  }

  return (
    <div className="p-60">
      <form onSubmit={form.onSubmit(handleSignUp)}>
        <TextInput
          label="First name"
          placeholder="Enter your email"
          className="my-3"
          key={form.key("firstName")}
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last name"
          placeholder="Enter your email"
          className="my-3"
          key={form.key("lastName")}
          {...form.getInputProps("lastName")}
        />

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
