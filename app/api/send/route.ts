import { Resend } from "resend";
import { BillingFailureEmail } from "@/emails/BillingFailure";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const invoicePath = path.join(
    process.cwd(),
    "attachments",
    "Invoice-resend.pdf",
  );

  const invoiceBuffer = fs.readFileSync(invoicePath);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["julia.limp@hotmail.com"],
    subject: "Payment failed",
    react: BillingFailureEmail({ name: "Julia", invoice: "INV-123", amount: 100 }),
    attachments: [
      {
        filename: "Invoice-resend.pdf",
        content: invoiceBuffer,
      },
    ],
  });

  if (error) {
    console.error("Error sending email:", error);
    return new Response("Error sending email", { status: 500 });
  }

  return new Response("Email sent successfully", { status: 200 });
}
