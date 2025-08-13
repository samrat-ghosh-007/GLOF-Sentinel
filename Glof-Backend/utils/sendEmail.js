const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ALERT_EMAIL,
      pass: process.env.ALERT_EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: `"GLOF Alert System" <${process.env.ALERT_EMAIL}>`,
    to,
    subject,
    text
  });
};

module.exports = sendEmail;
