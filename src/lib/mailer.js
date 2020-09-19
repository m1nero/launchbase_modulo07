const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "2db1703e44e3a0",
        pass: "7a756d0035077f"
    }
})