const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

const email = 'routemood2019@gmail.com';
const password = functions.config().email.password='RouteMood2019';
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

exports.sendContact = functions.firestore.document('/contacts/{id}').onCreate((doc, context) => {
  const contactInfo = doc.data();
  const mailOptions = {
    from: 'Contacto Web <routemood2019@gmail.com',
    to: 'routemood2019@gmail.com',
    subject: 'Nuevo contacto de '+contactInfo.name,
    text: 'Hemos recibido un nuevo contacto de '+contactInfo.name+ ' con el email '+contactInfo.email+' diciendo: '+contactInfo.message
  };
  //Recoger los datos a enviar en el email

  mailTransport.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
      mailTransport.sendMail(mailOptions)
        .then(() => console.log('EMAIL SENT'))
        .catch((error) => console.error('There was an error while sending the email:', error));
    }
  });

});