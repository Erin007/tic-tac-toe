//game_view.js
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


const GameView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

events: {
  'click .btn-play': 'saveNames',
  'click .btn-new-game': 'newGame'
},


newGame : function (e){
    e.preventDefault();
    window.location.reload();
},

saveNames: function(e){
    e.preventDefault();
    console.log("Setting the player names")

    if (this.$('#X').val() != "") {
      this.model.set("playerX", this.$('#X').val())
    }

    if (this.$('#O').val() != "") {
      this.model.set("playerO", this.$('#O').val())
    }

    this.clearForm();
    this.startGame()
  },

  startGame : function(){
    this.$(".player-names-form").hide();
    this.promptPlayerX();
    this.drawSymbol();
  },

  promptPlayerX : function(){
    console.log("Xs turn")
    this.$('.greet-playerX').html("<h2>" + this.model.attributes.playerX + ", where would you like to put your X? </h2>")
    this.$(".greet-playerX").show()
    this.$(".greet-playerO").hide()
  },

  promptPlayerO : function(){
    console.log("Os turn")
    this.$('.greet-playerO').html("<h2>" + this.model.attributes.playerO + ", where would you like to put your O? </h2>")
    this.$(".greet-playerO").show()
    this.$(".greet-playerX").hide()
  },

  clearForm: function() {
    console.log("Clearing the form")
    this.$('.player-names-form input').val('');
  },

  announceWinner : function(){
    console.log("announcing the winner")
    this.$(".greet-playerO").hide()
    this.$(".greet-playerX").hide()
    this.$(".btn-new-game").show()

    if (this.model.tie() == true) {
      this.$('.tie').show()
    }

    if (this.model.winner() == "X"){
      this.$('.x-wins').append("<h2> Congratulations, " + this.model.attributes.playerX + "! </h2>")
      this.$('.x-wins').show()
    }

    if (this.model.winner() == "O"){
      this.$('.o-wins').append("<h2> Congratulations, " + this.model.attributes.playerO + "! </h2>")
      this.$('.o-wins').show()
    }
  },

  shouldOgo : function(){
    if (this.model.winner() == false && this.model.tie() == false){
      this.promptPlayerO();
      this.drawSymbol()
    }
    else {
      this.announceWinner()
      this.model.saveGame()
    }
  },

  shouldXgo : function(){
    if (this.model.winner() == false && this.model.tie() == false){
      this.promptPlayerX();
      this.drawSymbol()
    }
    else {
      this.announceWinner()
      this.model.saveGame()
    }
  },

  drawSymbol : function(){
    console.log("drawSymbol called")

      this.$("#spot1").click(_.bind(function() {
        if ($("#spot1").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot1").text("X")
          this.model.attributes.board[0][0] = "X"

          this.shouldOgo();
        }

        if ($("#spot1").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot1").text("O")
          this.model.attributes.board[0][0] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot2").click(_.bind(function() {

        if ($("#spot2").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot2").text("X")
          this.model.attributes.board[0][1] = "X"

          this.shouldOgo();
        }

        if ($("#spot2").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot2").text("O")
          this.model.attributes.board[0][1] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot3").click(_.bind(function() {

        if ($("#spot3").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot3").text("X")
          this.model.attributes.board[0][2] = "X"

          this.shouldOgo();
        }

        if ($("#spot3").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot3").text("O")
          this.model.attributes.board[0][2] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot4").click(_.bind(function() {

        if ($("#spot4").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot4").text("X")
          this.model.attributes.board[1][0] = "X"

          this.shouldOgo();
        }

        if ($("#spot4").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot4").text("O")
          this.model.attributes.board[1][0] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot5").click(_.bind(function() {

        if ($("#spot5").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot5").text("X")
          this.model.attributes.board[1][1] = "X"

          this.shouldOgo();
        }

        if ($("#spot5").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot5").text("O")
          this.model.attributes.board[1][1] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot6").click(_.bind(function() {

        if ($("#spot6").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot6").text("X")
          this.model.attributes.board[1][2] = "X"

          this.shouldOgo();
        }

        if ($("#spot6").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot6").text("O")
          this.model.attributes.board[1][2] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot7").click(_.bind(function() {

        if ($("#spot7").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot7").text("X")
          this.model.attributes.board[2][0] = "X"

          this.shouldOgo();
        }

        if ($("#spot7").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot7").text("O")
          this.model.attributes.board[2][0] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot8").click(_.bind(function() {

        if ($("#spot8").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot8").text("X")
          this.model.attributes.board[2][1] = "X"

          this.shouldOgo();
        }

        if ($("#spot8").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot8").text("O")
          this.model.attributes.board[2][1] = "O"

          this.shouldXgo();
        }
      }, this))

      this.$("#spot9").click(_.bind(function() {

        if ($("#spot9").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {

          $("#spot9").text("X")
          this.model.attributes.board[2][2] = "X"

          this.shouldOgo();
        }

        if ($("#spot9").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {

          $("#spot9").text("O")
          this.model.attributes.board[2][2] = "O"

          this.shouldXgo();
        }
      }, this))
},


render: function() {

  return this;
}
});

export default GameView;
