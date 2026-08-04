import { Resend } from "resend";
import { BillingFailureEmail } from "@/emails/BillingFailure";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const invoicePath = path.join(
    process.cwd(),
    "attachments",
    "test-attachment.txt",
  );

  const invoiceBuffer = fs.readFileSync(invoicePath);

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["julia.limp@hotmail.com"],
    subject: "Payment failed",
    react: BillingFailureEmail({ name: "Julia" }),
    attachments: [
      {
        filename: "test-attachment.txt",
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
