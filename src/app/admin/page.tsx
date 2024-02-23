import { PricingTable } from "@/components/packages-table";
import AddTrustedCompany from "@/components/addTrustCompany";

export default function AdminPage() {
  return (
    <main className="container relative z-10 mx-auto max-w-7xl space-y-10 px-2 sm:px-4">
      <PricingTable />
      <AddTrustedCompany />
    </main>
  );
}
