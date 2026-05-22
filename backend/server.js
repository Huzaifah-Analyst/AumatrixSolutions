import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)

app.use(cors({
  origin: [
    'https://aumatrixsolutions.vercel.app',
    'http://localhost:5173',
  ]
}))
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body

  if (!name || !email || !service || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    await resend.emails.send({
      from: 'Aumatix Contact Form <onboarding@resend.dev>',
      to: 'huzaifahnaseer377@gmail.com',
      subject: `New Inquiry: ${service} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #2563eb; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">New Project Inquiry</h2>
            <p style="color: #bfdbfe; margin: 4px 0 0;">via Aumatix Solutions website</p>
          </div>
          <div style="background: #f8fafc; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 100px;">Name</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2563eb;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Service</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${service}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Message</p>
              <p style="color: #0f172a; line-height: 1.6; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            <div style="margin-top: 24px; padding: 12px 16px; background: #eff6ff; border-radius: 6px;">
              <p style="margin: 0; font-size: 13px; color: #2563eb;">
                Reply directly to this email to respond to ${name}
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err)
    res.status(500).json({ error: 'Failed to send email' })
  }
})

app.get('/', (req, res) => res.json({ status: 'Aumatix backend running' }))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
