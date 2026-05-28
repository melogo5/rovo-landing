import { NextRequest, NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory rate limiter: max 3 submissions per IP per hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }
  if (entry.count >= 3) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("answer" in body) ||
    typeof (body as Record<string, unknown>).answer !== "string" ||
    !(body as Record<string, unknown>).answer
  ) {
    return NextResponse.json({ error: "answer is required" }, { status: 400 });
  }

  const { answer, email, lang } = body as {
    answer: string;
    email?: unknown;
    lang?: unknown;
  };

  const emailStr =
    typeof email === "string" && EMAIL_RE.test(email) ? email : "—";
  const langStr =
    lang === "ru" || lang === "en" ? lang : "unknown";

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // In dev without credentials — still return success so UI works
    console.warn("[survey] TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID not set");
    return NextResponse.json({ success: true });
  }

  const text =
    `🏐 Новый ответ на опрос\n\n` +
    `Ответ: ${answer}\n` +
    `Email: ${emailStr}\n` +
    `Язык: ${langStr}`;

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }
    );

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error("[survey] Telegram error:", err);
      return NextResponse.json({ error: "Telegram error" }, { status: 502 });
    }
  } catch (err) {
    console.error("[survey] fetch error:", err);
    return NextResponse.json({ error: "Network error" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
