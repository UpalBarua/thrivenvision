import React from "react";

const TeamsOfService = () => {
  const teamService = [
    {
      id: 1,
      privacy: "Eligibility",
      description:
        "Our services are available to individuals who are 18 years or older. By using our services, you confirm that you are at least 18 years of age.",
    },
    {
      id: 2,
      privacy: "Services",
      description:
        "We provide video editing services to clients worldwide. By using our services, you agree to provide accurate and complete information about your project, and you agree to provide us with all the materials necessary for the project.",
    },
    {
      id: 2,
      privacy: "Payment",
      description:
        "Our services are available for a fee, which will be clearly outlined in our invoice. We require payment upfront before starting work on your project. We accept various forms of payment, including credit/debit cards and PayPal.",
    },
    {
      id: 2,
      privacy: "Copyright",
      description:
        "You represent and warrant that you own or have the necessary rights, licenses, and permissions to use all materials you provide to us for your project. You agree that any content we create for you is your property once we have received full payment.",
    },
    {
      id: 2,
      privacy: "Confidentiality",
      description:
        "We will keep all materials and information provided by you confidential and will not disclose them to any third party without your consent.",
    },
    {
      id: 2,
      privacy: "Revision and Approval",
      description:
        "We provide our clients with a reasonable number of revisions to ensure that the project meets their requirements. Once you approve the final version of the project, we will consider it complete, and any further changes will be subject to additional charges.",
    },
    {
      id: 2,
      privacy: "Liability",
      description:
        "We will not be held liable for any damages, including but not limited to lost profits, lost savings, or any incidental or consequential damages arising from the use of our services.",
    },
    {
      id: 2,
      privacy: "Termination",
      description:
        "We reserve the right to terminate our services at any time if we determine that you are not complying with our terms and conditions.",
    },
    {
      id: 2,
      privacy: "Modification",
      description:
        "We reserve the right to modify our terms and conditions at any time without prior notice. By using our services, you agree to be bound by any such modifications.",
    },
    {
      id: 2,
      privacy: "Governing Law",
      description:
        "These terms and conditions shall be governed by and construed in accordance with the laws of UK. Any disputes arising out of or relating to these terms and conditions shall be resolved exclusively in the courts of UK.",
    },
  ];
  return (
    <section className="mx-auto mt-14 max-w-full lg:max-w-6xl">
      <div className="p-4 lg:p-0">
        <h1 className="pb-6 text-3xl font-bold ">Terms of Service</h1>
        <p className="pb-4 text-[18px]">
          By accessing and using the services provided by DOUBLE R STUDIOS, you
          agree to the following terms and conditions:
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
