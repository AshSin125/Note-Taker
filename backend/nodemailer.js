import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false, // use STARTTLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

// Verify SMTP connection on startup (logs result) - helpful for debugging
transporter.verify()
    .then(() => console.log('SMTP transporter is ready'))
    .catch((err) => console.error('SMTP transporter verification failed:', err));

export default transporter