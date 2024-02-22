"use client";
import { Hero } from "@/components/hero";
import Portfolio from "@/components/portfolio";
import { PricingPackages } from "@/components/pricing-packages";
import { Services } from "@/components/services";
import TrustedCompany from "@/components/trustedCompany";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ClipboardPlus, FileText } from "lucide-react";
import { useState } from "react";

import AddTrustedCompany from "@/components/addTrustCompany";
import AdminAllTrustedCompany from "@/components/Admin-all-trustedComapny";
import { PortfolioForm } from "@/components/portfolio-form";

export default function HomePage() {
  const [dashboard, setDashboard] = useState<string | null>(null);
  console.log(dashboard);
  return (
    <main className="container relative z-10 mx-auto max-w-7xl space-y-10 px-2 sm:px-4">
      <Hero />
      <Services />
      <PricingPackages />
      <WhyChooseUs />
      <TrustedCompany />
      <AddTrustedCompany />

      {/* <Portfolio /> */}

      {/* admin layout */}
      {/* <div className="mt-24 flex flex-row gap-14  ">
        <div className="col-span-4 flex flex-col gap-6 ">
          <button
            className="flex gap-4 rounded-md bg-primary p-4 font-bold"
            onClick={() => setDashboard("add-trusted-company")}
          >
            <ClipboardPlus /> Company
          </button>

          <button
            className="flex gap-4 rounded-md  bg-primary p-4 font-bold"
            onClick={() => setDashboard("all-trusted-company")}
          >
            <FileText /> All Company
          </button>

          <button
            className="flex gap-4 rounded-md  bg-primary p-4 font-bold"
            onClick={() => setDashboard("portfolio-form")}
          >
            <ClipboardPlus /> Add Portfolio
          </button>

          <button
            className="flex gap-4 rounded-md  bg-primary p-4 font-bold"
            onClick={() => setDashboard("admin-all-portfolio")}
          >
            <FileText />
            All Portfolio
          </button>
        </div>

        <div className="w-[500px] ">
          {dashboard === "null" && (
            <>
              <h1 className="text-danger">Welcome To Dashboard</h1>{" "}
            </>
          )}
          {dashboard === "add-trusted-company" && (
            <>
              <AddTrustedCompany />{" "}
            </>
          )}
          {dashboard === "all-trusted-company" && (
            <>
              <AdminAllTrustedCompany />{" "}
            </>
          )}
          {dashboard === "portfolio-form" && (
            <>
              <PortfolioForm />{" "}
            </>
          )}
        </div>
      </div> */}

      {/* <AddTrustedCompany /> */}
      {/* <AdminAllTrustedCompany /> */}
    </main>
  );
}
