import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';

interface ContactNotificationProps {
  name: string;
  email: string;
  message: string;
  date: string;
}

export default function ContactNotification({ name, email, message, date }: ContactNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nuevo mensaje de contacto</Heading>
          <Text style={subtitle}>Recibido el {date}</Text>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Nombre</Text>
            <Text style={value}>{name}</Text>
          </Section>

          <Section style={section}>
            <Text style={label}>Email</Text>
            <Text style={value}>{email}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Text style={label}>Mensaje</Text>
            <Text style={messageStyle}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#050505',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  padding: '40px 0',
};

const container = {
  backgroundColor: '#0a0a0a',
  border: '1px solid #1a1a1a',
  borderRadius: '16px',
  margin: '0 auto',
  maxWidth: '520px',
  padding: '40px 32px',
};

const h1 = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: '900',
  lineHeight: '1.2',
  margin: '0 0 8px',
  letterSpacing: '-0.03em',
};

const subtitle = {
  color: '#64748b',
  fontSize: '13px',
  margin: '0 0 24px',
};

const hr = {
  borderColor: '#1a1a1a',
  margin: '24px 0',
};

const section = {
  marginBottom: '20px',
};

const label = {
  color: '#64748b',
  fontSize: '11px',
  fontWeight: '700',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.15em',
  margin: '0 0 4px',
};

const value = {
  color: '#e2e8f0',
  fontSize: '15px',
  margin: '0',
};

const messageStyle = {
  color: '#cbd5e1',
  fontSize: '14px',
  lineHeight: '1.7',
  margin: '0',
  whiteSpace: 'pre-wrap' as const,
};
