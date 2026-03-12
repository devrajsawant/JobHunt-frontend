import React, { ReactNode } from "react";
import AuthLayoutLeftSection from "./_components/authLayoutLeftSection";
type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="grid grid-cols-2 h-screen w-full">
      <AuthLayoutLeftSection />
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
