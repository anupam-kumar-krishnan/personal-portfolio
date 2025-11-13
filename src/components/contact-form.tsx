"use client";
import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handle submit clicked");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the fields!");
      return;
    }

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API Call Successful");
      }, 1000);
    });

    if (response) {
      toast.success("Form Submitted Successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChnage = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-lg flex-col gap-5 py-10"
    >
      <div className="flex flex-col gap-2">
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
          type="text"
          placeholder="Anupam Kumar Krishnan"
          className="shadow-aceternity rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-neutral-600 tracking-tight"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          onChange={handleChnage}
          type="text"
          placeholder="anupamk.krishnan@gmail.com"
          className="shadow-aceternity rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
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
          placeholder="Type your message here..."
          className="resize-none shadow-aceternity rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="bg-primary rounded-md px-4 py-2 text-white"
      >
        Send Message
      </button>
    </form>
  );
};
