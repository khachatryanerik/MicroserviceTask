import User from "./user";
import cron from "node-cron";
import dotenv from "dotenv";
import express from "express";

const app = express();

dotenv.config();

app.get("/", (req: any, res: any) => {
    User.signUp();
    cron.schedule("*/1 * * * *",() => User.sendMessage("Subject", "Hello World").catch(console.error));
    res.send("Started sending!");
});
app.listen(3311);