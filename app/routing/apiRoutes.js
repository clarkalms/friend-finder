
var friends = require('../data/friends.js');

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            image: req.body.image,
            scores: []
        };
        var scoresArray = [];
        for(var i = 0; i < req.body.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]) )
          }
          newFriend.scores = scoresArray;

        var compareScores = [];
        for (var i = 0; i < friends.length; i++) {
            var scoreDiff = 0;
            for (var x = 0; x < newFriend.scores.length; x++) {
                scoreDiff += (Math.abs(parseInt(friends[i].scores[x]) - parseInt(newFriend.scores[x])));
            }
            compareScores.push(scoreDiff);

        }
        let match = 0;
        for (var i = 1; i < compareScores.length; i++) {
            if (compareScores[i] <= compareScores[match]) {
                match = i;
            }
        }


        let friendMatch = friends[match];
        res.json(friendMatch);
        friends.push(newFriend);


    });

};