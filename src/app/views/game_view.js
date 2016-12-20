//game_view.js
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
// import BoardView from 'app/views/board_view';
// import SpotView from 'app/views/spot_view';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

events: {
  'click .btn-play': 'saveNames'
},

saveNames: function(e){
    e.preventDefault();
    console.log("Setting the player names")
    this.model.set("playerX", this.$('#X').val())
    this.model.set("playerO", this.$('#O').val())
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
    this.$(".greet-playerO").hide()
    this.$(".greet-playerX").hide()

    if (this.model.tie() == true) {
      this.$(".greet-playerO").hide()
      this.$(".greet-playerX").hide()
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

  drawSymbol : function(){
    console.log("drawSymbol called")


      this.$("#spot1").click(_.bind(function() {
        console.log("box 1 selected");
        if ($("#spot1").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 1 is available")
          $("#spot1").text("X")
          this.model.attributes.board[0][0] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot1").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 1 is available")
          $("#spot1").text("O")
          this.model.attributes.board[0][0] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot2").click(_.bind(function() {
        console.log("box 2 selected");
        if ($("#spot2").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 2 is available")
          $("#spot2").text("X")
          this.model.attributes.board[0][1] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot2").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 2 is available")
          $("#spot2").text("O")
          this.model.attributes.board[0][1] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot3").click(_.bind(function() {
        console.log("box 3 selected");
        if ($("#spot3").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 3 is available")
          $("#spot3").text("X")
          this.model.attributes.board[0][2] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot3").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 3 is available")
          $("#spot3").text("O")
          this.model.attributes.board[0][2] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false ){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot4").click(_.bind(function() {
        console.log("box 4 selected");
        if ($("#spot4").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 4 is available")
          $("#spot4").text("X")
          this.model.attributes.board[1][0] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot4").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 4 is available")
          $("#spot4").text("O")
          this.model.attributes.board[1][0] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else{
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot5").click(_.bind(function() {
        console.log("box 5 selected");
        if ($("#spot5").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 5 is available")
          $("#spot5").text("X")
          this.model.attributes.board[1][1] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else{
            this.announceWinner()
          }
        }

        if ($("#spot5").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 5 is available")
          $("#spot5").text("O")
          this.model.attributes.board[1][1] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else{
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot6").click(_.bind(function() {
        console.log("box 6 selected");
        if ($("#spot6").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 6 is available")
          $("#spot6").text("X")
          this.model.attributes.board[1][2] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot6").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 6 is available")
          $("#spot6").text("O")
          this.model.attributes.board[1][2] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot7").click(_.bind(function() {
        console.log("box 7 selected");
        if ($("#spot7").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 7 is available")
          $("#spot7").text("X")
          this.model.attributes.board[2][0] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot7").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 7 is available")
          $("#spot7").text("O")
          this.model.attributes.board[2][0] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot8").click(_.bind(function() {
        console.log("box 8 selected");
        if ($("#spot8").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 8 is available")
          $("#spot8").text("X")
          this.model.attributes.board[2][1] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot8").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 8 is available")
          $("#spot8").text("O")
          this.model.attributes.board[2][1] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }
      }, this))

      this.$("#spot9").click(_.bind(function() {
        console.log("box 9 selected");
        if ($("#spot9").text() == "" && this.model.moreXs() == false && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 9 is available")
          $("#spot9").text("X")
          this.model.attributes.board[2][2] = "X"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerO();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }

        if ($("#spot9").text() == "" && this.model.moreXs() == true && this.model.winner() == false && this.model.tie() == false) {
          console.log("spot 9 is available")
          $("#spot9").text("O")
          this.model.attributes.board[2][2] = "O"
          console.log(this.model.attributes.board)
          if (this.model.winner() == false && this.model.tie() == false){
            this.promptPlayerX();
            this.drawSymbol()
          }
          else {
            this.announceWinner()
          }
        }
      }, this))
},





render: function() {

  // const rolodexView = new RolodexView({
  //   model: this.model.rolodex,
  //   el: this.$('main')
  // });
  // rolodexView.render();

  return this;
}
});

export default GameView;
