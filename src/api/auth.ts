interface UserDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginDetails {
  email: string;
  password: string;
}

export async function signUp(userDetails: UserDetails) {
  const response = await fetch("http://localhost:8000/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  });
  return response.json();
}

export async function login(loginDetails: LoginDetails) {
  const response = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDetails),
  });
  return response.json();
}
