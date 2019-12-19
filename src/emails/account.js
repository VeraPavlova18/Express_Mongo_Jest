const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'pavlova.vera18@gmail.com',
    subject: 'Thanks for joing in...',
    text: `Welcom to the app, ${name}. Let me know`
  });
};

const sendByeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'pavlova.vera18@gmail.com',
    subject: 'Good bye',
    text: `Good bye, ${name}.`
  });
};

module.exports = {
  sendWelcomeEmail,
  sendByeEmail
};

