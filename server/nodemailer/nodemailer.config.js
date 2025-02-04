import nodemailer from "nodemailer"


let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'leelamanohar.gudivada@gmail.com',
        pass: 'wzfamwqgjrriarld'
    }
});

export default transporter;