var http = require('http')
http.createServer(function(req,res){
res.writeHead(200,{ 'Content-Type' : 'text/html' });

 var response_str=
  '<!DOCTYPE html>\n'+
  '<html>\n'+
  '<head>\n'+
  '<meta charset = "UTF-8">\n'+
  '<title>はじめてのMicrosoft Azure</title>\n'+
  '</head>\n'+
  '<body>\n'+
  '<h1>Hello World!</h1>\n'+
  '</body>\n'+
  '</html>\n';
  
  res.end(response_str);
  
  }).listen(process.env.PORT||1337);
