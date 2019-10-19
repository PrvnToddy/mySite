const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const path = require("path");

const PORT = 8080;

//Data Parsing
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log("Server is starting on PORT => ", 8080);
});

app.post("/send", (req, res) => {
  console.log("Data: ", req.body);
  const output = `
    <p>Receive New Mail</p>
    <h1>Contact Details</h1>
    <ul>
    <li>Name:${req.body.name}</li>
    <li>Email:${req.body.email}</li>
    <li>Mobile Number:${req.body.mobile}</li>
    <li>Message:${req.body.message}</li>
    </ul>`;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
      user: "praveenprakasham@gmail.com", // generated ethereal user
      pass: "22501694421" // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // send mail with defined transport object
  let mailOption = {
    from: "praveenprakasham@gmail.com", // sender address
    to: "praveenprakasham@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    // text: 'Hello world?', // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      // return console.log(error);
      alert("message not send");
    }
    console.log("Message sent: " + info.response);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // res.send('Message Send!!')
  });

  res.redirect("/success.html");
  // alert('message send');
});