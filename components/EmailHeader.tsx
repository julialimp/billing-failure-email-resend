import { Section, Row, Column, Img, Link } from "@react-email/components";

export function EmailHeader() {
  return (
    <Section
      style={{
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <Row>
        <Column align="center">
          <Img
            alt="React Email logo"
            height="42"
            src="https://react.email/static/logo-without-background.png"
          />
        </Column>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Column align="center">
          <table>
            <tr>
              <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                <Link
                  href="https://resend.com/about"
                  style={{
                    color: "rgb(75,85,99)",
                    textDecoration: "none",
                  }}
                >
                  About
                </Link>
              </td>
              <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                <Link
                  href="https://resend.com/blog"
                  style={{
                    color: "rgb(75,85,99)",
                    textDecoration: "none",
                  }}
                >
                  Blog
                </Link>
              </td>
              <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                <Link
                  href="https://resend.com/handbook"
                  style={{
                    color: "rgb(75,85,99)",
                    textDecoration: "none",
                  }}
                >
                  Handbook
                </Link>
              </td>
              <td style={{ paddingRight: 8, paddingLeft: 8 }}>
                <Link
                  href="https://resend.com/docs/introduction"
                  style={{
                    color: "rgb(75,85,99)",
                    textDecoration: "none",
                  }}
                >
                  Docs
                </Link>
              </td>
            </tr>
          </table>
        </Column>
      </Row>
    </Section>
  );
}
