import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentRequest {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
  virtualConsultation: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const appointmentData: AppointmentRequest = await req.json();
    console.log("Appointment request received:", appointmentData);

    // Send email to clinic
    const clinicEmailResponse = await resend.emails.send({
      from: "VitalCare Wellness <onboarding@resend.dev>",
      to: ["abhi.triloki@gmail.com"],
      subject: "New Appointment Request",
      html: `
        <h1>New Appointment Request</h1>
        <p><strong>Name:</strong> ${appointmentData.name}</p>
        <p><strong>Phone:</strong> ${appointmentData.phone}</p>
        <p><strong>Email:</strong> ${appointmentData.email}</p>
        <p><strong>Preferred Date:</strong> ${appointmentData.date}</p>
        <p><strong>Preferred Time:</strong> ${appointmentData.time}</p>
        <p><strong>Service:</strong> ${appointmentData.service}</p>
        <p><strong>Virtual Consultation:</strong> ${appointmentData.virtualConsultation ? 'Yes' : 'No'}</p>
        ${appointmentData.notes ? `<p><strong>Notes:</strong> ${appointmentData.notes}</p>` : ''}
      `,
    });

    console.log("Clinic email sent:", clinicEmailResponse);

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "VitalCare Wellness <onboarding@resend.dev>",
      to: [appointmentData.email],
      subject: "Appointment Request Received",
      html: `
        <h1>Thank you for booking with VitalCare Wellness!</h1>
        <p>Dear ${appointmentData.name},</p>
        <p>We have received your appointment request and will get back to you shortly to confirm your booking.</p>
        <h3>Your Request Details:</h3>
        <p><strong>Preferred Date:</strong> ${appointmentData.date}</p>
        <p><strong>Preferred Time:</strong> ${appointmentData.time}</p>
        <p><strong>Service:</strong> ${appointmentData.service}</p>
        <p><strong>Virtual Consultation:</strong> ${appointmentData.virtualConsultation ? 'Yes' : 'No'}</p>
        <p>If you have any questions, feel free to call us at +91 9876543210 or reply to this email.</p>
        <p>Best regards,<br>VitalCare Wellness Team</p>
      `,
    });

    console.log("User confirmation email sent:", userEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Appointment request sent successfully"
      }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-appointment function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }), {
      status: 500,
      headers: { 
        "Content-Type": "application/json", 
        ...corsHeaders 
      },
    });
  }
};

serve(handler);
