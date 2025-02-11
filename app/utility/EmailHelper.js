import nodemailer from 'nodemailer';

const EmailSend=async (EmailTo,EmailText,EmailSubject)=>{

     // Replace your own
     let  transport= nodemailer.createTransport({
            host:"mail.teamrabbil.com",
            port:25,
            secure:false,
            auth:{user:"info@teamrabbil.com",pass:"~sR4[bhaC[Qs"},
            tls:{rejectUnauthorized:false}
        })


    let mailOption={
         from:'XYZ Ecommerce Solution <info@xyz.com>',
         to:EmailTo,
         subject:EmailSubject,
         text:EmailText
    }

    return await transport.sendMail(mailOption)
}

export default EmailSend;