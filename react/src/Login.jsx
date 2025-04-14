import React from "react";
import { useForm } from "react-hook-form";

export default function Login({ onSwitch }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log("Login Data:", data);

  return (
    <div className="form-container">
      <h2>Login</h2>
      <p>Enter your credentials to connect</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="email" 
          placeholder="Email" 
          {...register("email", { required: true })} 
        />
        {errors.email && <span>Email is required</span>}
        
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>Password is required</span>}
        
        <button type="submit">Submit</button>
      </form>
      <div className="social-login">
        <span>or connect with</span>
        <div className="social-button">
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
}