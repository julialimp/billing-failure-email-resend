import { Body, Container, Heading, Html, Text } from "@react-email/components";

export function BillingFailureEmail({ name }: { name: string }) {
  return (
    <Html>
        <Body>
            <Container>
                <Heading>
                    Payment Failed
                </Heading>
                <Text>
                    Hello {name},
                </Text>
                <Text>
                    We were unable to process your recent payment. Please update your billing information to avoid any service interruptions.
                </Text>
            </Container>
        </Body>
    </Html>
  );
}
