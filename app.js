const express = require("express");
const app = express();

const scheduler = require("node-cron");
const { emailOptions, transporter } = require("./services/email");
const { PORT } = require("./config");

scheduler.schedule("* * * * * *", () => {
  console.log("sending mail every second");
	transporter.sendMail(emailOptions, (err, info) => {
		if (err) {
			console.log(err);
		} else {
			console.log("email sent" + info.response);
		}
	});
});

app.listen(process.env.PORT, () => {
	console.log(`running on PORT ${PORT}`);
});
