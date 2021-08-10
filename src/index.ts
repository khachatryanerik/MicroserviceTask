import User from "./user";
import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();
User.signUp();
cron.schedule("*/1 * * * *",() => User.sendMessage("Subject", "Hello World").catch(console.error));