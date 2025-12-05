import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission status
  const [result, setResult] = useState(null); // State for submission result, if needed
  const { t } = useTranslation(); // Translation hook

  // Handle form submission, sending data to Web3Forms
  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);

    // Prepare form data and send to Web3Forms API
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "add13128-34aa-487f-95a7-8886dd61d13f");

      // Send form data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // Handle response from Web3Forms, including success and error alerts
      const data = await response.json();
      if (data.success) {
        setResult(t("alert.successText"));
        event.target.reset();
        await Swal.fire({
          title: t("alert.successTitle"),
          text: t("alert.successText"),
          footer: t("alert.successFooter"),
          icon: "success",
        });
      } else {
        setResult(t("alert.errorText"));
        await Swal.fire({
          title: t("alert.errorTitle"),
          text: t("alert.errorText"),
          footer: t("alert.errorFooter"),
          icon: "error",
        });
      }
    } catch (error) {
      setResult(t("alert.networkText"));
      await Swal.fire({
        title: t("alert.networkTitle"),
        text: t("alert.networkText"),
        footer: t("alert.networkFooter"),
        icon: "error",
      });
    } finally {
      // Ensure submission state is reset after processing, regardless of outcome
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden scroll-mt-20"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-orange-600">
          {t("contact.title")}
        </h2>
        <p className="mb-12 text-center text-white text-lg p-4">
          {t("contact.description")}
        </p>
        {/* Contact Form */}
        <form
          onSubmit={onSubmit}
          action="#"
          className="space-y-8 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.15)]"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-xl font-medium text-white"
            >
              {t("contact.fields.name.label")}
            </label>
            <input
              type="text"
              id="name"
              placeholder={t("contact.fields.name.placeholder")}
              name="name"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                         border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                         transition-all duration-300"
              autoComplete="name"
              required
            />
          </div>
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              {t("contact.fields.email.label")}
            </label>
            <input
              type="email"
              id="email"
              placeholder={t("contact.fields.email.placeholder")}
              name="email"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                         border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                         transition-all duration-300"
              autoComplete="email"
              required
            />
          </div>
          {/* Message Field */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              {t("contact.fields.message.label")}
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder={t("contact.fields.message.placeholder")}
              name="message"
              className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                transition-all duration-300"
              autoComplete="off"
              required
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-orange-600 text-white py-3 px-8 rounded-full text-lg
                               font-medium shadow-[0_0_20px_rgba(255,165,0,0.4)]
                               hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.6)]
                               transition-all duration-300"
          >
            {isSubmitting ? t("contact.sending") : t("contact.sendButton")}
          </button>
        </form>
        {/* Another link for those who prefer to open their email client */}
        <p className="text-center mt-6 text-gray-400">
          {t("contact.orEmail")}{" "}
          <a
            href="mailto:zaher.fm39@gmail.com?subject=Portfolio%20contact"
            className="text-orange-500 underline"
          >
            {t("contact.emailAddress")}
          </a>
        </p>
      </div>
    </section>
  );
}
