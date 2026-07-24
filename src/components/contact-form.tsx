"use client";
import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const newErrors = { name: "", email: "", message: "" };

    if (!name) newErrors.name = "Full name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Form Submitted Successfully");
        setFormData({ name: "", email: "", message: "" });
        setErrors({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log("Fetch error:", error);
      toast.error("Something went wrong");
    }
  };

  const handleChnage = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="shadow-section-inset mx-auto border-y border-neutral-100 py-14 my-6 dark:border-neutral-800"
    >
      <div className="max-w-lg mx-auto gap-5">
        {/* Full name */}
        <div className="flex flex-col gap-2 relative">
          <label
            htmlFor="name"
            className="text-sm font-medium text-neutral-600 tracking-tight"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChnage}
            value={formData.name}
            type="text"
            placeholder="Enter Your Name"
            className="shadow-aceternity rounded-md px-2 py-2.5 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.name && (
            <div className="absolute left-0 top-full mt-2 z-10 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="relative bg-neutral-800 dark:bg-neutral-700 text-white text-xs font-medium px-3 py-2 rounded-md shadow-lg max-w-xs">
                <div className="absolute -top-1 left-4 w-2 h-2 bg-neutral-800 dark:bg-neutral-700 rotate-45" />
                {errors.name}
              </div>
            </div>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 relative pt-5">
          <label
            htmlFor="email"
            className="text-sm font-medium text-neutral-600 tracking-tight"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChnage}
            value={formData.email}
            placeholder="Enter Your Email ID"
            className="shadow-aceternity rounded-md px-2 py-2.5 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.email && (
            <div className="absolute left-0 top-full mt-2 z-10 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="relative bg-neutral-800 dark:bg-neutral-700 text-white text-xs font-medium px-3 py-2 rounded-md shadow-lg max-w-xs">
                <div className="absolute -top-1 left-4 w-2 h-2 bg-neutral-800 dark:bg-neutral-700 rotate-45" />
                {errors.email}
              </div>
            </div>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 relative pt-5">
          <label
            htmlFor="message"
            className="text-sm font-medium text-neutral-600 tracking-tight"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            onChange={handleChnage}
            value={formData.message}
            placeholder="Type your message here..."
            className="resize-none shadow-aceternity rounded-md px-2 py-2.5 text-sm bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.message && (
            <div className="absolute left-0 top-full mt-2 z-10 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="relative bg-neutral-800 dark:bg-neutral-700 text-white text-xs font-medium px-3 py-2 rounded-md shadow-lg max-w-xs">
                <div className="absolute -top-1 left-4 w-2 h-2 bg-neutral-800 dark:bg-neutral-700 rotate-45" />
                {errors.message}
              </div>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-primary rounded-md px-2 py-2 text-white mt-5 w-[100%] hover:bg-primary/95"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};
