const mailgunLoader = require("mailgun-js");
const multer = require('multer');
var path = require("path");

let mailgun = mailgunLoader({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_API_DOMAIN
});

const sendEmail = (to, from, subject, text, attachment) => {
  let data = {
    to: to,
    from: from,
    subject: subject,
    text: text,
    attachment: attachment
  };
  return mailgun.messages().send(data);
};

const mailgunCareers = async (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const desiredPosition = req.body.desiredPosition;
  const desiredHours = req.body.desiredHours;
  const message = req.body.message;
  const reason = req.body.reason;
  const selectedFile = req.body.selectedFile;
  const crayon = req.body.crayon;
  const to = "joshualholland@gmail.com"; // Change to MA Amanda's email
  const from = email;
  const subject = "Application from: " + name;
  const text =
    "From: " +
    name +
    "\n\n" +
    "Phone: " +
    phone +
    "\n\n" +
    "Desired Position: " +
    desiredPosition +
    "\n\n" +
    "Desired Hours: " +
    desiredHours +
    "\n\n" +
    "Message: \n" +
    message +
    "\n\n" +
    "Reason: \n" +
    reason +
    "\n\n" +
    "Crayon: \n" +
    crayon +
    "\n\n" +
    "Reply: " +
    email;
  const attachment = selectedFile
  try {
    await sendEmail(to, from, subject, text, attachment);
    res.send("OK");
  } catch (e) {
    console.log(e + "\n ERROR");
    res.status(500);
  }
};

const mailgunContact = async (req, res, next) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const to = "joshualholland@gmail.com"; // Change to MA Amanda's email
  const from = email;
  const subject = "Inquiry from: " + name;
  const text =
    name + "\n\n" + "Message: \n" + message + "\n\n" + "Reply: " + email;
  try {
    await sendEmail(to, from, subject, text);
    res.send("OK");
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

const requireUser = function (req, res, next) {
  if (!req.user) {
    req.flash("error", "Please sign in to this access this page.");
    res.redirect("/keystone/signin");
  } else {
    next();
  }
};

const adminView = function (req, res) {
  res.redirect('/')
}

module.exports = { mailgunCareers, mailgunContact, requireUser, adminView };
