require("dotenv").config();

module.exports = {
	PORT: process.env.PORT,
	SMTP_PORT: process.env.SMTP_PORT,
	HOST_SERVICE: process.env.HOST_SERVICE,
	USER_EMAIL: process.env.USER_EMAIL,
	USER_PASSWORD: process.env.USER_PASSWORD,
	SENDERS_EMAIL: process.env.SENDERS_EMAIL
};
