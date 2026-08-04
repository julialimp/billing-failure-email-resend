import { Resend } from "resend";
import { BillingFailureEmail } from "@/emails/BillingFailureEmail";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const invoicePath = path.join(
    process.cwd(),
    "attachments",
    "invoice.pdf",
  );

  const invoiceBuffer = fs.readFileSync(invoicePath);

  const { data, error } = await resend.emails.send({
    from: "Acme Billing <onboarding@resend.dev>",
    to: ["julia.limp@hotmail.com"],
    subject: "Action Required: Payment failed",
    react: BillingFailureEmail({ name: "Julia", invoice: "INV-123", amount: 100 }),
    attachments: [
      {
        filename: "invoice.pdf",
        content: invoiceBuffer,
      },
    ],
  });

  if (error) {
    console.error("Error sending email:", error);
    return new Response("Error sending email", { status: 500 });
  }
  console.log(data);
  return new Response("Email sent successfully", { status: 200 });
}
