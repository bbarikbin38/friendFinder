var friends = require("/Users/bijanbarikbin/upenn/Homework2/FriendFinder/app/data/friends.js");

module.exports = function (app) {
    // this will get any of the information from friends.js and return the information
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        console.log(newFriend);
    
    });

};