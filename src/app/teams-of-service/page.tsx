import React from "react";

const TeamsOfService = () => {
  const teamService = [
    {
      id: 1,
      privacy: "Eligibility",
      description:
        "Our services are accessible only to those who are at least 18 years of age. Byengaging with our services, you confirm that you meet this age requirement.",
    },
    {
      id: 2,
      privacy: "Services",
      description:
        "thrivenvision offers a broad spectrum of digital services to a global clientele. In using our services, you commit to providing truthful and comprehensive details about your pro ect requirements and agree to supply all necessary materials for the successful completion of your project.",
    },
    {
      id: 3,
      privacy: "Payment",
      description:
        "Access to our services incurs a charge, the details of which will be provided in our service quote. We require full payment in advance of project initiation",
    },
    {
      id: 4,
      privacy: "Copyright",
      description:
        "You guarantee that you hold or possess the requisite licenses, rights, and permissions for any material you provide for your project. You agree that the output generated by us becomes your property upon full settlement of payment",
    },
    {
      id: 5,
      privacy: "Confidentiality",
      description:
        "thrivenvision commits to maintaining the confidentiality of all materials and information you provide and will not disclose such information to any third parties without your explicit consent.",
    },
    {
      id: 6,
      privacy: "Revision and Approval",
      description:
        "We offer a reasonable number of revisions to ensure the final product aligns with your specifications. Final approval of the project by you will signify the project's completion, and any subsequent modifications may incur additional fees.",
    },
    {
      id: 7,
      privacy: "Liability",
      description:
        "thrivenvision shall not be liable for any direct or indirect damages, including but not limited to loss of profits, savings, or incidental or consequential damages, that may result from utilizing our services.",
    },
    {
      id: 8,
      privacy: "Termination",
      description:
        "We reserve the right to terminate our services at any discretion should we ascertain non-compliance with our terms and conditions on your part",
    },
    {
      id: 9,
      privacy: "Modification",
      description:
        "thrivenvision reserves the right to alter these terms and conditions at any moment, without prior notification. By continuing to use our services, you consent to be bound by such modifications..",
    },
  ];
  return (
    <section className="mx-auto mt-14 max-w-full lg:max-w-6xl">
      <div className="p-4 lg:p-0">
        <h1 className="pb-6 text-3xl font-bold ">Terms of Service</h1>
        <p className="pb-4 text-[18px]">
          By accessing and using the services provided by{" "}
          <span className="font-bold">thrivenvision</span>, you agree to the
          following terms and conditions
        </p>
      </div>
      <div>
        {teamService?.map((team) => (
          <div className="pb-4" key={team?.id}>
            <p className="p-4 text-[18px] lg:p-0">
              <span className="font-semibold text-pink-500">
                {team?.privacy}
              </span>
              : {team?.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsOfService;
