const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service:'gmail',
    secure:true,
    auth: {
      user: 'neuzbuddy456@gmail.com',
      pass: 'tngu kscl iyvb nhce',
    },
  });
//tngu kscl iyvb nhce
//270db097soumyababu
  const mailOptions = {
    from:'neuzbuddy456@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;