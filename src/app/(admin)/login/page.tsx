// "use Client"

import Login from "@/components/Login";

export default function LoginPage() {
  return (
    <Login
      heading="Welcome back!"
      logo={{
        url: "/",
        src: "/logo.png", // make sure this file exists in your public folder
        alt: "Logo",
        title: "Go to Homepage",
      }}
      buttonText="Login"
      googleText="Sign in with Google"
      signupText="Don't have an account?"
      signupUrl="/signup"
    />
  );
}
