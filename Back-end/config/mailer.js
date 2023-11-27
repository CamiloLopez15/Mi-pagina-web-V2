import nodemailer from 'nodemailer'
import {email, passEmail} from "./../config.js"

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: passEmail,
  }
});

transporter.verify().then(() => {
  console.log('Preparado para enviar un emial')
})