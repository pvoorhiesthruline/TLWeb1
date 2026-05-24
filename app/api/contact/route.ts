import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // Instantiate lazily so build succeeds without RESEND_API_KEY in CI
  const resend = new Resend(process.env.RESEND_API_KEY)

  // Parse body — return JSON error if malformed so client never sees empty response
  let body: {
    name?: string
    email?: string
    organization?: string
    interests?: string[]
    message?: string
  }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const { name, email, organization, interests, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
  }

  const interestsList =
    interests && interests.length > 0
      ? interests.map((i) => `<li>${i}</li>`).join('')
      : '<li>—</li>'

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New inquiry — Thruline Design</title>
</head>
<body style="margin:0;padding:0;background:#F3F1EA;font-family:'Inter',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F3F1EA;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#FAFAF7;border-radius:8px;border:1px solid rgba(11,18,32,0.08);overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0E1530;padding:28px 36px;">
              <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:0.06em;text-transform:uppercase;color:#A78BFA;">
                Thruline Design · New Inquiry
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 36px 28px;">

              <h1 style="margin:0 0 6px;font-family:'Inter',Arial,sans-serif;font-size:22px;font-weight:600;letter-spacing:-0.02em;color:#0B1220;">
                ${name}
              </h1>
              <p style="margin:0 0 28px;font-family:'Inter',Arial,sans-serif;font-size:14px;color:rgba(11,18,32,0.55);">
                ${email}${organization ? ` · ${organization}` : ''}
              </p>

              <!-- Divider -->
              <div style="height:1px;background:rgba(11,18,32,0.08);margin-bottom:28px;"></div>

              <!-- Interests -->
              <p style="margin:0 0 8px;font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#6B4FD8;">
                Interested in
              </p>
              <ul style="margin:0 0 28px;padding-left:20px;font-family:'Inter',Arial,sans-serif;font-size:14px;color:#0B1220;line-height:1.7;">
                ${interestsList}
              </ul>

              <!-- Message -->
              <p style="margin:0 0 8px;font-family:'Inter',Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;color:#6B4FD8;">
                Message
              </p>
              <p style="margin:0 0 28px;font-family:'Inter',Arial,sans-serif;font-size:15px;line-height:1.65;color:#0B1220;white-space:pre-wrap;">
                ${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
              </p>

              <!-- Divider -->
              <div style="height:1px;background:rgba(11,18,32,0.08);margin-bottom:24px;"></div>

              <!-- Reply CTA -->
              <a href="mailto:${email}?subject=Re: Your inquiry to Thruline Design"
                 style="display:inline-block;background:#6B4FD8;color:#FAFAF7;font-family:'Inter',Arial,sans-serif;font-size:13px;font-weight:500;text-decoration:none;padding:10px 20px;border-radius:999px;">
                Reply to ${name.split(' ')[0]}
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F3F1EA;padding:18px 36px;border-top:1px solid rgba(11,18,32,0.08);">
              <p style="margin:0;font-family:'Inter',Arial,sans-serif;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:rgba(11,18,32,0.40);">
                thrulinedesign.co · Sent from the contact form
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

  try {
    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'Thruline Design <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'hello@thrulinedesign.co',
      replyTo: email,
      subject: `New inquiry from ${name}${organization ? ` · ${organization}` : ''}`,
      html,
    })

    if (error) {
      console.error('[contact] Resend error:', error)
      return NextResponse.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] Unexpected error:', err)
    return NextResponse.json({ error: 'Unexpected error. Please try again.' }, { status: 500 })
  }
}
