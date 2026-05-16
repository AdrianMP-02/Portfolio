import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from '@react-email/components';

interface ContactConfirmationProps {
  name: string;
  lang: 'es' | 'en';
}

const CONTENT = {
  es: {
    preview: 'He recibido tu mensaje',
    title: '¡Mensaje recibido!',
    thanks: 'Gracias por escribirme, {name}. He recibido tu mensaje y te responderé lo antes posible.',
    response: 'Normalmente respondo en un plazo de 24 a 48 horas.',
    social: 'Mientras tanto, puedes echar un vistazo a mi portfolio o conectarte conmigo en LinkedIn:',
    link: 'Ver portfolio',
    footer: 'Adrián M. P. — Full-Stack Developer',
  },
  en: {
    preview: 'I received your message',
    title: 'Message received!',
    thanks: 'Thank you for reaching out, {name}. I have received your message and will get back to you as soon as possible.',
    response: 'I usually reply within 24 to 48 hours.',
    social: 'In the meantime, feel free to check out my portfolio or connect with me on LinkedIn:',
    link: 'View portfolio',
    footer: 'Adrián M. P. — Full-Stack Developer',
  },
};

export default function ContactConfirmation({ name, lang = 'es' }: ContactConfirmationProps) {
  const t = CONTENT[lang];

  return (
    <Html>
      <Head />
      <Preview>{t.preview}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{t.title}</Heading>
          <Text style={paragraph}>{t.thanks.replace('{name}', name)}</Text>
          <Text style={paragraph}>{t.response}</Text>

          <Hr style={hr} />

          <Text style={muted}>{t.social}</Text>

          <Link href="https://adrianmp.dev" style={button}>
            {t.link}
          </Link>

          <Hr style={hr} />

          <Text style={footer}>{t.footer}</Text>
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
  margin: '0 0 16px',
  letterSpacing: '-0.03em',
};

const paragraph = {
  color: '#cbd5e1',
  fontSize: '14px',
  lineHeight: '1.7',
  margin: '0 0 12px',
};

const muted = {
  color: '#64748b',
  fontSize: '13px',
  lineHeight: '1.6',
  margin: '0 0 16px',
};

const hr = {
  borderColor: '#1a1a1a',
  margin: '24px 0',
};

const button = {
  display: 'inline-block',
  backgroundColor: '#ffffff',
  color: '#050505',
  fontSize: '13px',
  fontWeight: '700',
  textDecoration: 'none',
  padding: '12px 24px',
  borderRadius: '12px',
};

const footer = {
  color: '#475569',
  fontSize: '12px',
  margin: '0',
};
