import React, { ReactNode } from "react";
import Navbar from "../components/navbar";
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
