import React , {Compnent} from 'react'
import * as nodemailer from 'nodemailer'

    const credentials = {
        user : 'oyekanorisunmigbare@gmail.com',
        pass : 'tolulopeadedokun'
    },
    userMailOptions = {
        to : 'gbareoyekan@yahoo.com'
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: credentials
    })
class Mailer extends Compnent {
       
    static sendmail = (senderOptions)=>{
        let mailOptions = {
            from : senderOptions.email,
            to : userMailOptions.to,
            subject: `${senderOptions.name} Dropped a message on studio-republik.com`,
            text:  senderOptions.message
        }

        return transporter.sendMail(mailOptions)
    }
}

export default Mailer