"use server";

import nodemailer from "nodemailer";

const FALLBACK_RESPONSE = {
  ok: false,
  message: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się telefonicznie.",
};

export async function sendContact(prevState, formData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const phone = formData.get("phone")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Uzupełnij imię, e-mail oraz treść wiadomości.",
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      ok: false,
      message: "Podaj poprawny adres e-mail.",
    };
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = process.env.SMTP_SECURE !== "false";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const recipient = process.env.CONTACT_RECEIVER || process.env.CONTACT_EMAIL;
  const fromAddress = process.env.CONTACT_EMAIL || user;

  if (!host || !user || !pass || !fromAddress || !recipient) {
    console.error("Brak konfiguracji SMTP w zmiennych środowiskowych.");
    return FALLBACK_RESPONSE;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });

  const mailBody = [
    `Imię: ${name}`,
    `E-mail: ${email}`,
    phone ? `Telefon: ${phone}` : null,
    "---",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await transporter.sendMail({
      to: recipient,
      from: `${name} <${fromAddress}>`,
      replyTo: email,
      subject: `Nowe zapytanie ze strony — ${name}`,
      text: mailBody,
      html: mailBody.replaceAll("\n", "<br />"),
    });

    return {
      ok: true,
      message: "Dziękujemy! Twoja wiadomość została wysłana.",
    };
  } catch (error) {
    console.error("Błąd wysyłki wiadomości:", error);
    return FALLBACK_RESPONSE;
  }
}
