import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactForm.scss";

const Contact = ({ setAllUser }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handler = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      phone,
      message,
    };

    setAllUser((prevUsers) => [...prevUsers, newUser]);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    navigate("/contactlist");
  };

  return (
    <div className="contact-page min-h-screen w-full flex items-center justify-center p-4">
      <form
        onSubmit={handler}
        className="contact-form w-full md:w-[80%] lg:w-[60%] max-w-4xl flex flex-col gap-6 rounded-2xl border-2 shadow-2xl"
      >
        {/* Heading */}
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold">Contact Me</h2>

          <p className="text-amber-200 mt-2">
            Have a project or opportunity? Let's talk.
          </p>
        </div>

        {/* Name */}
        <label
          htmlFor="name"
          className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
        >
          <span className="text-2xl md:text-3xl md:w-28 shrink-0">Name:</span>

          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your First & Last name"
            className="h-14 flex-1 min-w-0 border-2 border-gray-400 rounded-2xl px-4 text-lg text-white text-center outline-none bg-transparent placeholder:text-amber-200 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/30 transition"
          />
        </label>

        {/* Email */}
        <label
          htmlFor="email"
          className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
        >
          <span className="text-2xl md:text-3xl md:w-28 shrink-0">Email:</span>

          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email ID"
            className="h-14 flex-1 min-w-0 border-2 border-gray-400 rounded-2xl px-4 text-lg text-white text-center outline-none bg-transparent placeholder:text-amber-200 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/30 transition"
          />
        </label>

        {/* Phone */}
        <label
          htmlFor="phone"
          className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4"
        >
          <span className="text-2xl md:text-3xl md:w-28 shrink-0">Phone:</span>

          <input
            id="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{10}"
            maxLength="10"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
            placeholder="Enter your mobile number"
            className="h-14 flex-1 min-w-0 border-2 border-gray-400 rounded-2xl px-4 text-lg text-white text-center outline-none bg-transparent placeholder:text-amber-200 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/30 transition"
          />
        </label>

        {/* Message */}
        <label
          htmlFor="message"
          className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4"
        >
          <span className="text-2xl md:text-3xl md:w-28 md:pt-3 shrink-0">
            Message:
          </span>

          <textarea
            id="message"
            rows="3"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            className="flex-1 min-w-0 border-2 border-gray-400 rounded-2xl p-4 text-lg text-white text-center outline-none resize-none bg-transparent placeholder:text-amber-200 focus:border-amber-200 focus:ring-2 focus:ring-amber-200/30 transition"
          />
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="h-14 w-full md:w-60 self-center text-xl font-semibold border-2 border-amber-200 rounded-2xl px-6 hover:bg-amber-200 hover:text-red-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
