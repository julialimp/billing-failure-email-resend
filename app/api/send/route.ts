import { Resend } from "resend";
import { BillingFailureEmail } from "@/emails/BillingFailure";

const resend = new Resend(process.env.RESEND_API_KEY);

const { data, error } = await resend.emails.send({
  from: 'Acme <onboarding@resend.dev>',
  to: ['julia.limp@hotmail.com'],
  subject: 'Payment failed',
  react: BillingFailureEmail({ name: 'Julia' }),
});