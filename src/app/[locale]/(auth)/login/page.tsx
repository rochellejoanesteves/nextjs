"use client";
import AuthForm from "@/app/components/auth-form";
import { useRouter, useParams } from "next/navigation";

export type FormData = {
  username: string;
  password: string;
  confirmPassword?: string;
};

const Login = () => {
  const router = useRouter();
  const { locale } = useParams();

  const handleLogin = async (formData: FormData) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
        expiresInMins: 30,
      }),
    });

    const result = await res.json();

    if (result.token) {
      localStorage.setItem("token", result.token);
      const previousPage = sessionStorage.getItem("previousPage") || `/${locale}/lobby`;
      sessionStorage.removeItem("previousPage");
      router.push(previousPage);
    } else {
      router.push(`/${locale}/system`);
    }
  };

  return (
    <div>
      <AuthForm formType="login" onSubmit={handleLogin} />
    </div>
  );
};

export default Login;
