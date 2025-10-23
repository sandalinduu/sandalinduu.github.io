"use client";

import { useState, FormEvent } from "react";

export default function ContactMe() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwyyjaa", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      // Removed unused variable warning here
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full h-screen py-20 px-8 md:px-16 bg-[#0A0A23]">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Get in Touch</h2>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12 text-center">
        Ideas, questions, or hellos — I’m all ears! Send me a message and I’ll get back to you soon.
      </p>

      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-3xl mx-auto grid grid-cols-1 gap-6 text-left"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none transition-all duration-300"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none transition-all duration-300"
            placeholder="Your Email"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-gray-700 focus:border-primary-red focus:ring-2 focus:ring-primary-red outline-none transition-all duration-300"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="px-8 py-3 bg-[#0B0B45] text-white text-background-dark font-semibold rounded-lg shadow-lg transition-all duration-300 hover:bg-[#1A1A70] hover:shadow-[#0B0B45]/50 transform hover:-translate-y-1 mx-auto block"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-500 mt-6 font-medium text-center animate-fadeIn">
          Message sent successfully! I’ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 mt-6 font-medium text-center animate-fadeIn">
          Something went wrong. Please try again later.
        </p>
      )}
    </section>
  );
}
