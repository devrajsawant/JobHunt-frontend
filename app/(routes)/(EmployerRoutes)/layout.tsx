import Navbar from "@/app/components/navbar";
import React, { ReactNode } from "react";
type AuthLayoutProps = {
  children: ReactNode;
};

const EmployeeLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default EmployeeLayout;
