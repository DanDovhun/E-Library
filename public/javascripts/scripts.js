var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("library");

  const prompt = require('prompt-sync')();
  const name = prompt('What is your name? ');
  console. log(`Hey there ${name}`);

  dbo.collection("books").find({}).toArray(function(err, result) {
    if (err) throw err;
    for (i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
    db.close();
  });
}); 