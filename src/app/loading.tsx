import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Loader2 className="h-[3rem] w-[3rem] animate-spin text-primary" />
    </div>
  );
}
