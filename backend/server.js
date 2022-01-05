const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const pdfTemplate = require("./mailGenerator");

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));

var nodemailer = require("nodemailer"); //console.log("html"+pdfTemplate);

function getDateFormat() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  var today = dd + "/" + mm + "/" + yyyy;
  return today;
}

app.post("/create-pdf", (req, res) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "", // your gmail id
      pass: "", // your password
    },
  });
  var mailOptions = {
    from: "", // sender address (who sends)
    to: "", // list of receivers (who receives)
    subject: "Daily Report " + getDateFormat(), // Subject line
    text: "This is text version!", // plaintext body
    html: pdfTemplate(req.body), // html body
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: " + info.response);
  });
});

app.post("/fetch-pdf", (req, res) => {
  res.send(pdfTemplate(req));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
