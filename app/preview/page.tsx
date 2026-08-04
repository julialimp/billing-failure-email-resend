import { BillingFailureEmail } from "@/emails/BillingFailureEmail";

export default function PreviewPage() {
  return BillingFailureEmail({
    name: "Julia Limp",
    invoice: "INV-12345",
    amount: 29,
  });
}