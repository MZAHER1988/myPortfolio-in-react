import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "add13128-34aa-487f-95a7-8886dd61d13f");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

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
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-orange-600">
          {t("contact.title")}
        </h2>
        <form
          onSubmit={onSubmit}
          action="#"
          className="space-y-8 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.15)]"
        >
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
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-orange-600 text-white py-3 px-8 rounded-full text-lg
                               font-medium shadow-[0_0_20px_rgba(255,165,0,0.4)]
                               hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.6)]
                               transition-all duration-300"
          >
            {t("contact.sendButton")}
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

/*
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "add13128-34aa-487f-95a7-8886dd61d13f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      await Swal.fire({
        
  title: "Success!",
  text: "Your message has been sent successfully.",
  icon: "success"
});



      console.log("Success", res);
    }
    else {
      await Swal.fire({
        title: "Error!",
        text: "There was an error sending your message.",
        icon: "error"
      });
    }
    event.target.reset();
  }
*/
<div className="py-8 lg:py-16 mx-auto max-w-screen-md">
  <h2 className="text-4xl font-extrabold text-center mb-4 tracking-tight text-orange-500">
    Contact Me
  </h2>

  {/* Byt ACTION_URL till din Formspree-länk, t.ex. https://formspree.io/f/xyzabcd */}
  <form
    action="ACTION_URL"
    method="POST"
    className="space-y-8 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-[0_0_30px_rgba(255,165,0,0.15)]"
    noValidate
  >
    <div>
      <label
        htmlFor="name"
        className="block mb-2 text-xl font-medium text-white"
      >
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
        required
        placeholder="Your Name"
        className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                     border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                     focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                     transition-all duration-300"
      />
    </div>

    <div>
      <label
        htmlFor="email"
        className="block mb-2 text-xl font-medium text-white"
      >
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        required
        placeholder="youremail@example.com"
        className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                     border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                     focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                     transition-all duration-300"
      />
    </div>

    <div className="sm:col-span-2">
      <label
        htmlFor="message"
        className="block mb-2 text-xl font-medium text-white"
      >
        Your Message
      </label>
      <textarea
        id="message"
        name="message"
        rows={6}
        required
        autoComplete="off"
        placeholder="Write your message here..."
        className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-300
                     border border-white/20 shadow-[0_0_20px_rgba(255,165,0,0.4)]
                     focus:outline-none focus:ring-2 focus:ring-orange-400 focus:shadow-[0_0_30px_rgba(255,165,0,0.7)]
                     transition-all duration-300"
      />
    </div>

    {/* Honeypot mot spam (gömt fält) */}
    <input
      type="text"
      name="_gotcha"
      className="hidden"
      tabIndex={-1}
      autoComplete="off"
    />

    {/* Valfritt: eget ämne i mejlet */}
    <input type="hidden" name="_subject" value="New portfolio message" />

    {/* Statusmeddelande-plats (Formspree kan redirecta till tack-sida också) */}
    <div aria-live="polite" className="text-sm text-gray-300"></div>

    <button
      type="submit"
      className="inline-flex items-center justify-center bg-orange-500 text-white py-3 px-8 rounded-full text-lg
                   font-medium shadow-[0_0_20px_rgba(255,165,0,0.4)]
                   hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.6)]
                   transition-all duration-300"
    >
      Send Message
    </button>
  </form>

  {/* Sekundär länk för de som vill öppna sin e-postklient */}
  <p className="text-center mt-6 text-gray-400">
    or email me at{" "}
    <a
      href="mailto:zaher.fm39@gmail.com?subject=Portfolio%20contact"
      className="text-orange-400 underline"
    >
      zaher.fm39@gmail.com
    </a>
  </p>
</div>;
