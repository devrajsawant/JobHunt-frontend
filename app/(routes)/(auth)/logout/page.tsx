"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logout } from "@/store/authSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());

    // clear anything stored locally if needed
    localStorage.removeItem("token");

    router.replace("/login");
  }, [dispatch, router]);

  return <p className="text-center mt-10">Logging out...</p>;
};

export default Page;