import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactNotification from '@/emails/ContactNotification';

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      );
    }

    if (!resend) {
      console.warn('[Contact] RESEND_API_KEY no configurada');
      return NextResponse.json(
        { error: 'Servicio de email no configurado' },
        { status: 500 }
      );
    }

    const date = new Date().toLocaleString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'adrian.m.p.02022002@gmail.com',
      subject: `Nuevo mensaje de ${name}`,
      react: ContactNotification({ name, email, message, date }),
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: 'Mensaje recibido correctamente' },
      { status: 200 }
    );
  } catch (err) {
    console.error('[Contact] Error:', err);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
