import React, { ReactNode } from "react";
import AuthLayoutLeftSection from "./_components/authLayoutLeftSection";
type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex h-screen w-full">
      <AuthLayoutLeftSection />
      <div className="flex justify-center items-center mx-auto">{children}</div>
    </div>
  );
};

export default AuthLayout;
