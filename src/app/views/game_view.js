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
    this.$(".greet-playerX").show()
    this.drawX();
  },

  promptPlayerX : function(){
    this.$(".greet-playerX").show()
    this.$(".greet-playerO").hide()
  },

  promptPlayerO : function(){
    this.$(".greet-playerO").show()
    this.$(".greet-playerX").hide()
  },


  clearForm: function() {
    console.log("Clearing the form")
    this.$('.player-names-form input').val('');
  },

  drawX : function(){
    console.log("drawX called")

      this.$("#spot1").click(_.bind(function() {
        console.log("box 1 selected");
        $("#spot1").text("X")
        this.model.attributes.board[0][0] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))

      this.$("#spot2").click(_.bind(function() {
        console.log("box 2 selected");
        $("#spot2").text("X")
        this.model.attributes.board[0][1] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
         this.drawO()
      }, this))

      this.$("#spot3").click(_.bind(function() {
        console.log("box 3 selected");
        $("#spot3").text("X")
        this.model.attributes.board[0][2] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))

      this.$("#spot4").click(_.bind(function() {
        console.log("box 4 selected");
        $("#spot4").text("X")
        this.model.attributes.board[1][0] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))

      this.$("#spot5").click(_.bind(function() {
        console.log("box 5 selected");
        $("#spot5").text("X")
        this.model.attributes.board[1][1] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))

      this.$("#spot6").click(_.bind(function() {
        console.log("box 6 selected");
        $("#spot6").text("X")
        this.model.attributes.board[1][2] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))

      this.$("#spot7").click(_.bind(function() {
        console.log("box 7 selected");
        $("#spot7").text("X")
        this.model.attributes.board[2][0] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))

      this.$("#spot8").click(_.bind(function() {
        console.log("box 8 selected");
        $("#spot8").text("X")
        this.model.attributes.board[2][1] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))

      this.$("#spot9").click(_.bind(function() {
        console.log("box 9 selected");
        $("#spot9").text("X")
        this.model.attributes.board[2][2] = "X"
        console.log(this.model.attributes.board)
        this.promptPlayerO()
        this.drawO()
      }, this))
  // }
},

drawO : function(){
  console.log("drawO called")

    this.$("#spot1").click(_.bind(function() {
      console.log("box 1 selected");
      $("#spot1").text("O")
      this.model.attributes.board[0][0] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot2").click(_.bind(function() {
      console.log("box 2 selected");
      $("#spot2").text("O")
      this.model.attributes.board[0][1] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot3").click(_.bind(function() {
      console.log("box 3 selected");
      $("#spot3").text("O")
      this.model.attributes.board[0][2] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot4").click(_.bind(function() {
      console.log("box 4 selected");
      $("#spot4").text("O")
      this.model.attributes.board[1][0] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot5").click(_.bind(function() {
      console.log("box 5 selected");
      $("#spot5").text("O")
      this.model.attributes.board[1][1] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot6").click(_.bind(function() {
      console.log("box 6 selected");
      $("#spot6").text("O")
      this.model.attributes.board[1][2] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot7").click(_.bind(function() {
      console.log("box 7 selected");
      $("#spot7").text("O")
      this.model.attributes.board[2][0] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot8").click(_.bind(function() {
      console.log("box 8 selected");
      $("#spot8").text("O")
      this.model.attributes.board[2][1] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))

    this.$("#spot9").click(_.bind(function() {
      console.log("box 9 selected");
      $("#spot9").text("O")
      this.model.attributes.board[2][2] = "O"
      this.promptPlayerX()
      this.drawX()
    }, this))
  // }
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
