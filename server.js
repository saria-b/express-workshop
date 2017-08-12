var express = require('express');
var app = express();
var formidable = require('express-formidable');
var fs = require('fs');




app.use(express.static("public"));
app.use(formidable());

app.post('/create-post', function (req, res) {
    console.log(req.fields);
    fs.readFile(__dirname + '/data/posts.json', function (error, file) {
      var parsedFile = JSON.parse(file);
      var stuff = req.fields.blogpost;
      var date = Date.now();
      parsedFile[date] = stuff;
    fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(parsedFile), function (error) {
    //var parsedFile = JSON.parse(file);
    //console.log(file.toString());
    var latestPost = {};
    latestPost[date] = stuff;
    res.send (latestPost)
    });

});
    
});

app.get("/get-posts", function (req, res ) {
   fs.readFile(__dirname + '/data/posts.json', function (error, file) {
   res.send (JSON.parse(file))
   
});
})






app.listen(8080, function () {
 console.log('Server is listening on port 8080. Ready to accept requests!');
});

