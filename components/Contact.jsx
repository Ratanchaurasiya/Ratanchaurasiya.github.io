import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { slideIn } from "../utils/motion";
import { soundManager } from "@/utils/audio";

function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    soundManager.playClick();

    const formElement = formRef.current;

    // Anti-spam bot check
    const botCheck = formElement.querySelector('input[name="botcheck"]');
    if (botCheck && botCheck.checked) {
      return; // Bot detected, silent reject
    }

    setLoading(true);

    try {
      // 1. Send to Next.js API / Express endpoint (/api/send-email)
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio Contact",
          message: form.message,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        soundManager.playSuccess();
        setStatusMsg({
          type: "success",
          text: "✓ Message sent successfully! Ratan will get back to you soon.",
        });
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        if (typeof window !== "undefined") {
          localStorage.removeItem("portfolio_contact_draft");
        }
      } else {
        // Fallback: Web3Forms API Endpoint
        const formData = new FormData(formElement);
        const accessKey = formData.get("access_key");

        if (accessKey && accessKey !== "YOUR_ACCESS_KEY_HERE") {
          const web3Response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });

          const web3Result = await web3Response.json();

          if (web3Response.ok && web3Result.success) {
            soundManager.playSuccess();
            setStatusMsg({
              type: "success",
              text: "✓ Message sent successfully! Ratan will get back to you soon.",
            });
            setForm({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
            if (typeof window !== "undefined") {
              localStorage.removeItem("portfolio_contact_draft");
            }
            return;
          }
        }

        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      soundManager.playClick();
      setStatusMsg({
        type: "error",
        text: "✗ Submission error. Please email directly at ratanchaurasiya61@gmail.com or WhatsApp +91 6390035039.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="my-6 md:my-10 xl:my-12 md:w-2/5 w-full bg-white dark:bg-[#0d1322]/95 xl:ml-36 lg:ml-16 md:ml-10 p-5 sm:p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-cyan-500/20 shadow-cyan-950/20"
      id="contact"
    >
      <div className="flex items-center gap-3.5 mb-2">
        <div className="w-12 h-12 rounded-full ring-2 ring-primary/80 overflow-hidden relative shadow-md shrink-0">
          <Image
            src="/assets/avatar.png"
            alt="Ratan Chaurasiya"
            fill={true}
            sizes="48px"
            className="object-cover"
          />
        </div>
        <div>
          <p className={"sectionSubText text-gray-600 dark:text-ctnSecondaryDark"}>Let&apos;s Work Together</p>
          <h3 className={"sectionHeadText text-gray-900 dark:text-ctnPrimaryDark"}>Contact Me.</h3>
        </div>
      </div>

      {/* Verified contact quick links */}
      <div className="mt-5 flex flex-col gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">📧</span>
          <a href="mailto:ratanchaurasiya61@gmail.com" className="hover:text-primary transition-colors">
            ratanchaurasiya61@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">📱</span>
          <span>+91 63900 35039</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-primary font-bold">🔗</span>
          <a href="https://github.com/Ratanchaurasiya" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            github.com/Ratanchaurasiya
          </a>
        </div>
      </div>

      <form
        id="contact-form"
        ref={formRef}
        onSubmit={handleFormSubmit}
        className="mt-6 flex flex-col gap-6"
      >
        {/* Anti-spam Bot Check Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
          tabIndex="-1"
          autoComplete="off"
        />

        {/* Web3Forms Access Key (Optional) */}
        <input
          type="hidden"
          name="access_key"
          value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY_HERE"}
        />

        <label className="flex flex-col">
          <span className="text-gray-800 dark:text-ctnPrimaryDark font-medium mb-3 text-sm">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="What is your name?"
            className="bg-gray-100 dark:bg-bgPrimaryDark py-3.5 px-5 placeholder:text-gray-500 dark:placeholder:text-ctnSecondaryDark rounded-lg outline-none border border-gray-300 dark:border-gray-700/50 focus:border-primary font-medium text-gray-900 dark:text-ctnPrimaryDark text-sm"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-800 dark:text-ctnPrimaryDark font-medium mb-3 text-sm">
            Your Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="What is your email address?"
            className="bg-gray-100 dark:bg-bgPrimaryDark py-3.5 px-5 placeholder:text-gray-500 dark:placeholder:text-ctnSecondaryDark rounded-lg outline-none border border-gray-300 dark:border-gray-700/50 focus:border-primary font-medium text-gray-900 dark:text-ctnPrimaryDark text-sm"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-800 dark:text-ctnPrimaryDark font-medium mb-3 text-sm">
            Subject
          </span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Project inquiry, collaboration, etc."
            className="bg-gray-100 dark:bg-bgPrimaryDark py-3.5 px-5 placeholder:text-gray-500 dark:placeholder:text-ctnSecondaryDark rounded-lg outline-none border border-gray-300 dark:border-gray-700/50 focus:border-primary font-medium text-gray-900 dark:text-ctnPrimaryDark text-sm"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-800 dark:text-ctnPrimaryDark font-medium mb-3 text-sm">
            Your Message
          </span>
          <textarea
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="What would you like to discuss?"
            className="bg-gray-100 dark:bg-bgPrimaryDark py-3.5 px-5 placeholder:text-gray-500 dark:placeholder:text-ctnSecondaryDark rounded-lg outline-none border border-gray-300 dark:border-gray-700/50 focus:border-primary font-medium text-gray-900 dark:text-ctnPrimaryDark text-sm"
          />
        </label>

        {statusMsg && (
          <div
            className={`p-4 rounded-xl text-xs sm:text-sm font-semibold border ${
              statusMsg.type === "success"
                ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/40"
                : "bg-red-950/40 text-red-300 border-red-500/40"
            }`}
          >
            {statusMsg.text}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          <button
            id="form-submit-btn"
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:brightness-110 disabled:opacity-60 py-3.5 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-lg shadow-cyan-950/30 transition-all duration-300 cursor-pointer"
          >
            {loading ? "Sending Message..." : "Send Message"}
          </button>

          <a
            href="https://wa.me/916390035039?text=Hi%20Ratan,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 font-semibold text-sm transition-all duration-300 shadow-md cursor-pointer"
          >
            <span className="text-base">💬</span>
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </form>
    </motion.div>
  );
}

export default Contact;
