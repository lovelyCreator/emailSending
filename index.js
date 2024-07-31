const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "lovely7rh@gmail.com",
    pass: "vxtvjdzfkspvdcjv",
  },
});

const mailOptions = {
  from: "lovely7rh@gmail.com",
  to: "royhensley0727@gmail.com",
  subject: "Hello from Nodemailer",
  text: "This is a test email sent using Nodemailer.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: ", error);
  } else {
    console.log("Email sent: ", info.response);
  }
});