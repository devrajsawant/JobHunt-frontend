"use client";

import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const LoginRequiredModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-xl shadow-lg w-[420px] p-6 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold mb-2">Login or Register Required</h2>

        {/* Body */}
        <p className="text-gray-600 mb-6">
          You need to login or Register to continue.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href="/login"
            className="flex-1 text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="flex-1 text-center border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginRequiredModal;
