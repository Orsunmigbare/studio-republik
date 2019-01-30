const nodemailer = require("nodemailer");
const config= require('./../config')


async function sendMail(clientName,clientEmail,clientPhone,clientMessage){
let success ;
// create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: config.mail.email, 
      pass: config.mail.password 
    }
  });
 
   let MessageSubject =`${clientName}  dropped a messageon studio-republik-web `
   let MessageString = 
   `${clientMessage}\n
   My phone ${clientPhone}\n
   My Email ${clientEmail}.
   `


  // setup email data with unicode symbols
  let mailOptions = {
    from: '"studio-republik-web" <no-reply@studio-republik.com>', // sender address
    to: "gbareoyekan@yahoo.com", // list of receivers
    subject: MessageSubject, // Subject line
    text: MessageString, // plain text body
  };

  await transporter.sendMail(mailOptions)
  .then((info)=>{
      success = true;
      console.log(info.message)
  })
  .catch((err)=>{
      success = false;
      console.log(err.message)
  })
  
  return success
}

module.exports = sendMail