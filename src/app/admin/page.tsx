import AddTrustedCompany from "@/components/addTrustCompany";
import { PricingTable } from "@/components/packages-table";
import { getPricingPackagesFromDB } from "@/lib/services";

export default async function AdminPage() {
  const pricingPackages = await getPricingPackagesFromDB();

  return (
    <main className="container relative z-10 mx-auto max-w-7xl space-y-10 px-2 sm:px-4">
      {/* <PricingTable pricingPackages={pricingPackages} /> */}
      {/* <AddTrustedCompany /> */}
    </main>
  );
}
