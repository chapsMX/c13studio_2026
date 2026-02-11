import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { nombre, email, mensaje } = await request.json()

    // Validar datos
    if (!nombre || !email || !mensaje) {
      return Response.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      )
    }

    // Enviar email a admin
    await resend.emails.send({
      from: 'noreply@c13studio.mx',
      to: process.env.ADMIN_EMAIL || 'info@c13studio.mx',
      replyTo: email,
      subject: `Nuevo mensaje de contacto: ${nombre}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Enviar email de confirmación al usuario
    await resend.emails.send({
      from: 'noreply@c13studio.mx',
      to: email,
      subject: 'Hemos recibido tu mensaje - c13studio',
      html: `
        <h2>Gracias por contactarnos</h2>
        <p>Hola ${nombre},</p>
        <p>Hemos recibido tu mensaje y pronto nos pondremos en contacto contigo.</p>
        <p>Equipo c13studio</p>
      `,
    })

    return Response.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error al enviar email:', error)
    return Response.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    )
  }
}
