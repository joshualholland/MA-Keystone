const keystone = require("keystone");
// Import our API routes with keystone importer
var importRoutes = keystone.importer(__dirname);
const bodyParser = require('body-parser');
var mailgunLoader = require('mailgun-js');
const keyRing = require('../keys.json');


var routes = {
  api: importRoutes("./api")
};

let mailgun = mailgunLoader({
    apiKey: keyRing.MailGun.apiKey,
    domain: keyRing.MailGun.apiDomain
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

// Setup Route Bindings
module.exports = nextApp => keystoneApp => {

  // Next request handler
  const handle = nextApp.getRequestHandler();

  keystoneApp.use(bodyParser.json())

  // Gets Bridal data
  keystoneApp.get(
    "/api/bridal",
    keystone.middleware.api,
    routes.api.bridal.list
  );
  // Service data
  keystoneApp.get(
    "/api/services",
    keystone.middleware.api,
    routes.api.services.list
  );
  // Stylist data
  keystoneApp.get(
    "/api/stylist",
    keystone.middleware.api,
    routes.api.stylists.list
  );
  // Team data
  keystoneApp.get("/api/team", keystone.middleware.api, routes.api.team.list);

  console.log(routes);

  //MailChimp
  keystoneApp.post("/api/careers",async (req,res,next)=>{
	console.log(req.body)
	const name = req.body.name;
	const email = req.body.email;
	const desiredPosition = req.body.desiredPosition;
	const message = req.body.message;

	const to = 'foundanoreo@gmail.com' // Change to MA Amanda's email
	const from = email;
	const subject = 'Application from: '+name;
	const text = "From: " + name + "\n\n"+
	"Message: \n" + message + "\n\n" + 
	"Reply: " + email;
	try{
		await sendEmail(
			to,
			from,
			subject,
			text
		)
	}catch(e){
		console.log(e)
		res.status(500);
	}
  })

  keystoneApp.post("/api/contact",async (req,res,next)=>{
	console.log(req.body)
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;

	const to = 'foundanoreo@gmail.com' // Change to MA Amanda's email
	const from = name;
	const subject = 'Inquiry from: '+name;
	const text = name + "\n\n"+
	"Message: \n" + message + "\n\n" + 
	"Reply: " + email;
	try{
		await sendEmail(
			to,
			from,
			subject,
			text
		)
	}catch(e){
		console.log(e)
		res.status(500);
	}
  })

  keystoneApp.get("*", (req, res) => {
    return handle(req, res);
  });
};
