export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields (Name, Email, Message).",
      });
    }

    console.log("=== NEW CONTACT MESSAGE ===");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject || "Portfolio Contact"}`);
    console.log(`Message: ${message}`);
    console.log(`Time: ${new Date().toISOString()}`);
    console.log("============================");

    return res.status(200).json({
      success: true,
      message: "Your message has been received! Ratan will get back to you soon.",
    });
  } catch (error) {
    console.error("send-email API error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error occurred while processing message.",
    });
  }
}
