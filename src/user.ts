import nodemailer from "nodemailer";

class User {
    static transporter: any;

    static async signUp() {
        User.transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })
    }

    static async sendMessage(subject: string, text: string) {
        const msg = await User.transporter.sendMail({
            from: `${ process.env.EMAIL }`,
            to: `${ process.env.CLIENT }`,
            subject: subject,
            text: text
        });
    
    console.log("Message sent: ", msg.messageId);
    }
}

export default User;