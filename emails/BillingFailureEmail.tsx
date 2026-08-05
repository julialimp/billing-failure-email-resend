import { Body, Container, Heading, Html, Text } from "@react-email/components";
import { EmailHeader } from "@/components/EmailHeader";
import { EmailFooter } from "@/components/EmailFooter";
import { Button, Link, Section } from "react-email";

export function BillingFailureEmail({
  name,
  invoice,
  amount,
}: {
  name: string;
  invoice: string;
  amount: number;
}) {
  return (
    <Html>
      <Body>
        <Container style={{ backgroundColor: "#f9f9f9" }}>
          <EmailHeader />

          <Heading style={{ textAlign: "center", fontSize: 20 }}>
            Action Required: Payment Failed
          </Heading>
          <Text>Hello {name},</Text>
          <Text>
            We couldn't process your payment for the invoice below. To avoid any
            interruption to your service, please update your payment method.
          </Text>

          <Section
            style={{
              marginTop: 2,
              marginBottom: 10,
              padding: 5,
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            <Heading style={{ fontSize: 14, fontWeight: 600 }}>
              Invoice Summary
            </Heading>
            <Text style={{ margin: 0, padding: 0 }}>
              Invoice Number: {invoice}
            </Text>
            <Text style={{ margin: 0, padding: 0 }}>Amount Due: ${amount}</Text>
            <Text style={{ margin: 0, padding: 0 }}>
              Status: Payment Failed
            </Text>
          </Section>

          <Button
            href="https://example.com/update-payment"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: 12,
              fontWeight: 600,
              borderRadius: 8,
              textAlign: "center",
              backgroundColor: "rgb(79,70,229)",
              color: "rgb(255,255,255)",
            }}
          >
            Update Payment Method
          </Button>

          <Text>
            If you've recently updated your payment method, you can safely
            ignore this email.
          </Text>

          <Text>
            Need help?{" "}
            <Link href="https://example.com/contact-support">
              Contact Support
            </Link>
          </Text>
          <Text style={{ fontWeight: 600, fontStyle: "italic" }}>
            Note:{" "}
            <span style={{ fontWeight: 400 }}>
              This billing failure email was created as part of the Customer
              Success Engineer take-home challenge. You can view the complete
              Next.js + React Email implementation on{" "}
            </span>
            <Link href="https://github.com/julialimp/billing-failure-email-resend">
              Github Repo
            </Link>
          </Text>
          <Text>
            For a detailed overview of the take-home process, ideation, and
            execution, check out this{" "}
            <Link href="https://www.loom.com/share/d32b43ab8502487ca5a7335e9c647407">Loom video</Link>
          </Text>

          <EmailFooter />
        </Container>
      </Body>
    </Html>
  );
}
