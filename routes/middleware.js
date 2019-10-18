var mailgunLoader = require('mailgun-js');
const keyRing = require('./keys.json');

let mailgun = mailgunLoader({
    apiKey: keyRing.apiKey,
    domain: keyRing.apiDomain
})

const sendEmail = (to,from,subject,text)=>{
    let data = {
        to: to,
        from: from,
        subject: subject,
        text: text,
    }
    return mailgun.messages().send(data);
}
