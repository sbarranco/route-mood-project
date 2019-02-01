const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const email = 'sbarrancovico@gmail.com';
const password = functions.config().email.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});
console.log(email, password);

exports.sendContact = functions.firestore.document('/contacts/{id}').onCreate((doc, context) => {
  const contactInfo = doc.data();
  const mailOptions = {
    from: 'Contacto Web <sbarrancovico@gmail.com',
    to: 'sbarrancovico@gmail.com',
    subject: 'Nuevo contacto de ' + contactInfo.fname,
    text: 'Hemos recibido un nuevo contacto de '+ contactInfo.fname+ contactInfo.lname + ' con el email '+contactInfo.email+' diciendo: '+contactInfo.message
  };
  //Recoger los datos a enviar en el email

  mailTransport.verify(function(error, success) {
    if (error) {
      console.log('mail transport verify', error);
    } else {
      console.log('Server is ready to take our messages');
      mailTransport.sendMail(mailOptions)
        .then(() => console.log('EMAIL SENT'))
        .catch((error) => console.error('There was an error while sending the email:', error));
    }
  });

});