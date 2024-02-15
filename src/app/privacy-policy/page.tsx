import React from "react";

const PrivacyPolicy = () => {
  const allPrivacy = [
    {
      id: 1,
      privacy: "Information Collection",
      description:
        "We collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and other contact information. We also collect information about your device, browser, and IP address when you access our website.",
    },
    {
      id: 2,
      privacy: "Information Use",
      description:
        "We use your personal information to provide you with our services, respond to your inquiries, and improve our website. We may also use your information to send you marketing materials and promotional offers, but only if you have given us your consent to do so.",
    },
    {
      id: 2,
      privacy: "Information Protection",
      description:
        "We take appropriate measures to protect your personal information from unauthorized access, disclosure, or destruction. We use industry-standard security protocols and techniques to protect your personal information, including SSL encryption.",
    },
    {
      id: 2,
      privacy: "Information Sharing",
      description:
        "We do not sell, rent, or trade your personal information to third parties. We may share your personal information with our service providers or partners, but only to the extent necessary to provide you with our services.",
    },
    {
      id: 2,
      privacy: "Cookies",
      description:
        "We use cookies to enhance your user experience and to collect information about your usage of our website. You can disable cookies in your browser settings if you prefer.",
    },
    {
      id: 2,
      privacy: "Updates",
      description:
        "We may update this Privacy Policy from time to time. We encourage you to review this policy periodically to stay informed about how we are protecting your personal information.",
    },
    {
      id: 2,
      privacy: "Contact Us",
      description:
        "If you have any questions about this Privacy Policy or our practices regarding your personal information, please contact us at rafayat@doublestudios.net.",
    },
  ];
  return (
    <section className="mx-auto mt-14 max-w-full lg:max-w-6xl">
      <h1 className="pb-6 text-3xl font-bold">Privacy Policy</h1>
      <p className="pb-4 text-[18px]">
        At DOUBLE R STUDIOS, we take your privacy seriously. This Privacy Policy
        outlines how we collect, use, and protect the personal information you
        provide to us through our website.
      </p>
      <div>
        {allPrivacy?.map((privacy) => (
          <div className="pb-4" key={privacy?.id}>
            <p className="text-[18px]">
              <span className="font-semibold text-pink-500">
                {privacy?.privacy}
              </span>
              : {privacy?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyPolicy;
