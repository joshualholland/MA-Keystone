const mailgunLoader = require("mailgun-js");
const keyRing = require("../keys.json");

let mailgun = mailgunLoader({
  apiKey: keyRing.MailGun.apiKey,
  domain: keyRing.MailGun.apiDomain
});

const sendEmail = (to, from, subject, text) => {
  let data = {
    to: to,
    from: from,
    subject: subject,
    text: text
  };
  return mailgun.messages().send(data);
};

const mailgunCareers = async (req, res, next) => {
  // res.send('What the fk')
  const name = req.body.name;
  const email = req.body.email;
  const desiredPosition = req.body.desiredPosition;
  const message = req.body.message;

  const to = "foundanoreo@gmail.com"; // Change to MA Amanda's email
  const from = email;
  const subject = "Application from: " + name;
  const text =
    "From: " +
    name +
    "\n\n" +
    "Message: \n" +
    message +
    "\n\n" +
    "Reply: " +
    email;
  try {
    await sendEmail(to, from, subject, text);
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

  const to = "foundanoreo@gmail.com"; // Change to MA Amanda's email
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

const requireUser = function(req, res, next) {
  if (!req.user) {
    req.flash("error", "Please sign in to this access this page.");
    res.redirect("/keystone/signin");
  } else {
    next();
  }
};

const adminView = function(req,res){
  res.redirect('/')
}

module.exports = { mailgunCareers, mailgunContact, requireUser, adminView };
