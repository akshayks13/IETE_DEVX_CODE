"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signInSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSuccess(true);
  };

  return (
    <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full p-2 border border-[#2d2d2d] rounded bg-[#1e1e1e] text-white placeholder-gray-400"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full p-2 border border-[#2d2d2d] rounded bg-[#1e1e1e] text-white placeholder-gray-400"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-full p-2 border border-[#2d2d2d] rounded bg-[#1e1e1e] text-white placeholder-gray-400"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="w-full p-2 border border-[#2d2d2d] rounded bg-[#1e1e1e] text-white placeholder-gray-400"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#6c5ce7] text-white p-2 rounded mt-2"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
