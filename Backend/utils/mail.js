const nodeMailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    service:'gmail',
    secure:true,
    auth: {
      user: 'ecommercesoumuababu@gmail.com',
      pass: 'vjkb kymf qlok zvod',
    },
  });

  const mailOptions = {
    from:'ecommercesoumuababu@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;