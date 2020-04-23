import Router from 'next/dist/next-server/lib/router/router';

var mongo = require ('mongodb');
var path = require ('path');

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/MyDb", function (err, db) {
   
     if(err) throw err;

     //Write databse Insert/Update/Query code here..
                
});

// Router.get ('/thelist', function(req, res){
//     var mongoClient = mongodb.mongoClient;

//     mongoClient.connect(url, function(err, db) {
//         if(err){
//             console.log("unable to connect to the data base",err);
//         }else{
//             var collection = db.collection('students');

//             collection.find({}).toArray(function(err, result){
//                 if(err){
//                     res.send(err);
//                 }else if(result.length){
//                     res.render('sudentlist',{
//                         "studentlist": result
//                     });
//                 }else{
//                     res.send("not found");
//                 }
//             });
//         }
//     });
// });

const Index = () => (
    <div>
      <p>Sample app using React and Next.js super </p>
    </div>
  );
  
  export default Index;