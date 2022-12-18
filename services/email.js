const nodemailer = require("nodemailer");

const {
	SMTP_PORT,
	HOST_SERVICE,
	USER_EMAIL,
	USER_PASSWORD,
	SENDERS_EMAIL
} = require("../config");

const RECEIVERS_EMAIL = "saptarshi0009@gmail.com";

const emailOptions = {
	from: SENDERS_EMAIL,
	to: RECEIVERS_EMAIL,
	cc: [],
	bcc: [],
	subject: "Practice mail",
	text: "hello from the other world"
};

const transporter = nodemailer.createTransport({
	host: HOST_SERVICE,
	port: SMTP_PORT,
	secure: false,
	auth: {
		user: USER_EMAIL,
		pass: USER_PASSWORD
	}
});

module.exports = { emailOptions, transporter };
