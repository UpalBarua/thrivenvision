import React from "react";

const PrivacyPolicy = () => {
  const allPrivacy = [
    {
      id: 1,
      privacy: "Information Collection",
      description:
        "We gather your personal details voluntarily given through forms, email, and direct contact, including name, email, phone number, and other information. We also automatically collect data like your IP address, browser type, and browsing activity when you visit our website.",
    },
    {
      id: 2,
      privacy: "Information Use",
      description:
        "The personal information we collect is primarily used to offer and improve our services, to respond to your inquiries and requests, and to provide you with information and updates about our services. With your consent, we may also use your contact information to send you marketing communications and promotional offers.",
    },
    {
      id: 3,
      privacy: "Information Protection",
      description:
        "We employ various security measures to protect your personal information from unauthorized access, use, or disclosure. This includes the use of industry standard encryption technologies and maintaining physical, electronic, and procedural safeguards in line with applicable laws and standards.",
    },
    {
      id: 4,
      privacy: "Information Sharing",
      description:
        "We do not sell, rent, or trade your personal information. We may share it with trusted partners to help run our website and business, provided they keep it confidential. Your information may also be disclosed if necessary to comply with the law, enforce our policies, or protect rights and safety",
    },
    {
      id: 5,
      privacy: "Cookies",
      description:
        "Our website uses cookies to improve your experience and analyze site traffic. You can disable cookies in your browser settings, but this may affect site functionality.",
    },
    {
      id: 6,
      privacy: "Updates",
      description:
        "We reserve the right to update this Privacy Policy at any time. When we do, we will post a notification on our website. We encourage you to periodically review this page for the latest information on our privacy practices.",
    },
  ];
  return (
    <section className="mx-auto mt-14 max-w-full lg:max-w-6xl">
      <div className="p-4 lg:p-0">
        <h1 className="pb-6 text-5xl font-bold">Privacy Policy</h1>
        <p className="pb-4 text-[20px]">
          At <span className="font-semibold">thrivenvision</span>, we are
          committed to safeguarding the privacy and security of the personal
          information of our clients and website visitors. This Privacy Policy
          describes how we collect, use, and protect the personal information
          you provide to us when you use our website and services.
        </p>
      </div>
      <div>
        {allPrivacy?.map((privacy) => (
          <div className="pb-4" key={privacy?.id}>
            <p className="p-4 text-[18px] lg:p-0">
              <span className="font-semibold text-pink-500">
                {privacy?.privacy}
              </span>
              : {privacy?.description}
            </p>
          </div>
        ))}
      </div>
      <p>
        Thank you for choosing{" "}
        <span className="pt-6 text-[20px] font-semibold">thrivenvision</span>.
        Your privacy is important to us, and we are committed to protecting the
        personal information you share with us
      </p>
    </section>
  );
};

export default PrivacyPolicy;
