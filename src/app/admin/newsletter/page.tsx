import { NewsletterTable } from "@/components/wewsletter-table";
import { getAllNewsletterEmails } from "@/lib/services";

export default async function Newsletter() {
  const newsletterEmails = await getAllNewsletterEmails();

  return (
    <section>
      <div className="flex items-center justify-between pb-4">
        <h2 className="text-2xl font-semibold tracking-tight">Newsletters</h2>
      </div>
      <NewsletterTable emails={newsletterEmails} />
    </section>
  );
}