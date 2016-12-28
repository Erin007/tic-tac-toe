//game.js
import Backbone from 'backbone';

const Game = Backbone.Model.extend({
  // This model represents the overall application.
  initialize: function(options) {
    this.set("board", [
            [" "," "," "],
            [" "," "," "],
            [" "," "," "],
          ]);

    //default names that are over-written if the user enters different names for players
    this.set("playerX", "Xavier");
    this.set("playerO", "Octavia");
  },

  url: 'http://localhost:3000/api/v1/games',

  countX: function(){
      //counts how many X's are on the board
      var Xcount = 0;

      for(var i = 0; i < 3; ++i){
        for(var j = 0; j < 3; ++j){

          if(this.get("board")[i][j] == "X")
            Xcount ++;
        }//inner for
      }//outer for
      return Xcount
    },

  APIprep : function(){
    const gameAPIformatted = {
      "board": [
        this.get("board")[0][0],
        this.get("board")[0][1],
        this.get("board")[0][2],
        this.get("board")[1][0],
        this.get("board")[1][1],
        this.get("board")[1][2],
        this.get("board")[2][0],
        this.get("board")[2][1],
        this.get("board")[2][2],
      ],
      "players": [
        this.get("playerX"),
        this.get("playerO")
      ],
      "outcome": this.outcomeHelper(),
    }
    return gameAPIformatted
  },

  outcomeHelper : function(){
    if (this.winner() != false){
      return this.winner()
    }
    if (this.tie()){
      return "draw"
    }
  },

  saveGame : function(){
      this.save(this.APIprep())
  },

  countO: function(){
      //counts how many Os are on the board
      var Ocount = 0;

      for(var i = 0; i < 3; ++i){
        for(var j = 0; j < 3; ++j){

          if(this.get("board")[i][j] == "O")
            Ocount++;
        }//inner for
      }//outer for
      return Ocount
    },

  moreXs: function(){
      //calls the count functions to see whose turn it is, X starts, then O's turn if there are more Xs on the board
      if (this.countX() > this.countO()){
        return true
      }
      else {
        return false
      }
    },

    winner: function(){
      //determines if there is a winning trio of symbols on the board

      for (var i=0; i < 3; i++){
        //horizontal winner
        if (this.get("board")[i][0] != " "  && this.get("board")[i][0] == this.get("board")[i][1] && this.get("board")[i][0] == this.get("board")[i][2]){
            return this.get("board")[i][0]
        }

        //vertical winner
        if (this.get("board")[0][i] != " "  && this.get("board")[0][i] == this.get("board")[1][i] && this.get("board")[0][i] == this.get("board")[2][i]){
            return this.get("board")[0][i]
        }
      }

      //diagonal winners
        if (this.get("board")[0][0] != " "  && this.get("board")[0][0] == this.get("board")[1][1] && this.get("board")[0][0] == this.get("board")[2][2]){
           return this.get("board")[0][0]
        }

        if (this.get("board")[0][2] != " "  && this.get("board")[0][2] == this.get("board")[1][1] && this.get("board")[0][2] == this.get("board")[2][0]){
            return this.get("board")[0][2]
        }

      return false
    },

  tie: function(){
      if (this.winner() == false && this.countX() == 5){
        return true
      }
      return false
    },

});

module.exports = Game;
export default Game;
