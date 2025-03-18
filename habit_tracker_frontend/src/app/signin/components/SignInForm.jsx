"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const signInSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });
  const [success, setSuccess] = useState(false);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setSuccess(true);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" className="w-full p-2 mb-2 border rounded" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        <input {...register("email")} placeholder="Email" className="w-full p-2 mb-2 border rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        <input type="password" {...register("password")} placeholder="Password" className="w-full p-2 mb-2 border rounded" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

        <input type="password" {...register("confirmPassword")} placeholder="Confirm Password" className="w-full p-2 mb-2 border rounded" />
        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-2">Sign In</button>
      </form>
    </div>
  );
}
