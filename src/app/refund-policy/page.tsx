import React from "react";

const RefundPolicy = () => {
  return (
    <section className="mx-auto mt-14 max-w-full lg:max-w-6xl">
      <h1 className="pb-6 text-3xl font-bold">Refund Policy</h1>
      <p className="pb-4 text-[18px]">
        We want all our clients to be satisfied with the services we provide. If
        for any reason you are not satisfied with our work, please contact us as
        soon as possible, and we will do our best to resolve the issue. However,
        if we are unable to satisfy your requirements and you decide to cancel
        the service, we offer the following refund policy:
      </p>
      <p className="pb-4 text-[18px]">
        <span className=" font-semibold">Full refund:</span> If you cancel the
        service before we have started working on your project, we will issue a
        full refund of the amount paid.
      </p>
      <p className="pb-4 text-[18px]">
        <span className=" font-semibold">Partial refund:</span> If we have
        already started working on your project but have not completed it, we
        will issue a partial refund based on the work completed.
      </p>
      <p className="pb-4 text-[18px]">
        <span className=" font-semibold">No refund:</span> If we have completed
        the project and delivered it to you, no refund will be issued.
      </p>

      <p className="pb-4 text-[18px]">
        {" "}
        Please note that the refund will be processed in the same payment method
        used during the purchase. We aim to process refunds within 7-10 business
        days.
      </p>
      <p className="pb-4 text-[18px]">
        We reserve the right to make changes to this policy without prior
        notice. By purchasing our services, you agree to the terms and
        conditions of this policy.
      </p>
      <p className="pb-4 text-[18px]">
        If you have any questions or concerns about our services or refund
        policy, please contact us at rafayat@doublerstudios.net. We will be
        happy to assist you in any way we can.
      </p>
    </section>
  );
};

export default RefundPolicy;
