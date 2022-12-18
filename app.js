const express = require("express");
const app = express();

const scheduler = require("node-cron");
const { PORT } = require("./config");

scheduler.schedule("* * * * *", () => {
	console.log("ola");
});

app.listen(process.env.PORT, () => {
	console.log(`running on PORT ${PORT}`);
});
