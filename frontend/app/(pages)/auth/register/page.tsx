"use client"; //temporary client
import { Input } from "@/components/ui/input";
import React from "react";
import { Form } from "react-hook-form";

const RegisterPage = () => {
  return (
    <div className="h-screen">
      <form className="mt-25 p-7">
        <label>Enter Your email</label>
        <Input />
      </form>
    </div>
  );
};

export default RegisterPage;
