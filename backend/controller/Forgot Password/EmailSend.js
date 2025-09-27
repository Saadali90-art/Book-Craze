import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "newid67890dft@gmail.com",
    pass: "uzumvbjoraanqfdt",
  },
});

const sendEmail = async (to, password) => {
  await transporter.sendMail({
    from: "newid67890dft@gmail.com",
    to: to,
    subject: "Verification Code",
    text: `Here is your verification code: ${password}`,
    html: `
  <div style="font-family: Arial, sans-serif; padding: 20px; background: #f9f9f9; border-radius: 8px;">
    <h2 style="color: #333;">📚 BookCraze Verification</h2>
    <p style="font-size: 16px; color: #555;">
      Hello,
    </p>
    <p style="font-size: 16px; color: #555;">
      We received a request to verify your email address for <b>BookCraze</b>.
    </p>
    <p style="font-size: 16px; color: #555;">
      Please use the following verification code:
    </p>
    <div style="margin: 20px 0; text-align: center;">
      <span style="font-size: 22px; font-weight: bold; color: #2b7cff; background: #eef5ff; padding: 10px 20px; border-radius: 6px;">
        ${password}
      </span>
    </div>
    <p style="font-size: 14px; color: #777;">
      This code will expire in <b>2 minutes</b>. If you didn’t request this, you can safely ignore this email.
    </p>
    <p style="font-size: 14px; color: #777;">
      Thank you,<br>
      <b>The BookCraze Team</b>
    </p>
  </div>
`,
  });
};

export default sendEmail;
