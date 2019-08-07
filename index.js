var request = require("request");

var options = { method: 'POST',
  url: 'https://httptriggerjsallan.azurewebsites.net/api/HttpTriggerallan',
  qs: 
   { name: 'Azure',
     sale_gross: '100',
     earnings: '100',
     thisid: '1001111' },
  headers: 
   { 'Postman-Token': '87ac18d8-facf-4511-949d-0e2b0bde1213',
     'cache-control': 'no-cache',
     'Content-Type': 'application/json' },
  body: { name: 'Azure' },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body); 
});


