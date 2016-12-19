//game.js
import Backbone from 'backbone';
// import Player from 'app/models/player';
// import Spot from 'app/models/spot';
// import Board from 'app/collections/board';

const Game = Backbone.Model.extend({
  // This model represents the overall application.
  initialize: function(options) {
    this.set("board", [
            [" "," "," "],
            [" "," "," "],
            [" "," "," "],
          ]);

    //this.set("playerX", this.$('.player-names-form input[name1="name1"]').val());
    this.set("playerX", "Xavier");
    //this.set("playerO", this.$('.player-names-form input[name2="name2"]').val());
    this.set("playerO", "Octavia");
  },

  // countX: function(){
  //     //counts how many X's are on the board
  //   },
  //
  // countO: function(){
  //     //counts how many Os are on the board
  //   },
  //
  // moreXs: function(){
  //     //calls the count functions to see whose turn it is, X starts, then O's turn if there are more Xs on the board
  //   },
  //
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
  //
  // tie: function(){
  //     //determines if there is a tie game
  //   },}
  //
  // announceWinner: function(){
  //   //uses the winner and tie functions from the boardView to determine if there is a winner/tie and displays who it is
  // },
  //
  // play: function(){
  //   //controls the flow of the game by alternating whose turn it is
  // },

  // }
});

module.exports = Game;
export default Game;
