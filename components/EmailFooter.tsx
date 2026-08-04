import { Section, Img, Text, Row, Column, Link } from "@react-email/components";

export function EmailFooter() {
  return (
    <Section style={{ textAlign: "center" }}>
      <table style={{ width: "100%" }}>
        <tr style={{ width: "100%" }}>
          <td align="center">
            <Img
              alt="React Email logo"
              height="42"
              src="https://react.email/static/logo-without-background.png"
              width="42"
            />
          </td>
        </tr>
        <tr style={{ width: "100%" }}>
          <td align="center">
            <Text
              style={{
                marginTop: 8,
                marginBottom: 8,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: 600,
                color: "rgb(17,24,39)",
              }}
            >
              Acme corporation
            </Text>
          </td>
        </tr>
        <tr>
          <td align="center">
            <Text
              style={{
                marginTop: 2,
                marginBottom: 8,
                fontSize: 16,
                lineHeight: "24px",
                fontWeight: 600,
                color: "rgb(107,114,128)",
              }}
            >
              123 Main Street Anytown, CA 12345
            </Text>
          </td>
        </tr>
      </table>
    </Section>
  );
}
