const nodemailer = require('nodemailer');
// change date to current time stamp
const sendEmail = async (to, subject, amount, date, business, receiptNo) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to,
      subject,
      text:`Business Name: ${business}\nReceipt Number: ${receiptNo}\nDate: ${date}\nAmmount: $${amount}`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

module.exports = sendEmail;
