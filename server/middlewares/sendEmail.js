const nodeMailer = require('nodemailer');

exports.sendEmail = async (options) => {
    // const transporter = nodeMailer.createTransport({
    //     host: process.env.SMPT_HOST,
    //     port: process.env.SMPT_PORT,
    //     auth: {
    //         user: process.env.SMPT_MAIL,
    //         pass: process.env.SMPT_PASSWORD,
    //     },
    //     service: process.env.SMPT_SERVICE,
    // });

    // var transporter = nodeMailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //       user: "890b71e74d7300",
    //       pass: "01e4654d087f5b"
    //     }
    //   });
    const  transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.USER,
        pass: process.env.PASS,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    })

    // const mailOptions = {
    //     from: process.env.SMPT_MAIL,
    //     to: options.email,
    //     subject: options.subject,
    //     text: options.message,
    //     html: options.html,
    // }
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: options.email,
      subject: options.subject,
      text: options.message,
      html: options.html,
  }

    await transporter.sendMail(mailOptions);
}