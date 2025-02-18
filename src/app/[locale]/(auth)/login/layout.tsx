import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Generated by create next app",
};

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return <div>{children}</div>;
};

export default LoginLayout;
