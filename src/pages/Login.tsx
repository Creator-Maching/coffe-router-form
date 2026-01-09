import { useState } from "react";
import validator from "validator";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    workingArea: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function validateForm() {
    if (validator.isEmpty(form.username)) {
      toast.error("Username is required");
      return false;
    }

    if (!validator.isEmail(form.email)) {
      toast.error("Invalid email");
      return false;
    }

    if (
      !validator.isStrongPassword(form.password, {
        minLength: 3,
        minNumbers: 2,
        minLowercase: 0,
        minUppercase: 0,
        minSymbols: 0,
      })
    ) {
      toast.error("Password must have at least 3 characters and 2 numbers");
      return false;
    }

    if (validator.isEmpty(form.workingArea)) {
      toast.error("Working area is required");
      return false;
    }

    return true;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (validateForm()) {
      toast.success("Registered successfully!");

      // pequeno delay para o usuário ver o toast
      setTimeout(() => {
        navigate("/success");
      }, 1500);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="workingArea"
        placeholder="Working Area"
        onChange={handleChange}
      />
      <button type="submit">Register</button>
    </form>
  );
}
