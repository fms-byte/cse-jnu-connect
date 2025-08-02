import { Input } from "@/components/ui/input";
import clsx from "clsx";
import React from "react";

const LoginPage = () => {
  return (
    <div className={clsx("", {})}>
      <form className="mt-25 p-7">
        <label>Enter Your email</label>
        <Input />
      </form>
    </div>
  );
};

export default LoginPage;
